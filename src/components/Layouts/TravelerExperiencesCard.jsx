import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import LocationPinIcon from '@mui/icons-material/LocationPin';
import Rating from '@mui/material/Rating'

export default function TravelerExperiencesCard({ img, review, rating, name, job }) {
  return (
    <Card sx={{ width: '100%', boxShadow:'none'}}>      
      <CardMedia
        sx={{ 
          position: 'absolute',
          height: '100px',
          width: '100px',
          borderRadius: '50%',
          marginLeft: '40px'
        }}
        image={img}
        title={`${name}`}
      />

      <Box 
        sx={{
        width: '100%',
        marginTop: '75px',
        padding: '40px',
        paddingTop: '60px',
        position: 'relative'
        }}
      >
        <Typography gutterBottom variant="h2">{review}</Typography>
        <Rating name="read-only" size='medium' value={rating} readOnly />
        <Typography variant="h3" sx={{ color: 'text.secondary' }}>{name}</Typography>
        <Typography variant="h2">{job}</Typography>
        <Box 
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0, 
            borderRadius: '20px', 
            backgroundColor: '#767E86', 
            opacity: 0.05,
            zIndex: 1
          }}
        />
      </Box>
      
    </Card>
  );
}