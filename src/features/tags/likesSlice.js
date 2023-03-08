import { getlikes } from "./likesAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    likes: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchlikes = createAsyncThunk("fetchlikes", async () => {
    const likes = await getlikes();
    const sortedlikes = likes.sort((a, b) => parseFloat(b.likes) - parseFloat(a.likes))

    return sortedlikes;
});

const likesSlice = createSlice({
    name: "likes",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchlikes.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchlikes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.likes = action.payload;
            })
            .addCase(fetchlikes.rejected, (state, action) => {
                state.isLoading = false;
                state.likes = [];
                state.isError = true;
                state.error = action.error ?.message;
            });
    },
});

export default likesSlice.reducer;
