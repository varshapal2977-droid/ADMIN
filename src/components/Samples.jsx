import React, { Component } from 'react'

export default class Samples extends Component {
  render() {
    return (
      <div>
        <h1>tihhs is inside Sample</h1>
      </div>
    )
  }
}
class Sample extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({count: this.state.count + 1})
    }
  render() {
    return (
      <div>
        <h1>This is a sample component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

