import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Slices
import { themeSlice } from "./slices/themeSlice";
import { navBarSlice } from "./slices/navBarSlice";
import { dataMoviesSlice } from "./slices/dataMoviesSlice";

export const store = configureStore({
    reducer: combineReducers({
        theme: themeSlice.reducer,
        navBar: navBarSlice.reducer,
        dataMovies: dataMoviesSlice.reducer
    })
})
