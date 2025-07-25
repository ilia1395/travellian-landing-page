import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'

import { useState } from 'react'

export default function TripPlannersCard({ country, city, type, price, title, rating, time, img }) {
  const [value, setValue] = useState(rating);

  return (
    <Card sx={{ width: '100%'}}
    >      
      <CardMedia
        sx={{ 
          height: '675px',
          position: 'relative' 
        }}
        image={img}
        title={`${city}, ${country}`}
      />
      <CardContent>
        <Box display='flex' direction='row' justifyContent='space-between'>
          <Typography variant='h2'>{type}</Typography>
          <Typography variant='h2'>{price}</Typography>
        </Box>
        
        <Box display='flex' direction='column' width='100%'>
          <Typography variant='h3'>{title}</Typography>
          <Box display='flex' direction='row' justifyContent='space-between'>
            <Rating 
              name="simple-controlled" 
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
            />
            <Typography variant='h2'>{time}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}