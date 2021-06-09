import './Styles/App.css';
import './Styles/Bootstrap/bootstrap.min.css'
import { Component } from 'react';
import Auth from './Components/Auth';


class App extends Component {
  render() {
    return (
      <div>
        <Auth />
      </div>
    )
  }
};

export default App;
