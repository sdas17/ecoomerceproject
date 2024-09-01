import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        item:[]
    },
    reducers:{
        //mutating
        addItem:(state,action)=>{
            state.item.push(action.payload);
        },
        clearCart:(state)=>{
            state.item.length =0;
        },
        removeItem:(state,action)=>{
            state.item.pop()
        },
        
    }
})
export const { addItem,clearCart, removeItem,  } = cartSlice.actions;

export default cartSlice.reducer