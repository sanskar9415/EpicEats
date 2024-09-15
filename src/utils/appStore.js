const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";
import locationReducer from './locationSlice';

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        location : locationReducer
    }
})

export default appStore;