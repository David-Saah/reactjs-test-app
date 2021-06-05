import './Styles/App.css';
import './Styles/Bootstrap/bootstrap.min.css'
// import Home from './Components/Home'
// import Table from './Components/Table';
// import { Component } from 'react';

let App = (props) => {
  console.log(props)
	//outputs {subject: "Clarice"}
	
  const subject = props.subject
    return (
      <h1>Hello {subject}</h1>
    );
  }

export default App;
