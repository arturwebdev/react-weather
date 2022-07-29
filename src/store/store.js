import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { dataReducer } from "./slices/data/data";
import { searchInputReducer } from "./slices/searchInput/serachInputSlice";

import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
   key: 'root',
   storage
}

const rootReducer = combineReducers({
   searchInput: searchInputReducer,
   data: dataReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      })
})

export const persistor = persistStore(store)

export default store