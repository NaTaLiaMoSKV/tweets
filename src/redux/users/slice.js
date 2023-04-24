import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations";
export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersList: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchUsers.pending](state, action) {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled](state, action) {
            state.usersList = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [fetchUsers.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const usersReducer = usersSlice.reducer;