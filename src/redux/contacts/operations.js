import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET
export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/contacts");
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// ADD
export const addContact = createAsyncThunk(
    "contacts/add",
    async (contact, thunkAPI) => {
        try {
            const res = await axios.post("/contacts", contact);
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// DELETE
export const deleteContact = createAsyncThunk(
    "contacts/delete",
    async (id, thunkAPI) => {
        try {
            await axios.delete(`/contacts/${id}`);
            return id;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);