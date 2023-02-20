import React from 'react'

export default function Child(props) {
    const data = "I am from Child COmponent(app)";
    props.onChildData(data);
    return (
        <div>
            I am a child Component
            <p>{props.data}</p>
        </div>
    )
}
