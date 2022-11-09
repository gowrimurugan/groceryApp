import React, { useEffect } from 'react';
import './CartHolder.css';
import { useState, useContext } from 'react';
import CartItem from './CartItem';
import Payment from './Payment';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/reducers/cartSlice';

function CartHolder() {
    const dispatch = useDispatch()
    let total = 0
    let totalMRP = 0
    const cartList = useSelector((state) => state.cartHandler.cart)

    return (
        <div className='CartHolder'>
            <div className='container'>
                <div className='CartHolderWrapper'>
                    {
                        cartList.length > 0 ?
                            <div className='CartContainer'>
                                <button className='btn' onClick={() => {
                                    dispatch(clearCart())
                                }}>Clear Cart</button>
                                {
                                    cartList.map((item) => {
                                        totalMRP = item.qty * (totalMRP + parseInt(item.price))
                                        total = item.qty * (total + parseInt(item.finalPrice));
                                        return <CartItem key={Math.random()} item={item} />
                                    })
                                }
                            </div> :
                            <h4 style={{marginBottom: "20px", textAlign: "center"}}>Nothing in Cart</h4>
                    }
                    <div className='PaymentContainer'>
                        <Payment total={total} mrp={totalMRP} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CartHolder;