import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import SectionTitle from './SectionTitle'

export default function BlogCard({ img, title, subtitle, text, sectionTitle, sectionDetail }) {
  
  return (
    <Box
      sx={{
        display: 'grid',
        gridColumn: '1 / -1',
        height: 'auto',
        width: '100%',
        paddingTop:{xs:'80px', md:'100px', lg:'140px'},
      }}
    >
      <Box sx={{ width:{xs:'100%', md:'50%'} }}><SectionTitle title={sectionTitle} detail={sectionDetail} /></Box>
      <Box 
        sx={{
          display:"flex", 
          flexDirection:{xs:'column', md:'row'}, 
          alignItems:'center', 
          width:'100%', 
          marginTop:'100px'
        }}
      >
        <CardMedia
          sx={{ 
            height: '873px',
            width: {xs:'100%', md:'50%'},
            borderRadius: '20px',
          }}
          image={img}
        />
        <Box sx={{ display:'flex', flexDirection:'column', width:{xs:'100%', md:'50%'}, padding:'32px' }}>
          <Typography variant='h1' gutterBottom textAlign="left">{title}<br />{subtitle}</Typography>
          <Typography variant='h2' gutterBottom>{text}</Typography>
          <Button sx={{ color:'#FF7757', fontSize:'24px', alignSelf:'flex-start' }}>Read More →</Button>
        </Box>
      </Box>
    </Box>
    
  );
}