
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsVisible } from '@/hooks/useIsVisible';

type Testimonial = {
  id: number;
  name: string;
  position?: string;
  rating: number;
  comment: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Raj Sharma',
    position: 'Food Critic',
    rating: 5,
    comment: 'The butter chicken at Taj Royale is the best I've had in the city. The spices are perfectly balanced, and the service is impeccable. A must-visit for anyone looking for authentic Indian cuisine.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Priya Patel',
    rating: 5,
    comment: 'The ambiance is simply stunning! Every dish we ordered was a masterpiece, both in presentation and taste. The staff was attentive without being intrusive. Will definitely return for special occasions.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'Travel Blogger',
    rating: 4,
    comment: 'As someone who travels the world trying different cuisines, I can confidently say that Taj Royale offers an authentic experience that stands out. The lamb biryani was exceptional!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Anita Desai',
    rating: 5,
    comment: 'We celebrated our anniversary at Taj Royale and it was perfect from start to finish. The customized dessert was a lovely touch. Thank you for making our evening so special!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop',
  },
];

const Testimonials = () => {
  const [ref, isVisible] = useIsVisible<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isVisible]);
  
  // Navigate to previous testimonial
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Navigate to next testimonial
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };
  
  return (
    <section className="py-20 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>
      
      <div 
        ref={ref}
        className="taj-container relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title centered text-white mx-auto">What Our Guests Say</h2>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto px-8">
          {/* Navigation buttons */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 transition-colors duration-300 z-10"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 transition-colors duration-300 z-10"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Testimonial content */}
          <div className="relative h-[320px] sm:h-[300px] md:h-[260px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-full h-full flex flex-col items-center text-center"
              >
                <div className="mb-5">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? 'text-gold fill-gold' : 'text-neutral-600'}`} 
                    />
                  ))}
                </div>
                
                <blockquote className="mb-6 text-lg italic text-neutral-200">
                  "{testimonials[currentIndex].comment}"
                </blockquote>
                
                <div>
                  <p className="text-gold font-medium text-lg">{testimonials[currentIndex].name}</p>
                  {testimonials[currentIndex].position && (
                    <p className="text-neutral-400 text-sm">{testimonials[currentIndex].position}</p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-gold' : 'bg-white/20'
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
