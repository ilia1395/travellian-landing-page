import destinations from '../data/popularDestinations';
import PopularDestinationsCard from './Cards/PopularDestinationsCard';

import offers from '../data/specialOffers'

import HorizontalCarousel from './HorizontalCarousel';

export default function CarouselDataMapper({ type }) {
  let cards = []

  switch (type) {
    case 'popular-destinations' :
      cards = destinations.map((item) => (
        <PopularDestinationsCard key={item.id} {...item} />
      ))
      break
    // case 'special-offer':
    //   cards = offers.map((item) => (
    //     <PopularDestinationsCard key={item.id} data={item}/>
    //   ))
    //   break
    default:
      cards = []
  }

  return (
    <HorizontalCarousel cards={cards}/>
  );
}
