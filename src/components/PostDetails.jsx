import { useState } from 'react'
import { useParams } from 'react-router-dom'


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
            <Typography variant="h5" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body1">{post.body}</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  )
}