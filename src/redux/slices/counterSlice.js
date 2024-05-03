import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    initialState: { currentFormNumber: 0 },
    name: 'counter', // for dev tools basicly
    reducers: {
        increment: (state) => {
            if (state.currentFormNumber < 3) {
                state.currentFormNumber += 1;
            }
        },
        decrement: (state) => {
            if (state.currentFormNumber > 0) {
                state.currentFormNumber -= 1;
            }
        },
        changeCounter: (state, action) => {
            const { stepNum } = action.payload;
            if (stepNum >= 0 && stepNum <= 3) {
                state.currentFormNumber = stepNum;
            }
        },
    },
});

export const { increment, decrement, changeCounter } = counterSlice.actions;
export default counterSlice.reducer;
