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
                state.cart.push({ count: 1, checked: true, product });
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.cart = state.cart.filter(item => item.product.id !== productId);
        },
        toggleChecked: (state, action) => {
            const productId = action.payload;
            const item = state.cart.find(item => item.product.id === productId);
            if (item) {
                item.checked = !item.checked;
            }
        },
        updateItemCount: (state, action) => {
            const { productId, count } = action.payload;
            if (count < 1) {
                // If count goes below 1, usually remove or keep at 1. Let's remove for now or better Keep at 1 and use remove button for delete.
                // Standard: if user clicks '-' at 1, nothing happens or remove.
                // I will filter out if count < 1.
                state.cart = state.cart.filter(item => item.product.id !== productId);
            } else {
                const item = state.cart.find(item => item.product.id === productId);
                if (item) item.count = count;
            }
        },
        clearCart: (state) => {
            state.cart = [];
        }
    },
});

export const { setCart, setPayment, setAddress, addToCart, removeFromCart, toggleChecked, updateItemCount, clearCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
