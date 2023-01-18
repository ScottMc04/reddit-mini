import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../posts/api";
import Comment from './Comment';
import { selectAreCommmentsLoading, selectCommentsError, selectAllComments } from "./commentsSlice";

const CommentsList = ({urlExtention}) => {

    const dispatch = useDispatch();
    const comments = useSelector(selectAllComments);
    const commentsLoading = useSelector(selectAreCommmentsLoading);
    const commentsError = useSelector(selectCommentsError);
     
    useEffect(() => {
        dispatch(fetchComments(urlExtention))
    }, [dispatch, urlExtention]);

    let commentsArray = [];
    for (const comment in comments) {
        commentsArray.push(<Comment key={comment} comment={comments[comment]} />)
    }

    if (commentsLoading){
        return (
            <p className="msg">Comments loading...</p>
        )
    }
    if (commentsError){
        return (
            <p className="msg">An error occured while trying to load comments.</p>
        )
    }
    return (
        <section>
            <h2>Comments</h2>
            {commentsArray}
        </section>
    )

}

export default CommentsList;