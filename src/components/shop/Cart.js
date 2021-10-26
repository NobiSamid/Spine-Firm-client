import React from 'react';
import "./Shop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {

    /// Destructuring new product array
    const { cart } = (props) || {};

    /////// Calculating total product by Reduce function
    // const totalReducer = (prevValue, currentValue) => prevValue + currentValue.price
    // const total = list.reduce(totalReducer, 0)
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;



    return (
        <div className="cart-card">
            <h2>Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></h2>
            <h5>Item ordered: {totalQuantity}</h5>
            <h5>Total price: ${total.toFixed(2)}</h5><br/>
            <h5>shipping: {shipping}</h5>
            <h6>tax:{tax}</h6>
            <h6>Grand total:{grandTotal}</h6>
            <ul>
                {
                    cart.map(product =><li key={product.name}>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;