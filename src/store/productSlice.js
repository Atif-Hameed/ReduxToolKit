import { createSlice } from "@reduxjs/toolkit";
import getProducts from "../services/products";

export const Statuses = Object.freeze({    //freeze -> could not change values become readonly
    IDLE: 'idle',
    Error: 'error',
    LOADING: 'loading',
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: Statuses.IDLE,
    },

    reducers: {
        setProducts(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;



//thunk

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {

        dispatch(setStatus(Statuses.LOADING))
        try {
            const data = await getProducts();
            dispatch(setProducts(data))
            dispatch(setStatus(Statuses.IDLE))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Statuses.Error))
        }
    }
}