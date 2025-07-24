import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'; 
import NavigateNextIcon from '@mui/icons-material/NavigateNext'; 

export default function HorizontalCarousel({ cards }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // console.log(isMobile)

  const cardsPerPage = isMobile ? 1 : 3;

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const carouselPages = [];

  for (let i = 0; i < totalPages; i++) {
    const startIndex = i * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    carouselPages.push(cards.slice(startIndex, endIndex));
  }

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev(); 
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext(); 
  }, [emblaApi]);

  const onSelect = useCallback((api) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  // Добавляем слушателей событий Embla Carousel
  useEffect(() => {
    if (!emblaApi) return;

    // Устанавливаем начальное состояние кнопок
    onSelect(emblaApi);

    // Подписываемся на события 'reInit' (при изменении размеров) и 'select' (при смене слайда)
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    // Функция очистки при размонтировании компонента
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <Box
      sx={{
        display: 'grid',
        gridColumn: '1 / -1',
        height: 'auto',
        width: '100%',
        paddingTop:{xs:'80px', md:'100px', lg:'140px'},
        paddingBottom:{sm:'80px', md:'100px', lg:'140px'}
      }}
    >
      {/* Title & Navigation buttons */}
      <Box
        display={'flex'}
        flexDirection= 'row'
        justifyContent={'space-between'}
      >
        {/* Title */}
        <Box>
          <Typography variant='h1' textAlign='left'gutterBottom>Popular Destinations</Typography>
          <Divider 
            sx={{ 
              backgroundColor: 'primary.main',
              width: {xs: '227px', sm: '365px'},
              height: '3px',
            }}
          />
          <Typography 
            variant='h2' 
            textAlign='left' 
            paddingTop="32px"
          >
            Most popular destinations around the world, from historical places to natural wonders.
          </Typography>
        </Box>
        
        {/* Desktop Navigation buttons */}
        <Stack
          direction='row'
          spacing={'40px'}
          alignSelf={'flex-end'}
          display={isMobile ? 'none' : 'box'}
        >
          <Button
            onClick={scrollPrev}
            variant="contained"
            sx={{
              height: '66px',
              width: '60px',
              padding: 0
            }}
            disabled={!canScrollPrev}
          >
            <NavigateBeforeIcon />
          </Button>
          <Button
            onClick={scrollNext}
            variant="contained"
            sx={{
              height: '66px',
              width: '60px',
              padding: 0
            }}
            disabled={!canScrollNext}
          >
            <NavigateNextIcon />
          </Button>
        </Stack>
      </Box>
      
      {/* Embla container (carousel) */}
      <Box
        ref={emblaRef}
        sx={{
          overflow: 'hidden', 
          paddingTop: '100px',
        }}
      >
        {/* inside container */}
        <Box
          sx={{
            display: 'flex',
          }}
        >
          {carouselPages.map((pageOfCards, pageIndex) => (
            <Box
              key={`carousel-page-${pageIndex}`}
              sx={{
                flexShrink: 0,
                flexGrow: 0,
                flexBasis: isMobile ? '100%' : 'none', 
                minWidth: 0, 
                padding: 1
              }}
              role="group"
              aria-roledescription="slide"
            >
              {/* Stack for cards */}
              <Stack direction="row">
                {pageOfCards.map((card, cardIndex) => (
                  <Box
                    key={`card-${pageIndex}-${cardIndex}`}
                    sx={{
                      flexShrink: 0,
                      flexGrow: 1,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      pr: isMobile ? 0 : (cardIndex < cardsPerPage - 1 ? 2 : 0)
                    }}
                  >
                    {card}
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Mobile Navigation buttons */}
      <Stack
        direction='row'
        spacing={'40px'}
        paddingTop={'100px'}
        justifySelf={'center'}
        display={isMobile ? 'box' : 'none'}
      >
        <Button
          onClick={scrollPrev}
          variant="contained"
          sx={{
            height: '66px',
            width: '60px',
            padding: 0
          }}
          disabled={!canScrollPrev}
        >
          <NavigateBeforeIcon />
        </Button>
        <Button
          onClick={scrollNext}
          variant="contained"
          sx={{
            height: '66px',
            width: '60px',
            padding: 0
          }}
          disabled={!canScrollNext}
        >
          <NavigateNextIcon />
        </Button>
      </Stack>
    </Box>
  );
}
