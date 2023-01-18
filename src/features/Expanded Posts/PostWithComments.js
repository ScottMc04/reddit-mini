import CommentsList from "./CommentsList";
import ExpandedPost from "../Expanded Posts/ExpandedPost";
import "./Comments.css";

const PostWithComments = ({post}) => {

    const url = window.location.href;
    const urlExtention = `/r/${url.split('/r/')[1]}`;
    const postId = url.split('/')[6];

    return (
        <main>
            <ExpandedPost postId={postId} post={post}/>
            <CommentsList urlExtention={urlExtention} />
        </main>
    )
}

export default PostWithComments;