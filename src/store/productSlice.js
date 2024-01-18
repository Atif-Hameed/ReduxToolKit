import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
        //incase of scratch or old method

        // setProducts(state, action) {
        //     state.data = action.payload
        // },
        // setStatus(state, action) {
        //     state.status = action.payload
        // }
    },
                                   //incase of modern thunk
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = Statuses.LOADING
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = Statuses.IDLE
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = Statuses.Error
            })
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;



//thunk
                                        //modern thunk
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const data = await getProducts();
    return data;
})






                                     //old method or scratch method

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {

//         dispatch(setStatus(Statuses.LOADING))
//         try {
//             const data = await getProducts();
//             dispatch(setProducts(data))
//             dispatch(setStatus(Statuses.IDLE))
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(Statuses.Error))
//         }
//     }
// }