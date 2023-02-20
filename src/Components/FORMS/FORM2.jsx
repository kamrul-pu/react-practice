import React, { useState } from 'react'
import './formmod.css';

export default function FORM2() {
    const [userInfo, setInfo] = useState({ fullname: '', email: '', password: '' });
    const { fullname, email, password } = userInfo;

    const handleChange = (e) => {
        const field_name = e.target.name;
        // if (field_name == 'fullname') {
        //     setInfo({ fullname: e.target.value, email, password });
        // } else if (field_name == 'email') {
        //     setInfo({ fullname, email: e.target.value, password });
        // } else if (field_name == 'password') {
        //     setInfo({ fullname, email, password: e.target.value });
        // }
        setInfo({ ...userInfo, [field_name]: e.target.value });
    }
    const handleSubmit = (e) => {
        console.log('Form is submitted');
        console.log(userInfo);
        e.preventDefault();
    }
    return (
        <div className='form-cont'>
            <h1>Registration</h1>
            <form action="" className='my-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input value={userInfo.fullname} type="text" name="fullname" id="name" required onChange={handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email: </label>
                    <input value={userInfo.email} type="email" name="email" id="email" required onChange={handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password: </label>
                    <input value={userInfo.password} type="password" name="password" id="password" required onChange={handleChange} />
                </div>
                <br />
                <button className='btn btn-primary' type="submit">Register</button>
            </form>
        </div>
    )
}
