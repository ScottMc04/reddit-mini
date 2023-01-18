const Comment = ({comment}) => {

    return (
        <main className="comment-list">
            <article className="comment-article">
                <p id="author">{comment.author}</p>
                <p id="text">{comment.text}</p>
                <p id="likes">Likes {comment.score}</p>
            </article>
        </main>
    )
}
export default Comment;