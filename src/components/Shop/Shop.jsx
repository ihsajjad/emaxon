import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    console.log(products.length)
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)    
                }
            </div>
            <div className='cart-container'>
                <h2>Products summary</h2>
            </div>
        </div>
    );
};

export default Shop;