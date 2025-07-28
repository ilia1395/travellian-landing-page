import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';

const heroImages = {
  1: "/hero/austria-hallstatt.jpg",
  2: "/hero/germany-berlin.jpg",
  3: "/hero/italy-venice.jpg",
  4: "/hero/portugal-lisbon.jpg",
  5: "/hero/uk-london.jpg"
};

export default function HeroCarousel() {
  const [selectedValue, setSelectedValue] = useState('1');

  const imagesCount = Object.keys(heroImages).length;
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedValue]);
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const goToNext = () => {
    setSelectedValue(prev => String((+prev % imagesCount) + 1));
  };

  const goToPrev = () => {
    setSelectedValue(prev => {
      const next = +prev - 1 || imagesCount;
      return String(next);
    });
  };

  return (
    <>
      {Object.entries(heroImages).map(([key, src]) => (
        <img
          key={key}
          src={src}
          alt={`Hero ${key}`}
          className={`
            absolute 
            top-0 
            left-0 
            w-full 
            h-full
            object-cover 
            transition-opacity 
            duration-1000 
            ease-in-out 
            z-[-1]
            ${selectedValue === key ? 'opacity-100' : 'opacity-0'}
          `}
        />
      ))}

      <Box 
        sx={{  
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }} 
        >
        <Stack 
          direction="column" 
          alignItems="flex-end" 
        >
          {Object.keys(heroImages).map((key) => (
            <Radio
              key={key}
              checked={selectedValue === key}
              onChange={handleChange}
              value={key}
              name="radio-buttons"
              slotProps={{ 'aria-label': key }}
              sx={{ paddingRight: 0}}
            />
          ))}
        </Stack>
        <Stack direction="column" alignItems="flex-end" sx={{ paddingTop: '24px' }}>
          <IconButton onClick={goToPrev}>
            <KeyboardArrowUpIcon />
          </IconButton>
          <IconButton onClick={goToNext}>
          <KeyboardArrowDownIcon />
        </IconButton>
        </Stack>
      </Box>
    </>
  );
}
