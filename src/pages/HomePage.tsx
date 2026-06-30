import { useState, useEffect, Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';

const BedroomInspirationGallery = lazy(() => import('../components/BedroomInspirationGallery'));
const PromotionalBanner = lazy(() => import('../components/PromotionalBanner'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Contact = lazy(() => import('../components/Contact'));

interface HomePageProps {
  searchQuery: string;
  onClearSearch: () => void;
}

export default function HomePage({ searchQuery, onClearSearch }: HomePageProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Categories activeCategory={activeCategory} onSelectCategory={(cat) => {
        setActiveCategory(cat);
      }} />
      <FeaturedProducts 
        activeCategory={activeCategory} 
        searchQuery={searchQuery} 
        onClearSearch={onClearSearch} 
      />
      <Suspense fallback={<div className="py-20 flex justify-center"><div className="w-8 h-8 border-4 border-rose/30 border-t-rose rounded-full animate-spin"></div></div>}>
        <BedroomInspirationGallery />
        <PromotionalBanner />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </Suspense>
    </>
  );
}
