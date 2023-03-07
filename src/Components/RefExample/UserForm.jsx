import React, { Component, createRef } from 'react'

export default class UserForm extends Component {
    constructor(props) {
        super(props);
        this.userNameRef = createRef();
        this.passwordRef = createRef();
        this.state = {

        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
        console.log(this.userNameRef.current.value);
        console.log(this.passwordRef.current.value);
        this.userNameRef.current.style.color = 'green';
    }
    render() {
        return (
            <div>
                <form action="" className='form' onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input className='form-control' type="text" name="username" id="username" ref={this.userNameRef
                    } /><br />
                    <label htmlFor="password">Password</label>
                    <input className='form-control' type="password" name="password" id="password" ref={this.passwordRef} /><br />
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}
