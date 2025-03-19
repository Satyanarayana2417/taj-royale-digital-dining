import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsVisible } from '@/hooks/useIsVisible';
import Button from '@/components/ui/Button';

type Dish = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  veg: boolean;
  chefRecommended?: boolean;
};

const featuredDishes: Dish[] = [
  {
    id: 1,
    name: 'Butter Chicken',
    description: 'Tender chicken in a rich buttery tomato sauce with aromatic spices',
    price: '₹450',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2940&auto=format&fit=crop',
    veg: false,
    chefRecommended: true,
  },
  {
    id: 2,
    name: 'Paneer Tikka Masala',
    description: 'Grilled cottage cheese cubes in a spiced tomato gravy',
    price: '₹380',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?q=80&w=2940&auto=format&fit=crop',
    veg: true,
  },
  {
    id: 3,
    name: 'Lamb Biryani',
    description: 'Fragrant basmati rice cooked with tender lamb and signature spices',
    price: '₹520',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2874&auto=format&fit=crop',
    veg: false,
  },
  {
    id: 4,
    name: 'Dal Makhani',
    description: 'Creamy black lentils simmered overnight with butter and spices',
    price: '₹320',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=2940&auto=format&fit=crop',
    veg: true,
    chefRecommended: true,
  },
  {
    id: 5,
    name: 'Tandoori Prawns',
    description: 'Jumbo prawns marinated with yogurt and spices, cooked in tandoor',
    price: '₹650',
    image: 'https://images.unsplash.com/photo-1626508035297-0dbc8459dce3?q=80&w=2787&auto=format&fit=crop',
    veg: false,
  },
];

const FeaturedDishes = () => {
  const [ref, isVisible] = useIsVisible<HTMLDivElement>();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const checkScrollability = () => {
    if (!carouselRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };
  
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollability);
      // Initial check
      checkScrollability();
      
      return () => carousel.removeEventListener('scroll', checkScrollability);
    }
  }, []);
  
  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const { clientWidth } = carouselRef.current;
    const scrollAmount = clientWidth * 0.8;
    
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };
  
  return (
    <section className="py-20 bg-neutral-50">
      <div 
        ref={ref}
        className="taj-container"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title centered mx-auto">Our Featured Dishes</h2>
          <p className="mt-6 text-neutral-600 max-w-3xl mx-auto">
            Experience our chef's meticulously crafted specialties, made with premium ingredients and authentic techniques.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <button
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md transition-opacity ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ArrowLeft className="h-6 w-6 text-neutral-800" />
          </button>
          
          <button
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md transition-opacity ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ArrowRight className="h-6 w-6 text-neutral-800" />
          </button>
          
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-none"
            onScroll={checkScrollability}
          >
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] bg-white rounded-lg overflow-hidden shadow-md group"
              >
                <div className="image-overlay h-56">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover"
                  />
                  {dish.chefRecommended && (
                    <div className="absolute top-3 right-3 bg-gold text-white text-xs py-1 px-2 rounded-full">
                      Chef's Choice
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-white text-neutral-800 text-xs py-1 px-2 rounded-full">
                    {dish.veg ? 'Vegetarian' : 'Non-Vegetarian'}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-2 group-hover:text-gold transition-colors">{dish.name}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gold font-medium">{dish.price}</span>
                    <Button variant="outline" size="sm" to="/menu">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button to="/menu" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
