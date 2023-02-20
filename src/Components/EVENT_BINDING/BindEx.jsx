import React, { Component } from 'react'

export default class BindEx extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1,
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                {/* <button onClick={this.handleClick.bind(this)} className='btn btn-success'>Increse</button> */}
                <button onClick={this.handleClick} className='btn btn-success'>Increse</button>
            </div>
        )
    }
}
