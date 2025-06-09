import { useState, useEffect } from 'react'

export default function PostList() {
  const [posts, setPosts] = useState([])

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Erro ao buscar posts:', error))
  }, [])

  return <h1>Lista de Posts ({posts.length})</h1>
}
