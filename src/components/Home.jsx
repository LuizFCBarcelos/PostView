import { Container, Typography, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Bem-vindo à aplicação de Posts
      </Typography>

      <Stack spacing={2} direction="column">
        <Button variant="contained" onClick={() => navigate('/post')}>
          Ver Lista de Posts
        </Button>

        <Button variant="outlined" onClick={() => navigate('/dados/1')}>
          Ver Detalhes do Post 1
        </Button>
      </Stack>
    </Container>
  )
}
