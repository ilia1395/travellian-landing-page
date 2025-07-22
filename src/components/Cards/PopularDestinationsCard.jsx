import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'

export default function PopularDestinationsCard() {
  return (
    <Card sx={{ width: '497px'}}>
      <CardActionArea>        
        <CardMedia
          sx={{ height: '661px' }}
          image="austria-hallstatt.jpg"
          title="Austria Hallstatt"
        />
        <CardContent>
        <Typography gutterBottom variant="h2">
          Monument of Berlin
        </Typography>
        <Typography variant="h2">Berlin, Germany</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}