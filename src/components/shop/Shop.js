import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Product from './Product';
import "./Shop.css"

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch('./fakeproduct.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])

    console.log(products);

    const handleAddProduct = (product) =>{
        const productList = [...list, product];
        setList(productList);
    }

    return (
        <div>
            <h1>Buy your desired goods here</h1>
            <div className="main-shop">
                <div className="item">
                    {
                        products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddProduct={handleAddProduct}
                        ></Product>)
                    }
                </div>
                <div className="cart">
                    <Cart list={list}></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;