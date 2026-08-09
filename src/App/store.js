import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Practice/Redux/CounterSlice"


export const Store = configureStore({
    reducer :{
        counter: CounterReducer
    }
})