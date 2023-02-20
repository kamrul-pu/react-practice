import React, { useState } from "react";
import Todos from "./Todos";
import style from './home.module.css';
import NewTodo from "./NewTodo";

import { v4 as uuidv4 } from 'uuid';


const Home = () => {
    const [todos, setTodos] = useState([])
    const newTodo = todo => {
        console.log(todo);
        // todo.id = uuidv4();
        console.log(todo.id);
        // setTodos([...todos, todo]);
        // console.log(todos);
        setTodos((prevTodo) => {
            return [...prevTodo, { id: uuidv4(), todo }];
        });
        console.log(todos);

    }

    const deleteTodo = (id) => {
        // const filteredTodos = todos.filter((todo) => todo.id !== id)
        // setTodos(filteredTodos);
        setTodos((prevTodo) => {
            const filteredTodos = todos.filter((todo) => todo.id !== id)
            return filteredTodos
        });
    }
    return (
        <div className={style.container}>
            <h1 style={{ color: "white" }}>Todo App</h1>
            <NewTodo addTodo={newTodo} />
            <Todos todos={todos} onDelete={deleteTodo} />
        </div>
    )
}

export default Home;