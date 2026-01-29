//setTimeout(()=>
   // console.log("after 10seconds")
////,2*1000)
//setInterval(() => {
  
//}, interval);
//const timerID = setInterval(() => {console.log("set interval")}, 1000);
//timeoutID = setTimeout(() => {clearInterval(timerID);console.log("cleared interval")},1000)
//let num = 1;
////const  ID = setInterval(() => {
  //(num == 10) clearInterval(timerID);console.log(num); num++;}, 1000);
 //const name = document.querySelector('#name')
 ////const btn = document.querySelector('.btn')
 //const list = document.querySelector('.list')
 //if(name.value is ==="")
 
 //setTimeout(()=>{
   // console.log("time is up");
//}// ,5000);

//onsole.log("first message");
////setTimeout(() => {
   // console.log("second message")
//}, 2000);
////console.log("third message");
//setInterval(()=>{
    //console.log(" reminder drink water in every 2 seconds");
//},2000);

//console.log("start the interval....");
//setInterval(() => {
    //console.log("repeating messages");
//},2000);

//console.log("interval has been set");

//function third(){
//    console.log("third function is rynning(top f the stack");
//}
//function second(){
   /// console.log("second function is running (while calling third)");third();
//}

//function first(){
    //console.log("first function is runnig whilecalling he second");second();
//}
//console.log("script stareted");
//first();
//console.log("script ended");
//f//unction print(callback){
    //onsole.log("inside print function");
    //callback();
//}   
//print("callback function is invoked");

function print (num){
    console.log("inside print function");
    
}
    setTimeout(() => {
    console.log("inside print function");
    num()

},2000) ;
function sample(){
    console.log("sample function is invoked");
}



