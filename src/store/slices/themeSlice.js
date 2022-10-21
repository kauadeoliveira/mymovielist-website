import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkTheme: false
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.darkTheme = !state.darkTheme
        }
    }
})