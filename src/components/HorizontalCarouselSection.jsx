import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { usePrevNextButtons } from './HorizontalCarouselButtons'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

import SectionTitle from './SectionTitle'

export default function HorizontalCarousel({ cards, direction, sectionTitle, sectionDetail }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' }, [Autoplay()])

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

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
      {/* Title & Navigation buttons */}
      <Box
        display={'flex'}
        flexDirection= {direction}
        justifyContent={'space-between'}
      >
        {/* Title */}
        <Box sx={{ width:{xs:'100%', md:'50%'} }}><SectionTitle title={sectionTitle} detail={sectionDetail}/></Box>
        
        {/* Desktop Navigation buttons */}
        <Stack
          direction='row'
          spacing={'40px'}
          alignSelf={'flex-end'}
          display={isMobile ? 'none' : 'box'}
        >
          <Button
            onClick={onPrevButtonClick}
            variant="contained"
            sx={{
              height: '66px',
              width: '60px',
              padding: 0
            }}
            disabled={prevBtnDisabled}
          >
            <NavigateBeforeIcon />
          </Button>
          <Button
            onClick={onNextButtonClick}
            variant="contained"
            sx={{
              height: '66px',
              width: '60px',
              padding: 0
            }}
            disabled={nextBtnDisabled}
          >
            <NavigateNextIcon />
          </Button>
        </Stack>
      </Box>
      
      {/* Embla container (carousel) */}
      <Box
        className="embla__viewport"
        ref={emblaRef}
        sx={{
          overflow: 'hidden', 
          paddingTop: '100px',
        }}
      >
        <Box className="embla__container" sx={{ display: 'flex'}}>
          {cards.map((card, index) => (
            <Box 
              key={index} 
              className="embla__slide"
              sx={{
                flex: `0 0 ${isMobile ? '100%' : `${100 / 3}%`}`,
                minWidth: 0,
                display: 'flex',
                justifyContent: 'center',
                padding: 1
              }}
            >
              {card}
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
          onClick={onPrevButtonClick}
          variant="contained"
          sx={{
            height: '66px',
            width: '60px',
            padding: 0
          }}
          disabled={prevBtnDisabled}
        >
          <NavigateBeforeIcon />
        </Button>
        <Button
          onClick={onNextButtonClick}
          variant="contained"
          sx={{
            height: '66px',
            width: '60px',
            padding: 0
          }}
          disabled={nextBtnDisabled}
        >
          <NavigateNextIcon />
        </Button>
      </Stack>
    </Box>
  );
}
