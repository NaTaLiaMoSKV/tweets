import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const followUser = createAsyncThunk(
    'actions/follow',
    async ({id, followers}, thunkAPI) => {
        try {
            // console.log('before follow: ' + followers);
            const response = await axios.put(`/users/${id}`, { followers: followers + 1 });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const unfollowUser = createAsyncThunk(
    'actions/unfollow',
    async ({id, followers}, thunkAPI) => {
        try {
            // console.log('before unfollow: ' + followers);
            const response = await axios.put(`/users/${id}`, { followers: followers - 1 });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)