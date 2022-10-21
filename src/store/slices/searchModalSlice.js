import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openModalSearch: false,
}

export const searchModalSlice = createSlice({
    name: 'searchModal',
    initialState,
    reducers: {
        open: (state) => {
            state.openModalSearch = !state.openModalSearch
        }
    }  
}) 