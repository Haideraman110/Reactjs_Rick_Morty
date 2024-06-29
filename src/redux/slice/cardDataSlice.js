import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchdata = createAsyncThunk('fetchdata', async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character/')
    return response.data.results
})
const cardDataSlice = createSlice({
    name: 'carddata',
    initialState: {
        data: [],
        isloading: false,
        iserror: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchdata.pending, (state) => {
            state.isloading = true
        })
            .addCase(fetchdata.fulfilled, (state, action) => {
                state.isloading = false
                state.data = action.payload
            })
            .addCase(fetchdata.rejected, (state, action) => {
                state.iserror = action.payload
                state.isloading = true
            })

    }

})
export default cardDataSlice.reducer