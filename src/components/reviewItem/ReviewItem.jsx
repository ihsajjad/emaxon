import React from 'react';
import "./reviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const ReviewItem = ({product, handleRemoveFromCart}) => {
    
    const {id, img, name, quantity, price} = product;
    return (
        <div className='item-container'>
            <img src={img} alt="" />
            <div className='item-info'>
                <p className='review-title'>{name}</p>
                <p>Price: <span className='color-orange'>${price}</span></p>
                <p>Quantity : <span className='color-orange'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItem;