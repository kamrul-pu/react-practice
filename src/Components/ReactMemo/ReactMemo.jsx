import React, { useCallback, useState } from 'react'
import Message from './Message';

const ReactMemo = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    console.log("Memo Rendering");

    const handleIncrementMessage = useCallback(() => {
        setCount(count + 1);
    }, [count])

    return (
        <div>
            {toggle ? 'On' : 'Off'}
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Message noOfMessage={0} handleIncrementMessage={handleIncrementMessage} />
        </div>
    )
}

export default ReactMemo;