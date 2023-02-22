import React from 'react';
import User from './User';

const Users = (props) => {
    const userElement = props.user_list.map((user) => {
        return <User key={user.id} user={user} />
    })
    return (
        <div className='row pt-3'>
            {userElement}
        </div>
    )
}

export default Users;