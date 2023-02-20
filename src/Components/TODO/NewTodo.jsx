import React, { useState } from 'react'

export default function NewTodo(props) {
    const [todo, setInfo] = useState({ title: '', label: '' });
    const { title, label } = todo;
    const handleChange = (e) => {
        const field_name = e.target.name;
        setInfo({ ...todo, [field_name]: e.target.value });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
        props.addTodo(todo);

    }
    return (
        <div className="col-12">
            <h2>Add New Todo</h2>
            <form action="" className='form-control' onSubmit={handleSubmit}>
                <label htmlFor="todo">Todo Name: </label>
                <input type="text" name="title" id="" className='form-control' value={todo.title} onChange={handleChange} />
                <br />
                <label htmlFor="urgency">Urgency</label>
                <input type="text" name="label" id="" className='form-control' value={todo.label} onChange={handleChange} />
                <br />
                <button type="submit">Add new</button>
            </form>
        </div>
    )
}
