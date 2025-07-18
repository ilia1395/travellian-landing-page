import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import NavBar from './components/NavBar'
import MyContainer from './components/Container'
import BookMenu from './components/BookMenu'
import HeroCarousel from './components/HeroCarousel'

export default function App() {

  return (
    <>
      <Box
        component="section" 
        sx={{
          position:'relative',
          padding:'0',
          paddingBottom:{xs:'795px', sm:'391px', md:'466px', lg:'656px'},
          overflow:'hidden'
        }}
      >
        <MyContainer>
          <Box 
            sx={{ 
              gridColumn: '1 / -1' 
              }}
          >
            <NavBar />
          </Box>
            
           <Box
            sx={{ 
              gridColumn: {xs:'1 / -1', sm:'1 / -2', md:'1 / -5'}, 
              paddingTop: {xs:'100px', sm:'100px', md:'72px', lg:'142px'} 
              }}
          >
            <Typography variant='h1' color='secondary.contrastText'>
              Start your unforgettable 
              journey with us.
            </Typography>
            <Typography variant='h2' color='secondary.contrastText' sx={{ pt: 2}}>
              The best travel for your jouney begins now
            </Typography>
          </Box>

          <Box 
            sx={{ 
              gridColumn: {sm:'8 / -2', md:'-2 / -1'},
              justifySelf: 'end',
              width: '16px',
              padding: 0, 
              paddingTop: {sm:'100px', md:'166px', lg:'176px', xl:'355px'}, 
            }}
          >
            <HeroCarousel/>
          </Box>

        </MyContainer>

        <Box sx={{ 
          position: 'absolute', 
          padding:{xs: '16px'},
          paddingTop: {xs:'100px', sm:'100px', md:'140px', lg:'170px'}, 
          paddingLeft:{sm: 0}, 
          paddingBottom:0 
          }}
        >
          <BookMenu />
        </Box>
      </Box>
      <Box component="section" id='explore' className="h-[400px]">
        <Typography variant='h1'>Destinations section</Typography>
      </Box>
      <Box component="section" id='travel' className="h-[400px]">
        <Typography variant='h1'>Special offer section</Typography>
      </Box>
      <Box component="section" id='blog' className="h-[400px]">
        <Typography variant='h1'>Blog section</Typography>
      </Box>
      <Box component="section" id='pricing' className="h-[400px]">
        <Typography variant='h1'>Trip planners section</Typography>
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