import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import CardActionArea from '@mui/material/CardActionArea'

export default function TripPlannersCard({ country, city, type, price, title, rating, time, img }) {

  return (
    <Card sx={{ width: '100%'}}
    >      
      <CardActionArea>
        <CardMedia
          sx={{ 
            height: '399px',
            position: 'relative' 
          }}
          component='img'
          loading='lazy'
          image={img}
          title={`${city}, ${country}`}
        />
        <CardContent>
          <Box display='flex' direction='row' justifyContent='space-between'>
            <Typography variant='h2'>{type}</Typography>
            <Typography variant='h2' sx={{ color:'black', letterSpacing:'2px' }} gutterBottom>{price}</Typography>
          </Box>
          
          <Typography variant='h3' gutterBottom>{title}</Typography>
          <Box display='flex' direction='row' justifyContent='space-between'>
              <Rating name="read-only" value={rating} readOnly/>
              <Typography variant='h2'sx={{ color:'black', letterSpacing:'1px' }}>{time}</Typography>
            </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}