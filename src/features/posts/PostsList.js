import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectAllPosts, selectArePostsLoading, selectPostsError, selectModifiedPosts, setModifiedPosts, selectFilter } from "./postsSlice";
import Post from "./Post";
import './PostsList.css'; 
import { fetchPosts } from "./api";

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postsLoading = useSelector(selectArePostsLoading);
    const postsError = useSelector(selectPostsError);
    const modifiedPosts = useSelector(selectModifiedPosts);
    const currentFilter = useSelector(selectFilter);

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    useEffect(() => {
        let postList = [];
        dispatch(setModifiedPosts(postList));
        postList = Object.values(posts);
        dispatch(setModifiedPosts(postList));
    }, [posts, dispatch])

    const filter = (postList) => {
        const filteredPostList = postList.filter(post => {
            const titleSub = (post.title+post.subreddit).toLowerCase();
            if (titleSub.includes(currentFilter.toLowerCase())){
                return true;
            } else {
                return false;
            }
        });
        return filteredPostList;
    }

    const finalArray = () => {
        let postList = modifiedPosts;
        if (currentFilter) {
            postList = filter(postList);
        }
        let finalPostList = [];
        postList.slice().forEach(post => {
            finalPostList.push(<Post key={post.id} post={post} />);
        })
        return finalPostList;
    }

    let content;
    if (postsLoading){
        content = <p className="msg">Loading...</p>
    } else if (postsError){
        content = <p className="msg">An error occcured while trying to load posts.</p>;        
    }
    else {
        content = finalArray();
    }
    return (
            <section>
                {content}
            </section>
        )
   
}
export default PostsList;
