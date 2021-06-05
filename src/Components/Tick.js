import ReactDOM from 'react-dom'

//Ticking clock
let Clock = (props) => {
    return (
        <div className="container">
            <h2>Hello, World!</h2>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
}

let Tick = (props) => {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById("root")
    )
}

setInterval(Tick, 1000)

export default Tick;
