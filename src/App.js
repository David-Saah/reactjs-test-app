import './Styles/App.css';
import './Styles/Bootstrap/bootstrap.min.css'
import Home from './Components/Home'
import Table from './Components/Table';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Table />
      </div>
    )
  }
}

export default App;
