import { getnewPosts } from "./newPostAPI";



const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    newPosts: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchnewPosts = createAsyncThunk("fetchnewPosts", async () => {
    const newPosts = await getnewPosts();
    const sortednewPosts = newPosts.sort((a, b) => parseFloat(b.createdAt) - parseFloat(a.createdAt))

    return sortednewPosts;
});

const newPostsSlice = createSlice({
    name: "newPosts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchnewPosts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchnewPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.newPosts = action.payload;
            })
            .addCase(fetchnewPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.newPosts = [];
                state.isError = true;
                state.error = action.error ?.message;
            });
    },
});

export default newPostsSlice.reducer;
