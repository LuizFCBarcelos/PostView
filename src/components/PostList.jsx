import { useState, useEffect } from 'react'

export default function PostList() {
  const [posts, setPosts] = useState([])

  return <h1>Lista de Posts ({posts.length})</h1>
}
