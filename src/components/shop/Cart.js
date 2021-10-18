import React from 'react';
import "./Shop.css"

const Cart = (props) => {
    const {list} = (props) || {};

    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.price
    const total = list.reduce(totalReducer, 0)

    return (
        <div>
            <h2>Cart</h2>
            <h5>Item addee: {list.length}</h5>
            <h5>Total price: ${total}</h5>
            <ul>
                {
                    list.map(product =><li key={product.name}>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;