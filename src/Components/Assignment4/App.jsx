import React, { useState, useEffect } from 'react';
import Users from './Users';
const people = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com', phone: '555-555-5555' },
    { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com', phone: '555-555-5555' },
    { id: 4, name: 'Sara Johnson', email: 'sarajohnson@example.com', phone: '555-555-5555' },
    { id: 5, name: 'David Lee', email: 'davidlee@example.com', phone: '555-555-5555' },
    { id: 6, name: 'Amy Chen', email: 'amychen@example.com', phone: '555-555-5555' },
    { id: 7, name: 'Brian Wilson', email: 'brianwilson@example.com', phone: '555-555-5555' },
    { id: 8, name: 'Karen Kim', email: 'karenkim@example.com', phone: '555-555-5555' },
    { id: 9, name: 'Michael Brown', email: 'michaelbrown@example.com', phone: '555-555-5555' },
    { id: 10, name: 'Linda Davis', email: 'lindadavis@example.com', phone: '555-555-5555' }
];


const App = () => {
    const [users, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setUser(people);
            setIsLoading(false);
            console.log(users);
        }, 2000);
    }, [])
    return (
        <div className='container'>
            <h2>Users List</h2>
            <hr />
            {isLoading ? "Data is Loading" : <Users user_list={users} />}

        </div>
    )
}

export default App