import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import NavBar from './NavBar'
import MyContainer from './Container'
import BookMenu from './BookMenu'
import HeroCarousel from './HeroCarousel'

export default function HeroSection({ sectionTitle, sectionDetail }) {
  return (
    <>
    <MyContainer>
      <Box 
        sx={{ 
          gridColumn: '1 / -1',
          }}
      >
        <NavBar />
      </Box>
        <Box
        sx={{ 
          gridColumn: {xs:'1 / -1', sm:'1 / -2', md:'1 / -5'}, 
          paddingTop: {xs:'100px'},
          alignSelf: 'start',
          }}
      >
        <Typography variant='h1' color='secondary.contrastText' gutterBottom>
          {sectionTitle}
        </Typography>
        <Typography variant='h2' color='secondary.contrastText'>
          {sectionDetail}
        </Typography>
      </Box>
      
      <Box 
        sx={{ 
          gridColumn: {sm:'8 / -2', md:'-2 / -1'},
          justifySelf: 'end',
          paddingTop: {sm:'166px'},
        }}
      >
        <HeroCarousel/>
      </Box>
    </MyContainer>

    <Box sx={{ 
      position: 'absolute', 
      padding:{xs: '16px', sm: '0'},
      marginTop: {xs:'100px'},
      }}
    >
      <BookMenu />
    </Box>
    </>
  )
}