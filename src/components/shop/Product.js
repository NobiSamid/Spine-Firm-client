import React from 'react';
import { Button } from 'react-bootstrap';
import "./Shop.css"

const Product = (props) => {
    const { name, picture, price, registered } = props.product || {};
    return (
        <div>
            <div>
                <img src={picture} style={{height:"7rem", width:"auto"}} alt="product" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{price}$</p>
                <small>{registered}R</small><br/>
                <Button variant="secondary" onClick={()=>props.handleAddProduct(props.product)}>Buy now</Button>
            </div>
        </div>
    );
};

export default Product;