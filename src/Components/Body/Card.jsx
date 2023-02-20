import React from "react";

const Card = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
            <div className="card">
                <div className="card-title">
                    {props.title}
                </div>
                <hr />
                <div className="card-body">
                    <p>{props.desc}</p>
                </div>
                <hr />
                <div className="card-footer">
                    <p>{props.footer}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;