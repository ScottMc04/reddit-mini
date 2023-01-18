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
            type: post.data.post_hint,
            is_video: post.data.is_video,
            video_link : (post.data.media && !('oembed' in post.data.media)? post.data.media.reddit_video.fallback_url : ""),
            video_height : (post.data.media && !('oembed' in post.data.media)? post.data.media.reddit_video.height : ""),
            video_width : (post.data.media && !('oembed' in post.data.media)? post.data.media.reddit_video.width : ""),
            image_or_link: post.data.url,
            votes: post.data.score,
            link_extention: post.data.permalink

        };
    }
    return postData;
})

export const fetchComments = createAsyncThunk('comments/fetchComments', async (post) => {
    const response = await fetch(`https://www.reddit.com${post}.json`);
    const jsonResponse = await response.json();
    const comments = jsonResponse[1].data.children;
    let commentsData = {};
    for (const comment of comments){
        commentsData[comment.data.id]  ={
            comment_id: comment.data.id,
            author: comment.data.author,
            score: comment.data.score,
            text: comment.data.body,
            text_html: comment.data.body_html,
            extention: comment.data.permalink
        };
    }
    return commentsData;
})