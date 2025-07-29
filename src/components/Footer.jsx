import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon';
import LogoIcon from '../assets/logo.svg?react';
import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const mainPages = ['Home', 'Explore', 'Travel', 'Blog', 'Pricing']
const information = ['Destinations', 'Supports', 'Terms & Conditions', 'Privacy']
const contacts = {
  phone: '+123 456 789',
  email: 'info@travellian.com',
  adress: '1245, New Yourk, USA'
}

const getHrefFromKeyAndValue = (key, value) => {
  if (key === 'phone') return `tel:${value}`
  if (key === 'email') {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${value}`
  } 
  if (key === 'adress' || key === 'address') {
    const encodedAddress = encodeURIComponent(value)
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  }
  return '#'
}

export default function Footer() {
  return (
    <Box
      sx={{
          display: 'grid',
          gridColumn: '1 / -1',
          height: 'auto',
          width: '100%',
          marginTop: '80px',
          marginBottom: '80px',
        }}
    >
      {/* Background */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0, 
          backgroundColor: '#172432',
          zIndex: 0
        }}
      />
      {/* Logo */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs:'column', md:'row'},
          justifyContent: 'space-between',
          zIndex: 1
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px'
          }}>
          <SvgIcon 
            component={LogoIcon} 
            inheritViewBox
            sx={{
              height:{xs:'27.52px', sm:'45.61px'},
              width:{xs:'140px', sm:'234px'},
              padding:'0'
            }}
          />
          <Typography variant="h2" color='primary.contrastText'> Copyright © Travellian <br/> 2020 All rights reserved </Typography>
        </Box>
        {/* Menu */}
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Typography variant="h5" gutterBottom> Menu </Typography>
          <MenuList>
            {mainPages.map((page) => (
              <MenuItem key={page} sx={{ paddingLeft:'0' }} > 
                <Link 
                  href={`#${page.toLowerCase()}`}
                  underline="hover"
                  color="primary.contrastText"
                >
                  {page}
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Box>
        {/* Information */}
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Typography variant="h5" gutterBottom> Information </Typography>
          <MenuList>
            {information.map((page) => (
              <MenuItem key={page} sx={{ paddingLeft:'0' }} > 
                <Link 
                  href={`#${page.toLowerCase()}`}
                  underline="hover"
                  color="primary.contrastText"
                >
                  {page}
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Box>
        {/* Contact Info */}
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Typography variant="h5" gutterBottom> Contact Info </Typography>
          <MenuList>
            {Object.entries(contacts).map(([key, value]) => (
              <MenuItem key={key} sx={{ paddingLeft:'0' }}>
                <Link 
                  href={getHrefFromKeyAndValue(key, value)}
                  underline="hover"
                  color="primary.contrastText"
                  target={key === 'adress' ? '_blank' : undefined}
                  rel={key === 'adress' ? 'noopener noreferrer' : undefined}
                >
                  {value}
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Box>
         {/* Follow us on */}
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Typography variant="h5" gutterBottom> Follow us on </Typography>
          <Box sx={{ display:'flex', flexDirection:'row', gap:'24px'}}>
            <FacebookIcon sx={{ color: '#ffffff' }} />
            <PinterestIcon sx={{ color: '#ffffff' }} />
            <InstagramIcon sx={{ color: '#ffffff' }} />
            <XIcon sx={{ color: '#ffffff' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}