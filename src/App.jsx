import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import PostList from './components/PostList'
import PostDetails from './components/PostDetails'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/dados/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
