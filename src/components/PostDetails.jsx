import { useState } from 'react'
import { useParams } from 'react-router-dom'


export default function PostDetails() {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  return (
    <div>
      <h1>Detalhes do Post {id}</h1>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  )
}