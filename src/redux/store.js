import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { usersReducer } from "./users/slice";
import { actionsReducer } from "./actions/slice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const actionsPersistConfig = {
    key: 'actions',
    storage,
    whitelist:['followList']
}

export const store = configureStore({
    reducer: {
        users: usersReducer,
        actions: persistReducer(actionsPersistConfig, actionsReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);