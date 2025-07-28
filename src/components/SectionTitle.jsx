import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

export default function SectionTitle({title, detail}) {
  return (
      <Box width={'100%'}>
        <Typography variant='h1' textAlign='left'gutterBottom>{title}</Typography>
        <Divider 
          sx={{ 
            backgroundColor: 'primary.main',
            width: {xs: '50%', md:'80%'},
            height: '3px',
          }}
        />
        <Typography 
          variant='h2' 
          textAlign='left' 
          paddingTop="32px"
        >
          {detail}
        </Typography>
      </Box>
  )
}