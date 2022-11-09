import React from 'react'
import './CartIcon.css'
import { useSelector } from 'react-redux'

function CartIcon(){
    const cartList = useSelector((state) => state.cartHandler.cart)

    return (
        <div className='CartIcon'>
            <div className='cartIconWrapper'>
                <i className="fa fa-shopping-cart"> </i>
                {
                    cartList.length > 0 && <div className='CartNum'>
                        {
                            cartList.length
                        }
                    </div>
                }
            </div>
            <p className='cart-text'> Cart</p>
        </div>
    )
}

export default CartIcon;