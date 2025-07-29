import HorizontalCarousel from './HorizontalCarouselSection'

import sectionTitles from '../data/sectionTitles'

import HeroSection from './HeroSection'

import destinations from '../data/popularDestinations'
import PopularDestinationsCard from './Layouts/PopularDestinationsCard'

import offers from '../data/specialOffers'
import SpecialOffersCard from './Layouts/SpecialOffersCard'

import tripPlanners from '../data/tripPlanners'
import TripPlannersCard from './Layouts/TripPlannersCard'

import blogData from '../data/blog'
import BlogCard from './BlogSection'

import destinationsGalleryData from '../data/destinationGallery'
import DestinationGalleryCard from './Layouts/DestinationGalleryCard'

import travelerExperiencesData from '../data/travelersExperiences'
import TravelerExperiencesCard from './Layouts/TravelerExperiencesCard'

import Footer from './Footer'

export default function SectionDataMapper({ type }) {
  let cards = []
  let direction = 'row'
  const section = sectionTitles.find(s => s.type === type) || {}
  const sectionTitle = section.title || "Section Title"
  const sectionDetail = section.detail || "Section Text"

  switch (type) {
    
    case 'hero-section' :
      return <HeroSection sectionTitle={sectionTitle} sectionDetail={sectionDetail}/>
      break
    case 'popular-destinations' :
      cards = destinations.map((item) => (
        <PopularDestinationsCard key={item.id} {...item} />
      ))
      direction = 'row'
      break
    case 'special-offer':
      cards = offers.map((item) => (
        <SpecialOffersCard key={item.id} {...item} />
      ))
      direction = 'row-reverse'
      break
    case 'blog':
      return <BlogCard 
              img={blogData.img} 
              title={blogData.title} 
              subtitle={blogData.subtitle} 
              text={blogData.text}
              sectionTitle={sectionTitle}
              sectionDetail={sectionDetail} />
      break
    case 'trip-planners':
      cards = tripPlanners.map((item) => (
        <TripPlannersCard key={item.id} {...item} />
      ))
      direction = 'row-reverse'
      break
    case 'destination-gallery':
      cards = destinationsGalleryData.map((item) => (
        <DestinationGalleryCard key={item.id} {...item} />
      ))
      direction = 'row'
      break
    case 'traveler-experiences':
      cards = travelerExperiencesData.map((item) => (
        <TravelerExperiencesCard key={item.id} {...item} />
      ))
      direction = 'row'
      break
    case 'footer':
      return <Footer />
    default:
      return <></>
  }

  return (
    <HorizontalCarousel cards={cards} direction={direction} sectionTitle={sectionTitle} sectionDetail={sectionDetail} />
  );
}
