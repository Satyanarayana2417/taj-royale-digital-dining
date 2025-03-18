
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  // List of background images to cycle through
  const backgroundImages = [
    'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop',
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  
  return (
    <div className="relative h-screen">
      {/* Background images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block mb-3 bg-gold/90 text-white text-xs sm:text-sm uppercase px-3 py-1 rounded-sm tracking-wider font-medium">Fine Dining Experience</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 max-w-4xl leading-tight"
        >
          Welcome to Taj Royale – A Culinary Experience Beyond Borders
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/90 text-base sm:text-lg md:text-xl mb-8 max-w-2xl"
        >
          Indulge in an exquisite dining experience with authentic flavors, elegant ambiance, and impeccable service.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button to="/reservation" size="lg">
            Book a Table
          </Button>
          <Button to="/menu" size="lg" variant="outline">
            Explore Menu
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/80 text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-white/50"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
