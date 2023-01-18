import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {

    let navigate = useNavigate();
    let content;
    if(post.type === 'hosted:video'){
        content = (
            <article className="vid-article">
                <h3>{post.title}</h3>
                <p id="content">
                    <video controls className="video">
                        <source src={post.video_link} type='video/mp4' />
                        Your browser does not support this video.
                    </video>
                </p> 
                <div id='footer'>
                    <p id="author">by {post.author}</p>
                    <p id="sub">r/{post.subreddit}</p>
                    <p id="votes"> Upvotes ↑↓ {post.votes}</p>
                </div>
            </article>
            
        )
    }else if (post.type === 'image'){
        content = (
            <article className="img-article">
                <h3>{post.title}</h3>
                <p id="content"><img src={post.image_or_link} alt=" " className="image"/></p> 
                <div id='footer'>
                    <p id="author">by {post.author}</p>
                    <p id="sub">r/{post.subreddit}</p>
                    <p id="votes"> Upvotes ↑↓ {post.votes}</p>
                </div>
            </article>
            
        )
    }else if(post.type === 'link'){
        content = (
            <article className="link-article">
                <h3>{post.title}</h3>
                <p id="content">
                    <a href={post.image_or_link} className="link">{post.image_or_link}</a>
                </p>
                <div id='footer'>
                    <p id="author">by {post.author}</p>
                    <p id="sub">r/{post.subreddit}</p>
                    <p id="votes"> Upvotes ↑↓ {post.votes}</p>
                </div>
            </article>
            
        )
    }

    const handleClick = (e) => {
        navigate(post.link_extention);
    }
    
    return (
        <main onClick={handleClick}>
            {content}
        </main>
    )
}

export default Post;