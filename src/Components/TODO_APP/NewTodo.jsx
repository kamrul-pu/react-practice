import React, { useState } from 'react';
import style from './form.module.css';

export default function NewTodo(props) {
    const [todo, setTodo] = useState({ title: '', desc: '' });
    const { title, desc } = todo;

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(todo);
        setTodo({ title: '', desc: '' });
    }

    const handleChange = e => {
        const field_name = e.target.name;
        setTodo({ ...todo, [field_name]: e.target.value });
    }
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style["form-field"]}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="" value={title} onChange={handleChange} />
            </div>
            <div className={style["form-field"]}>
                <label htmlFor="desc">Description</label>
                <input type="textarea" name="desc" id="" value={desc} onChange={handleChange} />
            </div>
            <button type="submit">Add ToDo</button>
        </form>
    )
}
