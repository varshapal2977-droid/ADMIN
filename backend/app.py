from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///fitmantra.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# ---------------- DATABASE MODELS ---------------- #

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    phone = db.Column(db.String(20))
    fitcoins = db.Column(db.Integer, default=0)

class Mentor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    role = db.Column(db.String(100))
    rating = db.Column(db.Float)
    verified = db.Column(db.Boolean)

class Progress(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(20))
    score = db.Column(db.Integer)

# ---------------- ROUTES ---------------- #

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/mentors")
def mentors():
    mentors = Mentor.query.all()
    return jsonify([
        {
            "name": m.name,
            "role": m.role,
            "rating": m.rating,
            "verified": m.verified
        } for m in mentors
    ])

@app.route("/api/progress", methods=["GET", "POST"])
def progress():
    if request.method == "POST":
        data = request.json
        p = Progress(date=data["date"], score=data["score"])
        db.session.add(p)
        db.session.commit()
        return jsonify({"status": "saved"})
    
    data = Progress.query.all()
    return jsonify([{"date": d.date, "score": d.score} for d in data])

@app.route("/api/chat", methods=["POST"])
def chat():
    question = request.json["question"].lower()

    if "exercise" in question:
        answer = "Try 30 minutes of daily walking and stretching."
    elif "diet" in question:
        answer = "Eat balanced meals with protein, fruits and vegetables."
    elif "mental" in question:
        answer = "Meditation and proper sleep can improve mental health."
    else:
        answer = "Please consult a verified mentor for personalized advice."

    return jsonify({"answer": answer})

# ---------------- RUN APP ---------------- #

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

        if Mentor.query.count() == 0:
            db.session.add(Mentor(name="Dr. Asha Verma", role="General Physician", rating=4.8, verified=True))
            db.session.add(Mentor(name="Ravi Sharma", role="Yoga Trainer", rating=4.6, verified=True))
            db.session.commit()

    app.run(debug=True)
