import React, { memo, useMemo } from 'react'

// const Message = memo(() => {
//     console.log("Message rendering");
//     return (
//         <div>
//             <p>Send 0 Message</p>
//         </div>
//     )
// })



const Message = ({ noOfMessage, handleIncrementMessage }) => {
    console.log("Message rendering");

    const calculatedNumber = useMemo(
        () => {
            let number = 0;
            for (let index = 0; index < 500000000; index++) {
                number++;
            }
            return number;
        }
        , [])

    return (
        <div>
            <h2>Number: {calculatedNumber}</h2>
            <p>Send {noOfMessage} Message</p>
            <button onClick={handleIncrementMessage}>Increment Message Number</button>
        </div>
    )
}

export default memo(Message);