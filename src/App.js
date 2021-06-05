import './Styles/App.css';
import './Styles/Bootstrap/bootstrap.min.css'
// import Home from './Components/Home'
// import Table from './Components/Table';
import { Component } from 'react';

// let App = (props) => {
//   console.log(props)
// 	//outputs {subject: "Clarice"}

//   const subject = props.subject
//     return (
//       <h1>Hello {subject}</h1>
//     );
//   }

//Declaring and using props with class components
class App extends Component {
  render() {
    return(
      <div className="container">
        <h1>Hello {this.props.subject}</h1>
      </div>
    )
  }
}

export default App;
