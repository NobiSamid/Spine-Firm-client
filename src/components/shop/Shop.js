import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import Cart from './Cart';
import Product from './Product';
import "./Shop.css"

const Shop = () => {

    //  Products and list setting in a state
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    const size = 10;
    //Feching data from fake data by using useEffect
    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.products);
            const count = data.count;
            const pageNumber = Math.ceil(count / size);
            setPageCount(pageNumber);
        });
    },[page])

    ////// Button handler for buy product
    const handleAddProduct = (product) =>{
        const productList = [...cart, product];
        setCart(productList);
    }

    return (
        <div>

            {/* Product component */}
            <h1>Buy your desired goods here</h1>
            <Link to="/review" > Order-Review</Link>
            <div className="main-shop">
                <div className="item">
                    {
                        products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddProduct={handleAddProduct}
                        ></Product>)
                    }
                    <br/><div className="pagination">
                         {
                             [...Array(pageCount).keys()].map(number =>
                             <button 
                             className={number ===page ? 'selected' : ''}
                             key={number}
                             onClick={()=> setPage(number)}
                             >{number + 1}</button>)
                         }
                    </div>
                </div>

                {/* Product Cart component */}
                <div className="cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;