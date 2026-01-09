import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

export const fetchCategories = createAsyncThunk(
    'product/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/categories');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch categories');
        }
    }
);

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (params, { rejectWithValue }) => {
        try {
            const response = await api.get('/products', { params });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch products');
        }
    }
);

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.get(`/products/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch product');
        }
    }
);

const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED",
    activeProduct: null,
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(fetchProducts.pending, (state) => {
                state.fetchState = "FETCHING";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.fetchState = "FETCHED";
                state.productList = action.payload.products;
                state.total = action.payload.total;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.fetchState = "FAILED";
            })
            .addCase(fetchProduct.pending, (state) => {
                state.fetchState = "FETCHING";
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.fetchState = "FETCHED";
                state.activeProduct = action.payload;
            })
            .addCase(fetchProduct.rejected, (state) => {
                state.fetchState = "FAILED";
            });
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
