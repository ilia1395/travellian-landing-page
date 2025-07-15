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
    <AppBar position="static" color='transparent'>
      <Toolbar 
        className='
          h-[98px]
          flex
          flex-row
          justify-between 
          sm:h-[114px]  
          lg:h-[128px]'
      > 
        <SvgIcon 
          component={LogoIcon} 
          inheritViewBox
          className="
            h-[27.52px] w-[140px]
            sm:h-[45.61px] w-[234px]
            "
        />
        <Box className="hidden navCollapse:flex flex-row gap-8 items-center">
          {mainPages.map((page) => (
            <Link 
              key={page}
              href={`#${page.toLowerCase()}`}
            >
              {page}
            </Link>
          ))}
        </Box>
        <Box className="hidden navCollapse:flex flex-row gap-8 items-center">
            <Button>Login</Button>
            <Button>Signup</Button>
        </Box>

        <Box className="flex navCollapse:hidden">
          <IconButton onClick={handleOpen} color="inherit">
            <MenuIcon/>
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
            {/* // TODO login, signup pages */}
            <MenuItem onClick={handleClose}><Link underline='none' color='inherit'>Login</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link underline='none' color='inherit'>SignUp</Link></MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}