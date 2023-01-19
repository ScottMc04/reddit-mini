import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./api";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {},
        isLoading: false,
        hasError: false,
        modifiedPosts: [],
        filter: ""
    },
    reducers: {
        setModifiedPosts: (state, action) => {
            state.modifiedPosts = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectAllPosts = state => state.posts.posts;
export const selectArePostsLoading = state => state.posts.isLoading;
export const selectPostsError = state => state.posts.hasError;
export const selectModifiedPosts = state => state.posts.modifiedPosts;
export const selectFilter = state => state.posts.filter;

export const { setModifiedPosts, setFilter } = postsSlice.actions;

export default postsSlice.reducer;