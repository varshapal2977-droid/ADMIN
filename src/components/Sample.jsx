
//class Sample extends Component {
    //constructor(){
       // super()
       // this.state = {
          // count: 0,
        //}
   // }
   // componentDidMount(){
        //console.log("Component did mount")
   // }
    //shoulComponentUpdate(nextProps, nextState){
       // console.log("Should component update")
       // return false
    ///}
    //componentDidUpdate(){
       // console.log("Component did update")
    ///} 
    ////increment = () => {
        //this.setState({count: this.state.count + 1})
   //}
   ////componentWillUnmount(){
   /* console.log("Component will unmount")
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
}*/
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
/*function Sample() {
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
}*/
import React from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'
import navstyle from '../css/Navbar.module.css'
import sampleStyle from '../css/Sample.module.css'
import homepageStyle from '../css/Homepage.module.css'
/*function Sample() {
  // let count=0
  const [count, setCount]=useState(0)
  
  const increment = () => {
       setCount(count + 1)
    }

    const decrement = () => {
       setCount(count - 1)
    }
  return (
    <div>
      <h1>This is a sample component</h1>
      <h2>{count}</h2>
      <button className="btn" onClick={increment}>Increment</button>
      <button className="btn" onClick={decrement}>decrement</button>
    </div>
  )
}
*/
function Sample() {
  return
    (
      <div>
        <h1 className={style.heading}>This is a sample component</h1>
        <h2 className={style.count}>0</h2>  
        <button css={funcButton}onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    )
}
export default Sample

const funcButton = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  height: '40px',
  width: '100px',
  fontSize: '16px',
}

const button = styled.button`
  background-color: ${props => props.primary ? 'red' : 'green'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 40px;
  width: 100px;
  font-size: 16px;
  `