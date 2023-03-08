import React, { useState } from 'react'
import Component2 from './Component2';
import UserContext from './UserContext';

const Component1 = () => {
    const [user, setUser] = useState({ id: 101, name: "Kamrul Hasan" });
    const [text, setText] = useState("Hello i am a sample Text");
    return (
        <UserContext.Provider value={{ user, text }}>
            <Component2 />
        </UserContext.Provider>
    )
}

export default Component1;
//Component1->Component2->Component3->Component4