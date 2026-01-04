import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './slices/clientSlice';

export const store = configureStore({
    reducer: {
        client: clientReducer,
    },
});
