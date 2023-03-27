import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {
    
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    let tax = totalPrice*7/100;

    let grandTotal = totalPrice + totalShipping + tax;

    return (
        <>
            <h5 className='cart-title'>Order Summary</h5>
            <div className="cart-summary">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax}</p>
                <h6 className='grand-total'>Grand Total: ${grandTotal}</h6>
            </div>
            <button className='btn-clear-cart'>Clear Cert <FontAwesomeIcon icon={faTrashCan} /> </button>
            <button className='btn-review-order'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
        </>
    );
};

export default Cart;