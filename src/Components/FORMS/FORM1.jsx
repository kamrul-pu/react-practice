import React, { useState } from 'react'
import './formmod.css';

export default function FORM1() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        console.log('Form is submitted');
        let userInfo = {
            name: name,
            email: email,
            password: password
        }
        console.log(userInfo);
        e.preventDefault();
    }
    return (
        <div className='form-cont'>
            <h1>Registration</h1>
            <form action="" className='my-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input value={name} type="text" name="fullname" id="name" required onChange={handleNameChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email: </label>
                    <input value={email} type="email" name="email" id="email" required onChange={handleEmailChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password: </label>
                    <input value={password} type="password" name="password" id="password" required onChange={handlePasswordChange} />
                </div>
                <br />
                <button className='btn btn-primary' type="submit">Register</button>
            </form>
        </div>
    )
}
