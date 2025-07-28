import sectionTitles from '../data/sectionTitles'
import SectionTitle from './SectionTitle'

import destinations from '../data/popularDestinations'
import PopularDestinationsCard from './Layouts/PopularDestinationsCard'

import offers from '../data/specialOffers'
import SpecialOffersCard from './Layouts/SpecialOffersCard'

import tripPlanners from '../data/tripPlanners'
import TripPlannersCard from './Layouts/TripPlannersCard'

import blogData from '../data/blog'
import BlogCard from './BlogSection'

import destinationsGallery from '../data/destinationGallery'
import DestinationGalleryCard from './Layouts/DestinationGalleryCard'

import HorizontalCarousel from './HorizontalCarouselSection'
import { cardMediaClasses } from '@mui/material/CardMedia'

export default function SectionDataMapper({ type }) {
  let cards = []
  let direction = 'row'
  const section = sectionTitles.find(s => s.type === type) || {}
  const sectionTitle = section.title || "Section Title"
  const sectionDetail = section.detail || "Section Text"
  let isCarousel = true

  switch (type) {
    case 'popular-destinations' :
      cards = destinations.map((item) => (
        <PopularDestinationsCard key={item.id} {...item} />
      ))
      direction = 'row'
      isCarousel = true
      break
    case 'special-offer':
      cards = offers.map((item) => (
        <SpecialOffersCard key={item.id} {...item}/>
      ))
      direction = 'row-reverse'
      isCarousel = true
      break
    case 'blog':
      cards = blogData.map((item) => (
        <BlogCard key={item.id} {...item} sectionTitle={sectionTitle} sectionDetail={sectionDetail}/>
      ))
      direction = 'row-reverse'
      isCarousel = false
      break
    case 'trip-planners':
      cards = tripPlanners.map((item) => (
        <TripPlannersCard key={item.id} {...item}/>
      ))
      direction = 'row-reverse'
      isCarousel = true
      break
    case 'destination-gallery':
      cards = destinationsGallery.map((item) => (
        <DestinationGalleryCard key={item.id} {...item}/>
      ))
      direction = 'row'
      isCarousel = true
      break
    default:
      cards = []
  }

  return (
    <>
    {isCarousel ? (
      <HorizontalCarousel cards={cards} direction={direction} sectionTitle={sectionTitle} sectionDetail={sectionDetail}/>
    ) : (
      cards
    )}
    </>
  );
}
