import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Adjust the import path as necessary

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
