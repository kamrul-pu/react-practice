import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import NewTodo from './NewTodo';

export default function Todos() {
    const [todos, setTodo] = useState([]);
    const addTodo = todo => {
        todo.id = uuidv4();
        setTodo([...todos, todo])
    }
    return (
        <div className='container mt-3 b-2'>
            <div className="row">
                <div className="col-6 mx-auto">
                    <section>
                        <NewTodo addTodo={addTodo} />
                    </section>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        {todos.map(todo => <Todo item={todo} key={todo.id} />)}
                    </div>

                </div>
            </div>

        </div>
    )
}
