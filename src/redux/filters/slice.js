import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "filters",
    initialState: "",
    reducers: {
        setFilter: (state, action) => action.payload,
    },
});

export const { setFilter } = slice.actions;
export const filtersReducer = slice.reducer;