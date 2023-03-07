import React from 'react';
import PropTypes from 'prop-types';
console.log(PropTypes);

const User = (props) => {
    return (
        <div>
            <h1>{props.username}</h1>
            <h3>{props.userid}</h3>
        </div>
    )
}

export const User1 = props => {
    return (
        <div>
            <h1>{props.user.name}</h1>
        </div>
    )
}

User1.propTypes = {
    // user: PropTypes.object.isRequired,
    user: PropTypes.object.shape({
        name: PropTypes.string,
    })
}

// User.propTypes = {
//     //key-value
//     username: PropTypes.string,
//     userid: PropTypes.number,
// }

User.defaultProps = {
    username: "default name",
    userid: 101,
}

export default User