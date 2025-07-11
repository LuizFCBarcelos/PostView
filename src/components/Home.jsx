import { Box, Container, Typography, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#242424',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Bem-vindo à aplicação de Posts
        </Typography>

        <Stack spacing={2} direction="column" alignItems="center">
            <Button variant="contained" size="large" onClick={() => navigate('/post')}>
            Ver Lista de Posts
            </Button>

            <Button
            variant="outlined"
            size="large"
            onClick={() => {
                const randomId = Math.floor(Math.random() * 100) + 1
                navigate(`/dados/${randomId}`)
            }}
            >
            Ver detalhes de um post aleatório
            </Button>

        </Stack>
      </Container>
    </Box>
  )
}
