import React, { Component } from 'react'

import Todos from './Todos';
import NewTodo from './NewTodo';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { title: "Todo1", label: "Emergiency" },
                { title: "Todo2", label: "Normal" }
            ]
        }
    }

    addNewTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
        console.log('todo', todo);
    }
    render() {
        return (
            <div className='container mt-2'>
                <div className="row">
                    <div className="col-lg-8">
                        <Todos todos={this.state.todos} />
                    </div>
                    <div className="col-lg-4">
                        <NewTodo addTodo={this.addNewTodo} />
                    </div>
                </div>
            </div>

        )
    }
}
