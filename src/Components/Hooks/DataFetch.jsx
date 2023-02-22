import React, { useEffect, useState } from 'react';

export default function DataFetch() {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then(res => {
                    if (!res.ok) {
                        throw Error("Fetching is not successfull");
                    }
                    return res.json()
                })
                .then(data => {
                    setTodos(data);
                    console.log(todos);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {

                    setError(err.message);
                    setIsLoading(false);
                })

        }, 2000);
    }, []);
    console.log('Rendered');
    const loadingMessage = <p>Data is Loading</p>
    const todosElement = todos && todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
    })
    return (
        <div>
            <h1>Todos</h1>
            <hr />
            {error && <p>{error}</p>}
            {isLoading ? loadingMessage : todosElement};
        </div>
    )
}

