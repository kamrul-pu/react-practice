import React from 'react';
import style from './todo.module.css';

export default function Todo(props) {
    const handleClick = (id) => {
        // console.log(id);
        props.deleteTodo(id);
    }
    return (
        <article className={style.todo}>
            <div>
                <h3>{props.todo.title}</h3>
                <p>{props.todo.desc}</p>
            </div>
            <div>
                <button className={style.btn} onClick={() => handleClick(props.id)}>
                    <i className='fa fa-trash fa-2x'></i>
                </button>
            </div>
        </article>
    )
}
