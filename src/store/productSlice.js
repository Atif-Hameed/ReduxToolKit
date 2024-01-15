import { createSlice } from "@reduxjs/toolkit";

const Statuses = Object.freeze({    //freeze -> could not change values become readonly
    IDLE : 'idle',
    Error : 'error',
    LOADING : 'loading',
})

const productSlice = createSlice({
    name:'product',
    initialState:{
        data : [],
        status : Statuses.IDLE,
    },
    
    reducers:{
        add(state, action){
            state.push(action.payload)
        },
        remove(state, action){
            return state.filter((item) => item.id !== action.payload)
        }
    }
})

export const{add, remove} = productSlice.actions;
export default productSlice.reducer;