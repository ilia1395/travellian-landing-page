import Container from '@mui/material/Container';

export default function MyContainer({ children }) {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        px: { xs: '16px', sm: '20px', md: '32px', lg: '32px', xl: '220px' },
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(8, 1fr)',
          sm: 'repeat(12, 1fr)',
        },
        gap: '32px',
      }}
    >
      {children}
    </Container>
  );
}
