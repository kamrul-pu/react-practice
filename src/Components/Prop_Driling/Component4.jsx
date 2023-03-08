import React, { useContext } from 'react';
import UserContext from './UserContext';

const Component4 = () => {
    const { user, text } = useContext(UserContext);
    console.log("User", user);
    return (
        <div>
            Component4
            <p>{user.id}</p>
            <h2>{user.name}</h2>
            <h3>{text}</h3>
        </div>
    )
}

export default Component4