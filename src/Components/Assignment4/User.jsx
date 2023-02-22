import React from 'react';

function User({ user }) {
    return (
        <div className="col-lg-3 p-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">User ID: {user.id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Username: {user.username}</h6>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Phone: {user.phone}</p>
                </div>
            </div>
        </div>

    );
}

export default User;