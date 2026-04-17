import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const slice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder => {
        builder
            // FETCH
            .addCase(fetchContacts.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })

            // ADD
            .addCase(addContact.pending, state => {
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.isLoading = false;
            })
            .addCase(addContact.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })

            // DELETE
            .addCase(deleteContact.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(c => c.id !== action.payload);
                state.isLoading = false;
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })

            // 🔥 LOGOUT TEMİZLEME (ZORUNLU)
            .addCase(logOut.fulfilled, state => {
                state.items = [];
                state.error = null;
                state.isLoading = false;
            });
    },
});

export const contactsReducer = slice.reducer;