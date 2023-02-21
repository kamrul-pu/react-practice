import React, { useState } from 'react';

export default function NewTodo(props) {
    const [todo, setTodo] = useState({ title: '', desc: '' });
    const handleChange = e => {
        const field = e.target.name;
        setTodo({ ...todo, [field]: e.target.value });
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(todo);
        // setTodo(todo);
        props.addTodo(todo);
        console.log(props);
    }
    return (
        <div>
            <form action="" className='form-control' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="" className='form-control' value={todo.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="desc">Description</label>
                    <input type="textarea" name="desc" id="" className='form-control' value={todo.desc} onChange={handleChange} />
                </div>
                <button type="submit" className='btn btn-success m-2'>Send</button>
            </form>
        </div>
    )
}
