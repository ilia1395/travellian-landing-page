import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'


export default function DestinationGalleryCard({ img }) {

  return (
    <Card sx={{ width: '100%'}}
    >      
      <CardActionArea>
        <CardMedia
          sx={{ 
            height: '570px',
            position: 'relative'
          }}
          component='img'
          loading='lazy'
          image={img}
        />
      </CardActionArea>
    </Card>
  );
}