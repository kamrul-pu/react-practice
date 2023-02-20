import React from 'react'

import Child from './Child'

export default function Parent() {
    const data = "I am from parent Component";
    const handleChildData = (childData) => {
        console.log("Child Data", childData);
    }
    return (
        <div>
            I am parent Component
            <Child data={data} onChildData={handleChildData} />
        </div>
    )
}
