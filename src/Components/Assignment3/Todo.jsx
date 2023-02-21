import React from 'react';

export default function Todo(props) {
    return (
        <div className="col-4">
            <div className='card p-2 m-2'>
                <div className="card-title">
                    {props.item.title}
                </div>
                <div className="card-body">
                    <p>{props.item.desc}</p>
                </div>
            </div>
        </div>

    )
}
