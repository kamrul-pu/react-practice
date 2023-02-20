import React, { Component } from 'react';
import Homepage from './Homepage';
import LoginPage from './LoginPage';


export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        }
    }
    pageSwitch = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn,
        });
    }
    render() {
        let element = this.state.isLoggedIn ? <Homepage /> : <LoginPage />
        document.title = "Page"
        return (
            <div>
                {this.state.isLoggedIn ? <Homepage /> : <LoginPage />}
                <button onClick={this.pageSwitch}>{this.state.isLoggedIn ? "Logout" : "Login"}</button>
                {element}
            </div>
        )
    }
}
