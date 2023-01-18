import React, { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PostsList from './features/posts/PostsList';
import { selectModifiedPosts } from './features/posts/postsSlice';
import PostWithComments from './features/Expanded Posts/PostWithComments';

export default function App() {

  let posts = useSelector(selectModifiedPosts);
  const [postRoutes, setPostRoutes] = useState([]);

  useEffect(() => {
    for (const post in posts) {
      setPostRoutes((prev) => ([
        ...prev,
        <Route path={`/${posts[post].link_extention}`} element={<PostWithComments post={posts[post]} />} key={posts[post].id} />
      ]))
    }
    return () => {setPostRoutes([])}
  }, [posts]);

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Navigate to="/r/popular"/>} key="homePage" />
        <Route path="/r/popular" element={<PostsList /> } key="home" />
          {postRoutes}
     </Routes>
    </BrowserRouter>
  );
}