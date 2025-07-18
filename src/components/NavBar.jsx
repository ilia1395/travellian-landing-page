import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import LogoIcon from '../assets/logo.svg?react';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { useState } from 'react'


const mainPages = ['Home', 'Explore', 'Travel', 'Blog', 'Pricing']
const authPages = ['Login', 'SignUp']

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return ( 
    <AppBar position="static" color='transparent' variant='transparent' sx={{ padding:'0' }}>
      <Toolbar
        disableGutters
        sx={{
          height: { xs:'98px', sm:'114px', lg:'128px' },
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          padding:'0',
          paddingLeft:'0',
          paddingRight:'0'
        }}
      > 
        <SvgIcon 
          component={LogoIcon} 
          inheritViewBox
          sx={{
            height:{xs:'27.52px', sm:'45.61px'},
            width:{xs:'140px', sm:'234px'},
            padding:'0'
          }}
        />
        <Box className="hidden navCollapse:flex flex-row gap-8 items-center">
          {mainPages.map((page) => (
            <Link 
              key={page}
              href={`#${page.toLowerCase()}`}
              color='primary.contrastText'
              underline="none"
              sx={{
                position: 'relative',
                textDecoration: 'none',
                
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: -2,
                  width: '100%',
                  height: '3px',
                  backgroundColor: 'primary.main',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.3s ease'
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                },
              }}
            >
              {page}
            </Link>
          ))}
        </Box>
        <Box className="hidden navCollapse:flex flex-row gap-8 items-center">
            <Button variant='text'>
              Login
            </Button>
            <Button
              variant='contained'
              sx={{ 
                width: '134px',
                height: '64px'
              }}
            >
              Sign up
            </Button>
        </Box>

        <Box className="flex navCollapse:hidden">
          <IconButton onClick={handleOpen} color="inherit" sx={{ padding:'0' }}>
            <MenuIcon sx={{ width: '50px', height: '50px', color: 'white'}}/>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {mainPages.map((page) => (
              <MenuItem key={page} onClick={handleClose}>
                <Link
                  href={`#${page.toLowerCase()}`}
                  underline="none"
                  color="inherit"
                >
                  {page}
                </Link>
              </MenuItem>
            ))}

            <Divider/>
            <MenuItem onClick={handleClose}><Link underline='none' color='inherit'>Login</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link underline='none' color='inherit'>SignUp</Link></MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}