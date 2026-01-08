import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED", // "NOT_FETCHED" | "FETCHING" | "FETCHED" | "FAILED"
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setProductList: (state, action) => {
            state.productList = action.payload;
        },
        setTotal: (state, action) => {
            state.total = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setOffset: (state, action) => {
            state.offset = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setFetchState: (state, action) => {
            state.fetchState = action.payload;
        },
    },
});

export const {
    setCategories,
    setProductList,
    setTotal,
    setLimit,
    setOffset,
    setFilter,
    setFetchState
} = productSlice.actions;

export default productSlice.reducer;
