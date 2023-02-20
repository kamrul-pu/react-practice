import React, { useState } from 'react'

export default function RHook() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h2 className='text-primary'>React Hooks</h2>
            <h4>Value of Count: {count}</h4>
            <button className='btn btn-danger mx-2' onClick={handleIncrement}>Increment Value</button>
        </div>
    )
}
