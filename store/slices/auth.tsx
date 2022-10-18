import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
    loading: false
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
            state.loading = false;
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.error = null;
            state.loading = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { login, logout, setError, setLoading } = AuthSlice.actions;
export default AuthSlice.reducer;