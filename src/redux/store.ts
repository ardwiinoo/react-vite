import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlices'

const store = configureStore({
    reducer: { cart: cartReducer }
})

console.log("onCreate store: ", store.getState())

store.subscribe(() => [
    console.log("store change: ", store.getState())
])

export default store