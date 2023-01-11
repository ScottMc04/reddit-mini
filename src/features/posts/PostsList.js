import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import './posts.css'; 

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p> 
            <div id='footer'>
                <PostAuthor userId={post.userId} />
                <p> Upvotes ↑↓ {post.votes}</p>
            </div>
        </article>
    ))

    return (
        <section>
            {renderedPosts}
        </section>
    )
}

export default PostsList;
