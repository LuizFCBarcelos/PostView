import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Typography, Card, CardContent } from '@mui/material'

export default function PostDetails() {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Erro ao buscar post:', error))
  }, [id])

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Detalhes do Post {id}
      </Typography>

      {post && (
        <Card>
          <CardContent>
            <Typography variant="h6">ID do Post: {post.id}</Typography>
            <Typography variant="h6">ID do Usuário: {post.userId}</Typography>
            <Typography variant="h5">Título: {post.title}</Typography>
            <Typography variant="body1">Conteúdo: {post.body}</Typography>

          </CardContent>
        </Card>
      )}
    </Container>
  )
}
