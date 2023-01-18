import { fetchComments } from "../posts/api";
import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {},
        isLoading: false,
        hasError: false
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.comments = action.payload;
        },
        [fetchComments.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectAllComments = state => state.comments.comments;
export const selectAreCommmentsLoading = state => state.comments.isLoading;
export const selectCommentsError = state => state.comments.hasError;

export default commentsSlice.reducer;