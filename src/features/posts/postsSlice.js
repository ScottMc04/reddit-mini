import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: [
        {id: '1', title: 'post 1', content: 'I like this sentence.', userId: '1', votes: '104'},
        {id: '2', title: 'post 2', content: 'words but part 2', userId: '2', votes: '53'}
    ],
    reducers: {
        
    }
});

export const selectAllPosts = state => state.posts;
export default postsSlice.reducer;