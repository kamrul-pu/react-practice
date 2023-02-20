import React from 'react'

export default function Todo(props) {
    return (
        <div className="col-4 p-1">
            <div className="card">
                <div className="card-title">
                    <h1>{props.todo.title}</h1>
                </div>
                <hr />
                <div className="card-body">
                    <h3>{props.todo.label}</h3>
                </div>

            </div>
        </div >

    )
}
