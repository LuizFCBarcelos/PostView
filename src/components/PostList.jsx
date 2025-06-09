import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Typography, Card, CardContent, Button } from '@mui/material'

export default function PostList() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Erro ao buscar posts:', error))
  }, [])

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lista de Posts ({posts.length})
      </Typography>

      {posts.map(post => (
        <Card key={post.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2">{post.body}</Typography>
            <Button
              variant="contained"
              sx={{ mt: 1 }}
              onClick={() => navigate(`/dados/${post.id}`)}
            >
              Ver detalhes
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  )
}
