import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles'; 

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'; 
import NavigateNextIcon from '@mui/icons-material/NavigateNext'; 

import Card from './Cards/PupularDestinations';

export default function HorizontalCarousel() {
  const [allCards, setAllCards] = useState([]);
  const theme = useTheme();

  const [cardsPerPage, setCardsPerPage] = useState(1); 
  const [loopCarousel, setLoopCarousel] = useState(false); 

  useEffect(() => {
    const updateCarouselSettings = () => {
      if (window.innerWidth >= theme.breakpoints.values.md) {
        setCardsPerPage(3); 
        setLoopCarousel(true); 
      } else {
        setCardsPerPage(1); 
        setLoopCarousel(false);
      }
    };

    updateCarouselSettings();

    window.addEventListener('resize', updateCarouselSettings);

    return () => window.removeEventListener('resize', updateCarouselSettings);
  }, [theme.breakpoints.values.md]);

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
        py: 4,
        position: 'relative',
        // Стили для растягивания карусели на всю ширину экрана
        width: '100vw', // Занимаем 100% ширины вьюпорта
        marginLeft: 'calc(50% - 50vw)', // Центрируем по вьюпорту, компенсируя возможные отступы родителя
        overflow: 'hidden', // Скрываем все, что выходит за пределы, чтобы избежать горизонтального скролла
      }}
    >
      {/* Контейнер карусели (Viewport Embla) */}
      <Box
        ref={emblaRef} // Прикрепляем emblaRef к этому элементу
        sx={{
          overflow: 'hidden', // Скрываем выходящие за границы слайды
          width: '100%', // Вьюпорт всегда 100% от родительского Box
          position: 'relative', // Для позиционирования кнопок навигации сверху справа
          paddingTop: '32px'
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
                flexBasis: '100%', 
                minWidth: 0, 
                padding: 1
              }}
              role="group"
              aria-roledescription="slide"
            >
              {/* Stack для расположения карточек внутри одной "страницы" */}
              <Stack
                direction="row"
                alignContent="center"
                justifyContent="center"
                sx={{
                  width: '100%',
                  height: '100%',
                  // Увеличение фона карточки при наведении
                  '& .MuiCard-root': { // Селектор для корневого элемента вашей карточки
                    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      
                    },
                  },
                }}
              >
                {pageOfCards.map((card, cardIndex) => (
                  <Box
                    key={`card-${pageIndex}-${cardIndex}`}
                    sx={{
                      flexShrink: 0,
                      flexGrow: 1,
                      minWidth: {
                        xs: '100%',
                        md: `${100 / cardsPerPage}%`
                      },
                      maxWidth: {
                        xs: '100%',
                        md: `${100 / cardsPerPage}%`
                      },
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      pr: {
                        xs: 0, // На мобильных нет правого паддинга
                        md: cardIndex < cardsPerPage - 1 ? 2 : 0, // Только между карточками
                      }
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

      {/* Кнопки навигации для мобильных (снизу) */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          mt: 3, // Отступ сверху от карусели
          display: {
            xs: 'flex', // Показываем на мобильных
            md: 'none', // Скрываем на десктопе
          },
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
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            }
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
        spacing={1} // Отступ между кнопками
        sx={{
          display: {
            xs: 'none', // Скрываем на мобильных
            md: 'flex', // Показываем на десктопе
          },
          position: 'absolute',
          top: 10, // Отступ сверху от родительского Box
          right: 10, // Отступ справа от родительского Box
          // Если родительский Box имеет padding, возможно, потребуется корректировка
          // Например, right: `calc(10px + ${theme.spacing(2)})` если paddingX: 2
        }}
      >
        <Button
          onClick={scrollPrev}
          variant="contained"
          sx={{
            height: 36, // Меньший размер для десктопных кнопок
            width: 36,
            minWidth: 0, // Убираем минимальную ширину для круглых кнопок
            padding: 0, // Убираем паддинг
          }}
          disabled={!canScrollPrev}
        >
          <NavigateBeforeIcon />
        </Button>
        <Button
          onClick={scrollNext}
          variant="contained"
          sx={{
            height: 36,
            width: 36,
            minWidth: 0,
            padding: 0,
          }}
          disabled={!canScrollNext}
        >
          <NavigateNextIcon />
        </Button>
      </Stack>
    </Box>
  );
}
