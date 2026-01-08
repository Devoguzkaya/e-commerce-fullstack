import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger'; // Common import for redux-logger
import clientReducer from './slices/clientSlice';
import productReducer from './slices/productSlice';
import shoppingCartReducer from './slices/shoppingCartSlice';

const logger = createLogger({
    // Optional configuration for logger
    collapsed: true,
});

export const store = configureStore({
    reducer: {
        client: clientReducer,
        product: productReducer,
        shoppingCart: shoppingCartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
