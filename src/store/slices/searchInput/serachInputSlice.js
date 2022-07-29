import { createSlice } from "@reduxjs/toolkit";


const searchInputSlice = createSlice({
    name: 'searchInput',
    initialState: '',
    reducers: {
        typeText(state, {payload}) {
            return payload
        }
    }
})

export const { typeText } = searchInputSlice.actions

export const selectSearchInput = (state) => state.searchInput 

export const searchInputReducer = searchInputSlice.reducer