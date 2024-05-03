import { createSlice } from "@reduxjs/toolkit";

const dummy = {
    yourInfo: {
        name: "",
        email: "",
        phone: "",
    },
    plan: {
        type: "",
        frequency: "",
    },
    addOns: [],
};

export const formStateSlice = createSlice({
    initialState: { formState: {...dummy}  },
    name: 'formState',
    reducers: {
        updateYourInfo: (state, action) => {
            const { id, value } = action.payload;
            state.formState.yourInfo[id] = value;
        },
        updatePlan: (state, action) => { },
        updateAddOns: (state, action) => { }
    }
});

export const { updateYourInfo, updatePlan, updateAddOns } = formStateSlice.actions;
export default formStateSlice.reducer;
