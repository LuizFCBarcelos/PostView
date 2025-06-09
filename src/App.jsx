import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PostList from './components/PostList'
import PostDetails from './components/PostDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/post" />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/dados/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
