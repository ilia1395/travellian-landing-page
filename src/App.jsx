import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import NavBar from './components/NavBar'
import MyContainer from './components/Container'
import BookMenu from './components/BookMenu'
import HeroCarousel from './components/HeroCarousel'
import SectionDataMapper from './components/SectionDataMapper'

export default function App() {

  return (
    <>
      {/* Hero Section */}
      <Box component="section" id="home" 
        sx={{
          position:'relative',
          padding:'0',
          height:{xs:'1000px'},
          marginBottom:{xs:'80px', md:'100px', lg:'140px'},
        }}
      >
        <SectionDataMapper type="hero-section" />
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
          <SectionDataMapper type='popular-destinations'/>
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
          <SectionDataMapper type='special-offer'/>
        </MyContainer>
      </Box>
      {/* Blog */}
      <Box component="section" id='blog'
        sx={{
          position: 'relative',
          padding: '0'
        }}
      >
        <MyContainer>
          <SectionDataMapper type='blog'></SectionDataMapper>
        </MyContainer>
      </Box>
      {/* Trip Planners */}
      <Box component="section" id='pricing'
        sx={{
          position: 'relative',
          padding: '0'
        }}
      >
        <MyContainer>
          <SectionDataMapper type='trip-planners'/>
        </MyContainer>
      </Box>
      {/* Destination Gallery */}
      <Box component="section" 
        sx={{
          position: 'relative',
          padding: '0'
        }}
      >
        <MyContainer>
          <SectionDataMapper type='destination-gallery' />
        </MyContainer>
      </Box>
      {/* Traveler Experiences */}
      <Box component="section" 
        sx={{
          position: 'relative',
          padding: '0'
        }}
      >
        <MyContainer>
          <SectionDataMapper type='traveler-experiences' />
        </MyContainer>
        
      </Box >
      {/* Footer */}
      <Box component="section"
         sx={{
          position: 'relative',
          padding: '0'
        }}
      >
        <MyContainer>
          <SectionDataMapper type="footer" />
        </MyContainer>
      </Box>
    </>
  )
}