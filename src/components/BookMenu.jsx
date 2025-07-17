import React, { useState } from 'react';
import {
  Box,
  Grid,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Stack,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function BookingForm() {
  const [destination, setDestination] = useState('Dubai');
  const [person, setPerson] = useState(2);
  const [checkIn, setCheckIn] = useState(dayjs());
  const [checkOut, setCheckOut] = useState(dayjs().add(1, 'month'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Grid
        container
        alignItems="center"
    >
        {/* Form Fields */}
        <Grid size={{xs: 12, sm: 9, md: 10}}>
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            flexWrap="wrap"
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
            <FormControl variant="standard" sx={{ minWidth: 120, flex: 1}}>
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

            <FormControl variant="standard" sx={{ minWidth: 100, flex: 1}}>
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

            {/* Date Pickers - Оборачиваем в отдельный Stack для sm*/}
            <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            flex={2}
            >
            <DatePicker
                label="Check In"
                value={checkIn}
                onChange={(newValue) => setCheckIn(newValue)}
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
        <Box>
            <Button
            variant="contained"
            fullWidth
            sx={{
                height: {sm: '216px', md: '176px', lg:'216px'},
                fontSize: '36px',
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
