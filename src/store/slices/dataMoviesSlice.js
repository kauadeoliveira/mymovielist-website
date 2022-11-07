import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

export const dataMoviesSlice = createSlice({
    name: 'dataMovies',
    initialState,
    reducers: {
        saveData: (state, action) => {
            state.data = action.payload
        }
    }
})