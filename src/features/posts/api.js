import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json');
    const jsonResponse = await response.json();
    const posts = jsonResponse.data.children;
    let postData = {};
    for (const post of posts){
        postData[post.data.id] = {
            id: post.data.id,
            title: post.data.title,
            subreddit: post.data.subreddit,
            author: post.data.author,
            comments: post.data.num_comments,
            votes: post.data.score

        };
    }
    return postData;
})
