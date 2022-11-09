import React from 'react';
import './Payment.css';

function Payment({total,mrp}) {
    return (
        <div className='PaymentBox'>
            <h3>Payment Details</h3>
            <div className='paymentSectionWrapper'>
                 <p className='dim'>MRP Total</p>
                 <p>Rs.{mrp}</p>
            </div>
            <hr/>
            <div className='paymentSectionWrapper'>
                <p className='dim'>Total Saving</p>
                <p>Rs.{mrp-total}</p>
            </div>
            <hr/>
            <div className='paymentSectionWrapper'>
                <p><strong>Total Amount</strong></p>
                <p><strong>Rs.{total}</strong></p>
            </div>
            <button className='placeOrderBtn'>Place Order</button>
        </div>
    )
}

export default Payment;