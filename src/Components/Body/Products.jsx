import React from "react";
import Product from "./Product";

import data from '../../product.json';

const Products = () => {
    let items = data.map((item, ind) => {
        return (
            <Product name={item.name} price={item.price} rating={item.rating} desc={item.desc} img={item.img} key={item.id} />
        )
    })
    return (
        <div className="row">
            {items}
        </div>
    )
}
export default Products;