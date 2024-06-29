import { configureStore } from "@reduxjs/toolkit";
import cardDataSlice from "../slice/cardDataSlice";

export const store=configureStore({
    reducer:{
        carddata:cardDataSlice

    }
})