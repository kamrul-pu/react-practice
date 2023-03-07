import React, { Component } from 'react'


//Mounting -> Constructor,render,componentDidMount
//Updating -> state/props -> render
//Unmounting
export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
        this.state = {
            count: 0,
        }
    }
    componentDidMount() {
        console.log("ComponentDidMount");
    }
    // componentWillMount() {
    //     console.log("ComponentWillMount");
    // }
    componentWillUnmount() {
        console.log('"ComponentWillUnmount"');
    };
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        // return false;will not update
        return true;//will update
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    render() {
        console.log("render");
        return (
            <div>
                <h2>LifeCycle</h2>
                <h3>{this.state.count}</h3>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
            </div>
        )
    }
}
