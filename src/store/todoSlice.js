import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',

    initialState: [],

    reducers: {
        addTodo(state, action) {
            state.push(action.payload)
        },
        removeTodo(state, action){
            return state.filter( (item) => item.text !== action.payload )
        },
        updateTodo(state, action) {
            const {text} = action.payload;
            const todoUpdate = state.find((item) => item.text === text);
            if (todoUpdate) {
                todoUpdate.text = text;
            }
        },
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions 
export default todoSlice.reducer