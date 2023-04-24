import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
    
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        
        quantity = quantity + product.quantity;
        
    }
    
    let tax = totalPrice*7/100;

    let grandTotal = totalPrice + totalShipping + tax;

    return (
        <>
            <h5 className='cart-title'>Order Summary</h5>
            <div className="cart-summary">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax}</p>
                <h6 className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</h6>
            </div>
            <button className='btn-clear-cart' onClick={handleClearCart}>Clear Cert <FontAwesomeIcon icon={faTrashCan} /> </button>
            {children}
        </>
    );
};

export default Cart;