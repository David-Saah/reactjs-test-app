import './Styles/App.css';
import './Styles/Bootstrap/bootstrap.min.css'
import { Component } from 'react';
import Clock from './Components/Clock'
// import Home from './Components/Home'
// import Table from './Components/Table';
// import Comment from './Components/Comment'

// let Welcome = (props) => {
//   return <h1>Hello, {props.name}</h1>
// }


// const author = {
//   url: "img.png",
//   name: "John Doe",
//   text: "This is a props test comment",
//   date: "2021-06-5"
// }

//Declaring and using props with class components
class App extends Component {
  render() {
    return(

      <Clock />

      // <div className="container">
      //   <h1><Welcome name="Sara" /></h1>
      //   <h1><Welcome name="Justice" /></h1>
      //   <h1><Welcome name="Andrews" /></h1>
      //   <Comment author={author}/>
      // </div>
    )
  }
}

export default App;
