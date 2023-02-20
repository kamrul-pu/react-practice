import React, { Component } from 'react'

export default class EventExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeValue: '',
        }
    }
    handleClick = () => {
        console.log('Clicked');
    }
    handleChange = (e) => {
        this.setState({
            changeValue: e.target.value,
        }, () => {
            console.log(this.state.changeValue);
        })
    }
    render() {
        return (
            <div>
                <input type="text" name="changevalue" id="" onChange={this.handleChange} />
                <p>{this.state.changeValue}</p>
                <button onClick={this.handleClick} className='btn btn-primary m-2'>Click Me</button>
            </div>
        )
    }
}
