import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export default function SpecialOffersCard({ city, country, details, rating, price, img }) {

  return (
    <Card sx={{ width: '100%'}}
    >      
      <CardMedia
        sx={{ 
          height: '288px',
          position: 'relative' 
        }}
        image={img}
        title={`${city}, ${country}`}
      />
      <CardContent>
        <Stack direction='column'>
          <Typography gutterBottom variant="h3">
            {city}, {country}
          </Typography>
          <Rating 
            name="read-only"
            size='medium'
            value={rating}
            readOnly 
          />
        </Stack>
      
        <Typography variant="h2" paddingTop={2} gutterBottom>
          {details}
        </Typography>
        
        <Stack direction={{xs:'column', sm: 'row'}} spacing='20px' justifyContent='space-between'>
          <Stack direction='row' alignContent='center' alignItems='center' spacing='8.5px'>
            <Typography variant="h2"> From </Typography>
            <Typography variant="h4"> {price} </Typography>
          </Stack>
          <Button variant='contained' 
            sx={{ width: '127px', height: '56px'}}
          >
            Details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}