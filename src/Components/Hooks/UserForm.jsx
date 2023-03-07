import React, { useRef } from 'react';

const UserForm = () => {
    const userNameRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submitted");
        const username = userNameRef.current.value;
        const password = passwordRef.current.value;
        console.log(username, '\n', password);
        userNameRef.current.style.color = "red";
    }
    return (
        <div>
            <form action="" className='form' onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input className='form-control' type="text" name="username" id="username" ref={userNameRef} /><br />
                <label htmlFor="password">Password</label>
                <input className='form-control' type="password" name="password" id="password" ref={passwordRef} /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default UserForm