import NavBar from './components/NavBar'
import Typography from '@mui/material/Typography'
import MyContainer from './components/Container'
import Box from '@mui/material/Box'

export default function App() {

  return (
    <>
      <section 
        id='home' 
        className="
        h-[1194px] 
        bg-[url('/hero-background.jpg')] 
        bg-no-repeat 
        bg-[position:25%_50%]
        bg-[length:auto_1320px]"
      >
        <MyContainer>
          <Box sx={{ gridColumn: '1 / -1' }}>
            <NavBar />
          </Box>
           <Box sx={{ gridColumn: { xs: '1 / -1', md: 'span 6' } }}>
            <Typography variant='h1' color='secondary.contrastText'>Hero section</Typography>
          </Box>
        </MyContainer>   
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