import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

export const loginUser = createAsyncThunk(
    'client/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await api.post('/login', credentials);
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                api.defaults.headers.common['Authorization'] = response.data.token;
            } else if (response.data.user && response.data.user.token) {
                localStorage.setItem("token", response.data.user.token);
                api.defaults.headers.common['Authorization'] = response.data.user.token;
            }
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Login failed');
        }
    }
);

export const fetchRoles = createAsyncThunk(
    'client/fetchRoles',
    async (_, { getState, rejectWithValue }) => {
        const { client } = getState();
        if (client.roles && client.roles.length > 0) {
            return client.roles;
        }

        try {
            const response = await api.get('/roles');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch roles');
        }
    }
);

export const verifyToken = createAsyncThunk(
    'client/verifyToken',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/verify');

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                api.defaults.headers.common['Authorization'] = response.data.token;
            }

            return response.data;
        } catch (error) {
            localStorage.removeItem("token");
            delete api.defaults.headers.common['Authorization'];
            return rejectWithValue(error.response?.data || 'Token verification failed');
        }
    }
);

const initialState = {
    user: {},
    addressList: [],
    creditCards: [],
    roles: [],
    theme: 'light',
    language: 'tr',
    status: 'idle',
    error: null
};

export const fetchAddressList = createAsyncThunk(
    'client/fetchAddressList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/user/address');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch addresses');
        }
    }
);

export const addAddress = createAsyncThunk(
    'client/addAddress',
    async (addressData, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/address', addressData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to add address');
        }
    }
);

export const updateAddress = createAsyncThunk(
    'client/updateAddress',
    async (addressData, { rejectWithValue }) => {
        try {
            const response = await api.put('/user/address', addressData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to update address');
        }
    }
);

export const deleteAddress = createAsyncThunk(
    'client/deleteAddress',
    async (addressId, { rejectWithValue }) => {
        try {
            await api.delete(`/user/address/${addressId}`);
            return addressId;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to delete address');
        }
    }
);

export const fetchCardList = createAsyncThunk(
    'client/fetchCardList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/user/card');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch cards');
        }
    }
);

export const addCard = createAsyncThunk(
    'client/addCard',
    async (cardData, { rejectWithValue }) => {
        try {
            const response = await api.post('/user/card', cardData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to add card');
        }
    }
);

export const updateCard = createAsyncThunk(
    'client/updateCard',
    async (cardData, { rejectWithValue }) => {
        try {
            const response = await api.put('/user/card', cardData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to update card');
        }
    }
);

export const deleteCard = createAsyncThunk(
    'client/deleteCard',
    async (cardId, { rejectWithValue }) => {
        try {
            await api.delete(`/user/card/${cardId}`);
            return cardId;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to delete card');
        }
    }
);

const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setRoles: (state, action) => {
            state.roles = action.payload;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchRoles.fulfilled, (state, action) => {
                state.roles = action.payload;
            })
            .addCase(verifyToken.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchAddressList.fulfilled, (state, action) => {
                state.addressList = action.payload;
            })
            .addCase(addAddress.fulfilled, (state, action) => {
                const newItem = Array.isArray(action.payload) ? action.payload[0] : action.payload;
                state.addressList.push(newItem);
            })
            .addCase(updateAddress.fulfilled, (state, action) => {
                const updatedItem = Array.isArray(action.payload) ? action.payload[0] : action.payload;
                const index = state.addressList.findIndex(item => item.id === updatedItem.id);
                if (index !== -1) state.addressList[index] = updatedItem;
            })
            .addCase(deleteAddress.fulfilled, (state, action) => {
                state.addressList = state.addressList.filter(item => item.id !== action.payload);
            })
            .addCase(fetchCardList.fulfilled, (state, action) => {
                state.creditCards = action.payload;
            })
            .addCase(addCard.fulfilled, (state, action) => {
                const newItem = Array.isArray(action.payload) ? action.payload[0] : action.payload;
                state.creditCards.push(newItem);
            })
            .addCase(updateCard.fulfilled, (state, action) => {
                const updatedItem = Array.isArray(action.payload) ? action.payload[0] : action.payload;
                const index = state.creditCards.findIndex(item => item.id === updatedItem.id);
                if (index !== -1) state.creditCards[index] = updatedItem;
            })
            .addCase(deleteCard.fulfilled, (state, action) => {
                state.creditCards = state.creditCards.filter(item => item.id !== action.payload);
            });
    },
});

export const { setUser, setRoles, setTheme, setLanguage } = clientSlice.actions;
export default clientSlice.reducer;
