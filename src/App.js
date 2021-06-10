import './Styles/App.css';
import './Styles/Bootstrap/bootstrap.min.css'
import { useState } from 'react';


let App = () => {

  const [isCircle, setIsCircle] = useState(true)

  return (
    <div className="container text-center">
      <div className={isCircle ? "circle" : "square"}></div>
      <button onClick={() => setIsCircle(!isCircle)} className="btn btn-primary">Click Me</button>
    </div>
  )
}

export default App;
