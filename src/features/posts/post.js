const PostsExcerpt = ({ post }) => {
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.content}</p> 
            <div id='footer'>
                <p id="author">by {post.author}</p>
                <p id="sub">r/{post.subreddit}</p>
                <p id="votes"> Upvotes ↑↓ {post.votes}</p>
            </div>
        </article>
    )
}

export default PostsExcerpt;