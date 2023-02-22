import React, { useState, useEffect } from 'react'

export default function RHook() {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    // useEffect(() => {
    //     //Without defendency calls every time
    //     console.log('useEffect');
    // }, []); [] useEffect First Time
    useEffect(() => {
        //Without defendency calls every time
        console.log('useEffect');
    }, [count]); //count is dependent
    console.log('rendering');
    return (
        <div>
            <h2 className='text-primary'>React Hooks</h2>
            <h4>Value of Count: {count}</h4>
            {/* <button className='btn btn-danger mx-2' onClick={handleIncrement}>Increment Value</button> */}
            {/* <button onClick={() => setCount((count) => count + 1)}>+</button> */}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setIsLoading(!isLoading)}>isLoading</button>
        </div>
    )
}
