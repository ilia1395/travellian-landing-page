import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import LocationPinIcon from '@mui/icons-material/LocationPin';

export default function PopularDestinationsCard({ destination, city, country, img }) {
  return (
    <Card sx={{ width: {xs:'100%', md: '497px'}}}>
      <CardActionArea>        
        <CardMedia
          sx={{ 
            height: {xs: '320px', sm: '456px', md:'661px'},
            position: 'relative'
          }}
          image={img}
          title={`${city}, ${country}`}
        >
          <Box 
            position={'absolute'} 
            bottom='40px'
            left='24px'
          >
          <Stack direction='column'>
            <Typography gutterBottom variant="h2" color='primary.contrastText'>
            {destination}
            </Typography>
            <Stack direction='row' spacing={1}>
              <LocationPinIcon sx={{ fontSize: '28px' }}/>
              <Typography variant="h2" color='primary.contrastText'> {city}, {country} </Typography>
            </Stack>
          </Stack>
          </Box>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
}