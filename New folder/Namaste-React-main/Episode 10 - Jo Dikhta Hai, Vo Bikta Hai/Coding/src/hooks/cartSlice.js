import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        item:[]
    },
    reducers:{

        //older version redux concept
        //vanilla(older) Redux =>Dont' mutate state
        //const newState=[...state];
        //newState.items.push(action.payload)
        //return newstate
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