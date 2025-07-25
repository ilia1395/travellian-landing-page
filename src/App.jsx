import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import NavBar from './components/NavBar'
import MyContainer from './components/Container'
import BookMenu from './components/BookMenu'
import HeroCarousel from './components/HeroCarousel'
import CarouselDataMapper from './components/CarouselDataMapper'

export default function App() {

  return (
    <>
      {/* Hero Section */}
      <Box component="section" id="home" 
        sx={{
          position:'relative',
          padding:'0',
          height:{xs:'1210px', sm:'789px', md:'880px', lg:'1194px'},
        }}
      >
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
              paddingTop: {xs:'100px', sm:'100px', md:'72px', lg:'142px'},
              alignSelf: 'start',
              }}
          >
            <Typography variant='h1' color='secondary.contrastText' gutterBottom>
              Start your unforgettable 
              journey with us.
            </Typography>
            <Typography variant='h2' color='secondary.contrastText'>
              The best travel for your jouney begins now
            </Typography>
          </Box>
          
          <Box 
            sx={{ 
              gridColumn: {sm:'8 / -2', md:'-2 / -1'},
              justifySelf: 'end',
              width: '16px',
              paddingTop: {sm:'100px', md:'166px', lg:'176px', xl:'355px'},
            }}
          >
            <HeroCarousel/>
          </Box>
        </MyContainer>

        <Box sx={{ 
          position: 'absolute', 
          padding:{xs: '16px', sm: '0'},
          marginTop: {xs:'100px', sm:'0'}, 
          }}
        >
          <BookMenu />
        </Box>
      </Box>
      {/* Popular Destinations */}
      <Box component="section" id='explore' 
        sx={{
          position: 'relative',
          padding:'0',
        }}
      >
        <MyContainer>
          {/* Carousel */}
          <CarouselDataMapper type='popular-destinations'/>
        </MyContainer>
      </Box>
      {/* Special Offer */}
      <Box component="section" id='travel' 
        sx={{
          position: 'relative',
          padding: '0'
        }}
      >
        <MyContainer>
          <CarouselDataMapper type='special-offer'/>
        </MyContainer>
      </Box>
      {/* Blog */}
      <Box component="section" id='blog' className="h-[400px]">
        <Typography variant='h1'>Blog section</Typography>
      </Box>
      {/* Trip Planners */}
      <Box component="section" id='pricing'
        sx={{
          position: 'relative',
          padding: '0'
        }}
      >
        <MyContainer>
          <CarouselDataMapper type='trip-planners'/>
        </MyContainer>
      </Box>
      <Box component="section" className="h-[400px]">
        <Typography variant='h1'>Gallery section</Typography>
      </Box>
      <Box component="section" className="h-[400px]">
        <Typography variant='h1'>Destinations section</Typography>
      </Box>
      <Box>
        <Typography variant='h1'>footer</Typography>
      </Box>
    </>
  )
}