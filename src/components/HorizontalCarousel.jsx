import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'; 
import NavigateNextIcon from '@mui/icons-material/NavigateNext'; 

import Card from './Cards/PopularDestinationsCard';

export default function HorizontalCarousel() {
  const [allCards, setAllCards] = useState([]);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const cardsPerPage = isMobile ? 1 : 3; 
  const loopCarousel = !isMobile;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start', 
    loop: loopCarousel,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // TODO cards length from cards data
  useEffect(() => {
    const generatedCards = Array.from(
      { length: 10 },
      (_, i) => (
        <Card key={i} content={`Destination ${i + 1}`} />
      )
    );
    setAllCards(generatedCards);
  }, []);

  const totalPages = Math.ceil(allCards.length / cardsPerPage);
  const carouselPages = [];
  for (let i = 0; i < totalPages; i++) {
    const startIndex = i * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    carouselPages.push(allCards.slice(startIndex, endIndex));
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        py: '100px',
        position: 'relative',
        // Стили для растягивания карусели на всю ширину экрана
        width: '100vw', // Занимаем 100% ширины вьюпорта
        marginLeft: 'calc(50% - 50vw)', // Центрируем по вьюпорту, компенсируя возможные отступы родителя
        overflow: 'hidden', // Скрываем все, что выходит за пределы, чтобы избежать горизонтального скролла
      }}
    >
            {/* Кнопки навигации для мобильных (снизу) */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          mt: 3, // Отступ сверху от карусели
          display: isMobile ? 'flex' : 'none',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Button
          onClick={scrollPrev}
          variant="contained"
          sx={{
            height: 60,
            width: 66,
          }}
          disabled={!canScrollPrev}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }}/>
        </Button>
        <Button
          onClick={scrollNext}
          variant="contained"
          sx={{
            height: 60,
            width: 66,
          }}
          disabled={!canScrollNext}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }}/>
        </Button>
      </Stack>

      {/* Кнопки навигации для десктопа (сверху справа) */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: isMobile ? 'none' : 'box',
          position: 'absolute',
          right: '32px',
          top: 0
        }}
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
      
      {/* Контейнер карусели (Viewport Embla) */}
      <Box
        ref={emblaRef} // Прикрепляем emblaRef к этому элементу
        sx={{
          overflow: 'hidden', // Скрываем выходящие за границы слайды
          width: '100%', // Вьюпорт всегда 100% от родительского Box
          position: 'relative', // Для позиционирования кнопок навигации сверху справа
        }}
      >
        {/* Внутренний контейнер слайдов Embla */}
        <Box
          sx={{
            display: 'flex', // Embla использует flexbox для расположения слайдов
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
              {/* Stack для расположения карточек внутри одной "страницы" */}
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
    </Box>
  );
}
