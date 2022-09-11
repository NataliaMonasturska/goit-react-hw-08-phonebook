import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { contactsReducer } from './contacts/contacts-reducer'
import { authReducer } from "./auth/auth-reducer";
import {
     persistStore,
     
     persistReducer,
    
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER

} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const middleware = [...getDefaultMiddleware(),
     logger
    ]

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']

}

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        auth: persistReducer(authPersistConfig, authReducer)
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
