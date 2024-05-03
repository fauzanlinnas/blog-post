import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import HomeContainer from 'screens/Home/container'
import PostsContainer from 'screens/Posts/container'
import PostDetailContainer from 'screens/Posts/container/post-detail'
import AlbumsContainer from 'screens/Albums/container'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContainer />} />

        <Route path="/user/:userId/posts" element={<PostsContainer />} />
        <Route path="/post/:postId" element={<PostDetailContainer />} />

        <Route path="/user/:userId/album" element={<AlbumsContainer />} />
      </Routes>
    </Router>
  )
}

export default App
