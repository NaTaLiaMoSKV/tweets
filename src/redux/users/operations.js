import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://64465d06ee791e1e29fd08ab.mockapi.io';

export const fetchUsers = createAsyncThunk(
    'tweets/fetch',
    async(_, thunkAPI) => {
        try {
            const res = await axios.get('/users');
            return res.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)