import React, { Component } from 'react'
import { useState } from 'react'

//export default class Sample extends Component {
  //render() {
   // return (
    //  <div>
       // <h1>This is inside Sample</h1>
     // </div>
   // )
 // }
//}
//class Sample extends Component {
    //constructor(){
        //super()
        ///this.state = {
           // count: 0
        //}
    //}
   // increment = () => {
        //this.setState({count: this.state.count + 1})
   //// }
  //render() {
   // return (
      ///<div>
       // <h1>This is a sample component</h1>
        //<h2>{this.state.count}</h2>
       // <button onClick={this.increment}>Increment</button>
      //</div>
  //  )
 // }
//}
function Sample() {
    const [count, setCount] = useState(0)
   
      const decrement= () => {
        setCount(count - 1)}

       const increment = () => {
        setCount(count + 1)
       }
       
  return (
    <div>
      <h1>This is a sample component</h1>
      <h2>{count}</h2>
      
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
    </div>
  )
}
export default Sample


