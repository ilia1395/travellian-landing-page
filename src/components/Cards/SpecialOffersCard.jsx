import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button'

export default function PopularDestinationsCard({ city, country, details, rating, price, img }) {
  const [value, setValue] = React.useState(rating);

  return (
    <Card sx={{ width: '497px'}}>
      <CardActionArea>        
        <CardMedia
          sx={{ height: '629px' }}
          image={img}
          title={`${city}, ${country}`}
        />
        <CardContent>
        <Typography gutterBottom variant="h2">
          {city}, {country}
        </Typography>
        <Rating 
          name="read-only" 
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}  
        />
        <Typography variant="h3">
          {details}
        </Typography>
        <Typography variant="h4">
          From {price}
        </Typography>
        <Button variant='contained'>Details</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}