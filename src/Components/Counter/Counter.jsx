import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const reset = () => {
        setCount(0);
    }
    return (
        <div className='container'>
            <h1>Counter App</h1>
            <div className="card">
                <div className="card-body">
                    <div className="" style={{ width: "200px", textAlign: "center" }}>
                        <h5>Count: {count}</h5>
                        <button onClick={() => setCount(count + 1)} className='btn btn-sm' disabled={count >= 5}>+</button>
                        <button onClick={() => setCount(count - 1)} className='btn btn-sm' disabled={count < -4}>-</button>
                        <button onClick={reset} className='btn btn-sm'>0</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
