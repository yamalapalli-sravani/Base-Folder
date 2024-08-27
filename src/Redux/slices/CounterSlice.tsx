import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    Counter: 0
}

const CounterSlice = createSlice({
    name: 'CounterSlice',
    initialState,
    reducers: {
        addCounter : (state, action) =>{
            return {
                ...state,
                Counter: action.payload
            }
        }
    }
})

export const { addCounter } = CounterSlice.actions;

export default CounterSlice.reducer;