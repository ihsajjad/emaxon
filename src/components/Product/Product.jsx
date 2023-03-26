import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product
    console.log(props.product)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-title'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='seller'>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;