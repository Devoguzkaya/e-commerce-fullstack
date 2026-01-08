import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

// Thunk Action for Login
export const loginUser = createAsyncThunk(
    'client/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await api.post('/login', credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Login failed');
        }
    }
);

// Thunk Action for Fetching Roles
export const fetchRoles = createAsyncThunk(
    'client/fetchRoles',
    async (_, { getState, rejectWithValue }) => {
        // Check if roles already exist to avoid unnecessary calls
        const { client } = getState();
        if (client.roles && client.roles.length > 0) {
            return client.roles; // Return existing roles (technically promise resolve)
        }

        try {
            const response = await api.get('/roles');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch roles');
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
    status: 'idle', // idle | loading | succeeded | failed
    error: null
};

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
            // Fetch Roles
            .addCase(fetchRoles.fulfilled, (state, action) => {
                state.roles = action.payload;
            });
    },
});

export const { setUser, setRoles, setTheme, setLanguage } = clientSlice.actions;
export default clientSlice.reducer;
