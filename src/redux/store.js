import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/slice";
import { actionsReducer } from "./actions/slice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        actions: actionsReducer,
    }
})