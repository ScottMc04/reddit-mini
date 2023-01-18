const ExpandedPost = ({ post }) => {

    let content;
    if(post.type === 'hosted:video'){
        content = (
                    <video controls className="video">
                        <source src={post.video_link} type='video/mp4' />
                        Your browser does not support this video.
                    </video>
        )
    }else if (post.type === 'image'){
        content = (
                <img src={post.image_or_link} alt=" " className="image"/>
        )
    }else if(post.type === 'link'){
        content = (
                <a href={post.image_or_link} className="link">{post.image_or_link}</a>
        )
    }
    
    return (
        <main>
            <article className="link-article">
                    <h3>{post.title}</h3>
                    <p>{content}</p>
                    <div id='footer'>
                        <p id="author">by {post.author}</p>
                        <p id="sub">r/{post.subreddit}</p>
                        <p id="votes"> Upvotes ↑↓ {post.votes}</p>
                    </div>
                </article>
        </main>
    )
}

export default ExpandedPost;