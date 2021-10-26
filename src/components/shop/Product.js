import React from 'react';
import { Button } from 'react-bootstrap';
import "./Shop.css"

const Product = (props) => {

    // getting data from shop by Props and destructure
    const { name, picture, img, price, registered, category, stock } = props.product || {};
    return (
        <div className="product-card">
            <div>
                <img src={img} style={{height:"7rem", width:"auto"}} alt="product" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{category}</p>
                <p>{price}$</p>
                <small>{stock}</small><br/>
                <Button variant="secondary" onClick={()=>props.handleAddProduct(props.product)}>Buy now</Button>
            </div>
        </div>
    );
};

export default Product;