import React from 'react';
import './CartItem.css';
import { useState } from "react";
import { increaseQty, decreaseQty, removeFromCart } from '../../redux/reducers/cartSlice';
import { useDispatch } from 'react-redux';

function CartItem({ item, increase, decrease }) {
    const dispatch = useDispatch()
    let qty = item.qty;
    const finalPrice = parseInt(item.price - ((item.offer / 100) * item.price))

    return (
        <div className="CartItem">
            <div className="CartDelBtn" onClick={() => {
                dispatch(removeFromCart(item))
            }}>
                <i className="fa fa-trash-o"></i>
            </div>
            <div className="CartItemWrapper">
                <div className="CartImageArea">
                    <img src={item.image} alt='image' />
                </div>
                <div className='CartDetailArea'>
                    <h2 className='CartProductName'>{item.name}</h2>
                    <p className='CartPrice'><strong>Rs.{finalPrice}</strong>
                        <span className='CartMRP'> <del>Rs.{item.price}</del></span>
                        <span className='CartSave'> You Save Rs.{item.price - finalPrice}</span>
                    </p>
                </div>
            </div>
            <div className={`qtyWrapper`}>
                <button className={qty == 1 ? "inactive" : "incrBtn"} onClick={() => {
                    if (qty > 1) {
                        dispatch(decreaseQty(item))
                    }
                }}>-</button>
                <p>{qty}</p>
                <button onClick={() => {
                    dispatch(increaseQty(item))
                }}>+</button>
                <h2> Rs.{finalPrice * qty} </h2>
            </div>
            <br />
            <hr />
        </div>
    )
}

export default CartItem;