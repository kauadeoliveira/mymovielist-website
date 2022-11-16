import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: '',
}

export const searchValueSlice = createSlice({
    name: 'searchValue',
    initialState,
    reducers: {
        onChangeValue: (state, action) => {
            state.searchValue = action.payload
        }
    }
})