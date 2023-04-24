import { createSlice } from "@reduxjs/toolkit";
import { followUser, unfollowUser } from "./operations";

const actionsSlice = createSlice({
    name: 'actions',
    initialState: {
        followList: [],
        isUpdating: false,
        error: null,
    },
    extraReducers: {
        [followUser.pending](state) {
            state.isUpdating = true;
        },
        [followUser.rejected](state, action) {
            state.isUpdating = false;
            state.error = action.payload;
        },
        [followUser.fulfilled](state, action) {
            state.isUpdating = false;
            state.followList.push(action.payload);
        },
        [unfollowUser.pending](state) {
            state.isUpdating = true;
        },
        [unfollowUser.rejected](state, action) {
            state.isUpdating = false;
            state.error = action.payload;
        },
        [unfollowUser.fulfilled](state, action) {
            state.isUpdating = false;
            const index = state.followList.findIndex(
                user => user.id === action.payload.id
            );
            state.followList.splice(index, 1);
        },
    }
});

export const actionsReducer = actionsSlice.reducer;