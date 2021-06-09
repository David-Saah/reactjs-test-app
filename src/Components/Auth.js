import { Component } from "react"


let UserGreeting = () => {
    return <h1>Welcome back!</h1>
}

let GuestGreeting = () => {
    return <h1>Please Sign up.</h1>
}

let Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}

let LoginBtn = (props) => {
    return (
        <button className="btn btn-primary" onClick={props.onClick}>Login</button>
    )
}

let LogoutBtn = (props) => {
    return (
        <button className="btn btn-primary" onClick={props.onClick}>Logout</button>
    )
}

class Auth extends Component {
    constructor(props) {
        super(props)

        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)

        this.state = { isLoggedIn: false }
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true })
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutBtn onClick={this.handleLogoutClick} />
        } else {
            button = <LoginBtn onClick={this.handleLoginClick} />
        }

        return (
            <div className="container">
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

export default Auth;