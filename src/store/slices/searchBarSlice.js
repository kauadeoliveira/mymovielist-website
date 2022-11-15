import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openSearchBar: false,
}

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        open: (state) => {
            state.openSearchBar = !state.openSearchBar
        }
    }
})