import React from 'react'
import Todo from './Todo'
import NewTodo from './NewTodo';

export default function Todos(props) {
    const todos = props.todos.map((item, i) => {
        return <Todo todo={item} key={i} />
    })
    return (
        <div className='row'>
            {todos}
        </div>
    )
}
