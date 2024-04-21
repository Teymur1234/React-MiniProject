import { configureStore } from "@reduxjs/toolkit";
import coffeeSlice from "./Slice/coffeeSlice";



export const Store=configureStore({
    reducer:{
        coffee:coffeeSlice
    }
})