import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            action.payload.qty = 1
            state.cart = [...state.cart, action.payload]
        },
        clearCart: (state) => {
            state.cart = []
        },
        removeFromCart: (state, action) =>{
            let x = state.cart.filter((item) => {
                return item.name != action.payload.name
            })
            state.cart = x
        },
        increaseQty: (state, action) => {
            const index = state.cart.findIndex(item => item.name === action.payload.name)
            state.cart[index].qty += 1
        },
        decreaseQty: (state, action) => {
            const index = state.cart.findIndex(item => item.name === action.payload.name)
            if (state.cart[index].qty > 1){
                state.cart[index].qty -= 1
            }
        }
    }
})

export const {
    addToCart,
    clearCart,
    increaseQty,
    decreaseQty,
    removeFromCart
} = cartslice.actions

export default cartslice.reducer