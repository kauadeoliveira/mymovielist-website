import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Slices
import { searchModalSlice } from "./slices/searchModalSlice";
import { themeSlice } from "./slices/themeSlice";

export const store = configureStore({
    reducer: combineReducers({
        searchModal: searchModalSlice.reducer,
        theme: themeSlice.reducer
    })
})
