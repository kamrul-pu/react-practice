import React, { useState } from 'react';
import User, { User1 } from './User';

const Users = () => {
    const [username, setUsername] = useState("Kamrul Hasan");
    const [userid, setUserid] = useState(101);
    const [user, setUser] = useState({ name: "Kamrul Hasan" });
    return (
        <div>
            <User username={username} userid={userid} />
            <User />
            <User1 user={user} />
        </div>
    )
}

export default Users