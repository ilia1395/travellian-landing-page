import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function BookingForm() {
  const [destination, setDestination] = useState('Dubai');
  const [person, setPerson] = useState(2);
  const [checkIn, setCheckIn] = useState(dayjs());
  const [checkOut, setCheckOut] = useState(dayjs().add(1, 'month'));
  const [showForm, setShowForm] = useState(false)

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    setShowForm(isMobile);
  }, [isMobile])

  function handleClick() {
    console.log('Booking setup done')
  }

  const hoverProps = !isMobile
  ? {
      onMouseEnter: () => setShowForm(true),
      onMouseLeave: () => setShowForm(false),
      }
  : {};

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Grid container alignItems="center">
        {/* Form Fields */}
        <Grid 
            {...hoverProps}
            size={{xs: 12, sm: 9, md: 10}}
            sx={{
                overflow: 'hidden',
                maxWidth: showForm ? {sx: 'auto', sm: '489px', md: '886px', lg: '1035px', xl: '1303px'} : '0',
                maxHeight: showForm ? {sx: '467px', sm: '216px', md: '176px', lg: '216px'} : '0',
                transition: {
                    sm: 'max-width 0.25s ease-out',
                    md: 'max-width 0.5s ease-out'
                    },
                alignSelf: 'flex-start',
            }}
        >
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            flexWrap="wrap"
            justifyContent="center"
            alignItems={{ md: "center" }}
            sx={{ 
                bgcolor: 'white',
                height: {sm: '216px', md: '176px', lg:'216px'},
                p: 3, 
                gap: 4,
                borderTopRightRadius: {xs: '16px', sm: '0'},
                borderTopLeftRadius: {xs: '16px', sm: '0'}
            }}
        >
            {/* Selects */}
            <FormControl variant="standard" sx={{ minWidth: '120px', flex: 1}}>
            <InputLabel>Destination</InputLabel>
            <Select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            >
                <MenuItem value="Dubai">Dubai</MenuItem>
                <MenuItem value="Rome">Rome</MenuItem>
                <MenuItem value="Paris">Paris</MenuItem>
            </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ minWidth: '120px', flex: 1}}>
            <InputLabel>Person</InputLabel>
            <Select
                value={person}
                onChange={(e) => setPerson(Number(e.target.value))}
            >
                {[1, 2, 3, 4, 5].map((p) => (
                <MenuItem key={p} value={p}>{p}</MenuItem>
                ))}
            </Select>
            </FormControl>

            {/* Date Pickers */}
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                flex={2}
            >
            <DatePicker
                label="Check In"
                value={checkIn}
                onChange={(newValue) => setCheckIn(newValue)}
                closeOnSelect= {true}
                slotProps={{
                textField: {
                    fullWidth: true,
                    variant: 'standard',
                },
                }}
            />
            <DatePicker
                label="Check Out"
                value={checkOut}
                onChange={(newValue) => setCheckOut(newValue)}
                closeOnSelect= {true}
                slotProps={{
                textField: {
                    fullWidth: true,
                    variant: 'standard',
                },
                }}
            />
            </Stack>
        </Stack>
        </Grid>

        {/* Button */}
        <Grid size={{xs: 12, sm: 2, md: 2}}>
        <Box
            {...hoverProps}
            sx={{
                height: { sm: '216px', md: '176px', lg: '216px' },
                width: { sx: 'auto', sm: '170px'},
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Button
              variant="contained"
              fullWidth
              onClick = {handleClick}
              sx={{
                height: '100%',   
                fontSize: {xs:'24px', md:'36px'},
                textAlign:'left',
                borderTopRightRadius: {xs: '0', sm: '16px'},
                borderBottomRightRadius: {xs: '16px', sm: '16px'},
                borderTopLeftRadius: {xs: '0', sm: '0'},
                borderBottomLeftRadius: {xs: '16px', sm: '0'},
              }}
            >
              Book Now →
            </Button>
        </Box>
        </Grid>
    </Grid>
    </LocalizationProvider>
  );
}
