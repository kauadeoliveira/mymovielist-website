import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    openNavBar: false,
}


export const navBarSlice = createSlice({
    name: 'navBar',
    initialState,
    reducers: {
        open: (state) => {
            state.openNavBar = !state.openNavBar
        }
    }
})