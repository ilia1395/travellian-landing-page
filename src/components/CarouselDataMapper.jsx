import sectionTitles from '../data/sectionTitles'

import destinations from '../data/popularDestinations'
import PopularDestinationsCard from './Cards/PopularDestinationsCard'

import offers from '../data/specialOffers'
import SpecialOffersCard from './Cards/SpecialOffersCard'

import tripPlanners from '../data/tripPlanners'
import TripPlannersCard from './Cards/TripPlannersCard'

import HorizontalCarousel from './HorizontalCarousel'

export default function CarouselDataMapper({ type }) {
  let cards = []
  let direction = 'row'
  let title = "Section Title"
  let detail = "Section Text"

  switch (type) {
    case 'popular-destinations' :
      cards = destinations.map((item) => (
        <PopularDestinationsCard key={item.id} {...item} />
      ))
      direction = 'row'
      title = sectionTitles[0].title
      detail = sectionTitles[0].detail
      break
    case 'special-offer':
      cards = offers.map((item) => (
        <SpecialOffersCard key={item.id} {...item}/>
      ))
      direction = 'row-reverse'
      title = sectionTitles[1].title
      detail = sectionTitles[1].detail
      break
    case 'trip-planners':
      cards = tripPlanners.map((item) => (
        <TripPlannersCard key={item.id} {...item}/>
      ))
      direction = 'row-reverse'
      title = sectionTitles[4].title
      detail = sectionTitles[4].detail
      break
    default:
      cards = []
  }

  return (
    <HorizontalCarousel cards={cards} direction={direction} title={title} detail={detail}/>
  );
}
