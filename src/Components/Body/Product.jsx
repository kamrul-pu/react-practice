import React from "react";

const Product = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.img} className="card-img-top" height="250px" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6>Price: {props.price}</h6>
                    <h6>Rating: {props.rating}</h6>
                    <p className="card-text">{props.desc}</p>
                    <a href="#" className="btn btn-primary">Add To Cart</a>
                </div>
            </div>
        </div>
    )
}
export default Product;

// <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
//             <img src={props.img} alt={props.img} style={{ width: "300px", height: "300px" }} />
//             <div className="card-title">{props.name}</div>
//             <div className="card-body">
//                 <p>Price: {props.price}</p>
//                 <p>Rating: {props.rating}</p>
//                 <p>{props.desc}</p>
//                 <button className="btn btn-sm btn-info">Add to Cart</button>
//             </div>
//         </div>