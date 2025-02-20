const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";
import locationReducer from './locationSlice';
import React from 'react'


const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        location : locationReducer
    }
})

export default appStore;