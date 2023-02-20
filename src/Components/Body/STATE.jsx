import React, { Component } from 'react'

export default class STATE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: "Kamrul",
        }
    }
    handleIncrement = () => {
        console.log("Btn in clicked inc");
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecrement = () => {
        console.log("Btn in clicked dec");
        this.setState({
            count: this.state.count - 1,
        })
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Count: {count}</h1>
                <h2>Name: {this.state.name}</h2>
                <button className='btn btn-primary' onClick={this.handleIncrement}>+</button> &nbsp;
                <button className='btn btn-warning' onClick={this.handleDecrement} disabled={count == 0 ? true : false}>-</button>

            </div>
        )
    }
}
