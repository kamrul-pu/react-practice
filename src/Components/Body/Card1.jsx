import React from "react";

class Card1 extends React.Component {
    render() {
        console.log("this", this);
        return (
            <div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-title">Class Card</div>
                        <div className="card-body">
                            <h3>Name: {this.props.name}</h3>
                            <p>Phone: {this.props.phone}</p>
                        </div>
                        <div className="card-footer">
                            <address>
                                {this.props.address}
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card1;

