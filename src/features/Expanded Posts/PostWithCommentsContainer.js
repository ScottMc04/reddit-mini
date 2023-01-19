import Header from "../../components/Header";
import PostWithComments from "./PostWithComments";




const Container = ({post}) => {
    return (
        <>
            <Header />
            <PostWithComments post={post} />
        </>
    )
}

export default Container;