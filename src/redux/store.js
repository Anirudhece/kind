import { configureStore } from '@reduxjs/toolkit'
import {counterSlice}  from './slices/counterSlice';
import {formStateSlice} from './slices/formStateSlice';
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        formData: formStateSlice.reducer
    }
})

export default store;