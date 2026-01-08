import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [], // [{ count: 1, product: { ... }, checked: true }]
    payment: {},
    address: {},
};

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        setPayment: (state, action) => {
            state.payment = action.payload;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        },
        // Helper to add item (optional but useful standard)
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.cart.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.count += 1;
            } else {
                state.cart.push({ count: 1, product });
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.cart = state.cart.filter(item => item.product.id !== productId);
        },
        clearCart: (state) => {
            state.cart = [];
        }
    },
});

export const { setCart, setPayment, setAddress, addToCart, removeFromCart, clearCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
