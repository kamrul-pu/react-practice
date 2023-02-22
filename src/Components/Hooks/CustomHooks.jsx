import React from 'react'
import useFetch from './useFetch'

export default function CustomHooks() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const { data, isLoading, error } = useFetch(url);
    const loadingMessage = <p>Todos is loading</p>;
    const errorMessage = <p>{error}</p>;

    const todosElement = data && data.map((todo) => {
        return (<article key={todo.id}>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <hr />

        </article>)

    })
    return (
        <div>
            {todosElement}
        </div>
    )
}
