import React from 'react';
import "./Shop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {

    /// Destructuring new product array
    const {list} = (props) || {};

    /////// Calculating total product by Reduce function
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.price
    const total = list.reduce(totalReducer, 0)

    return (
        <div className="cart-card">
            <h2>Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></h2>
            <h5>Item addee: {list.length}</h5>
            <h5>Total price: ${total}</h5><br/>
            <ul>
                {
                    list.map(product =><li key={product.name}>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;