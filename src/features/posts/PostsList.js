import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectAllPosts, selectArePostsLoading, selectPostsError, selectModifiedPosts, setModifiedPosts } from "./postsSlice";
import Post from "./Post";
import './PostsList.css'; 
import { fetchPosts } from "./api";

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postsLoading = useSelector(selectArePostsLoading);
    const postsError = useSelector(selectPostsError);
    const modifiedPosts = useSelector(selectModifiedPosts);

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    useEffect(() => {
        let postList = [];
        dispatch(setModifiedPosts(postList));
        postList = Object.values(posts);
        dispatch(setModifiedPosts(postList));
    }, [posts, dispatch])

    let content;
    if (postsLoading){
        content = <p className="msg">Loading...</p>
    } else if (postsError){
        content = <p className="msg">An error occcured while trying to load posts.</p>;        
    }
    else {
        const finalPosts = modifiedPosts.slice();
        content = finalPosts.map(post => <Post key={post.id} post={post} />)
    }
    return (
            <section>
                <h2 id="bigPosts">Posts</h2>
                {content}
            </section>
        )
   
    
}
export default PostsList;
