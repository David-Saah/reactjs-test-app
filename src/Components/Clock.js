import { Component } from 'react';
// import ReactDOM from 'react-dom'

//Ticking clock
class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        //is called when the component is rendered to the DOM for the first time(mounting)
        this.timerID = setInterval(
            () => this.tick(), 1000
            ) 
    }

    componentWillUnmount() {
        //is called when the DOM producing the component is removed(unmounting)
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className="container">
                <h2>Hello, World!</h2>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}


export default Clock;
