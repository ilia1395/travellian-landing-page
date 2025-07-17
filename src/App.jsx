import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import NavBar from './components/NavBar'
import MyContainer from './components/Container'
import BookMenu from './components/BookMenu'

export default function App() {

  return (
    <>
      <section className="relative h-[120vh] overflow-hidden">
        <img
          src="/hero-background.jpg"
          alt="Hero"
          className="
            absolute 
            top-0 
            left-0 
            w-full 
            h-full 
            object-cover 
            z-[-1]"
        />
        <MyContainer>
          <Box sx={{ gridColumn: '1 / -1' }}>
            <NavBar />
          </Box>
           <Box sx={{ gridColumn: { xs: '1 / -1', md: 'span 6' }, pt: ['100px', '100px', '72px', '142px'] }}>
            <Typography variant='h1' color='secondary.contrastText'>
              Start your unforgettable 
              journey with us.
            </Typography>
            <Typography variant='h2' color='secondary.contrastText' sx={{ pt: 2}}>
              The best travel for your jouney begins now
            </Typography>
          </Box>
        </MyContainer>
        <Box sx={{ position: 'absolute', pt: ['100px', '100px', '140px', '170px'], p:{xs: '16px'}, pl:{sm: 0}}}>
          <BookMenu />
        </Box>
      </section>
      <section id='explore' className="h-[400px]">
        <Typography variant='h1'>Destinations section</Typography>
      </section>
      <section id='travel' className="h-[400px]">
        <Typography variant='h1'>Special offer section</Typography>
      </section>
      <section id='blog' className="h-[400px]">
        <Typography variant='h1'>Blog section</Typography>
      </section>
      <section id='pricing' className="h-[400px]">
        <Typography variant='h1'>Trip planners section</Typography>
      </section>
      <section className="h-[400px]">
        <Typography variant='h1'>Gallery section</Typography>
      </section>
      <section className="h-[400px]">
        <Typography variant='h1'>Destinations section</Typography>
      </section>
      <footer>
        <Typography variant='h1'>footer</Typography>
      </footer>
    </>
  )
}