import React, { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { selectModifiedPosts } from './features/posts/postsSlice';
import Container from './features/Expanded Posts/PostWithCommentsContainer';
import PostContainer from './features/posts/PostContainer';

export default function App() {

  let posts = useSelector(selectModifiedPosts);
  const [postRoutes, setPostRoutes] = useState([]);

  useEffect(() => {
    for (const post in posts) {
      setPostRoutes((prev) => ([
        ...prev,
        <Route path={`/${posts[post].link_extention}`} element={<Container post={posts[post]} />} key={posts[post].id} />
      ]))
    }
    return () => {setPostRoutes([])}
  }, [posts]);

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Navigate to="/r/popular"/>} key="homePage" />
        <Route path="/r/popular" element={<PostContainer /> } key="home" />
          {postRoutes}
     </Routes>
    </BrowserRouter>
  );
}