
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "@/hooks/useIsVisible";
import { X, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Image = {
  id: number;
  src: string;
  alt: string;
  category: "food" | "ambiance" | "events";
};

const galleryImages: Image[] = [
  // Food images
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=2940&auto=format&fit=crop",
    alt: "Dal Makhani",
    category: "food",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1589301168068-964664d93dc0?q=80&w=2874&auto=format&fit=crop",
    alt: "Lamb Biryani",
    category: "food",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2940&auto=format&fit=crop",
    alt: "Butter Chicken",
    category: "food",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=3271&auto=format&fit=crop",
    alt: "Paneer dish",
    category: "food",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop",
    alt: "Vegetable dish",
    category: "food",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1585937421612-70a008356c36?q=80&w=2636&auto=format&fit=crop",
    alt: "Prawn Curry",
    category: "food",
  },
  
  // Ambiance images
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=2940&auto=format&fit=crop",
    alt: "Restaurant interior",
    category: "ambiance",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2940&auto=format&fit=crop",
    alt: "Elegant dining area",
    category: "ambiance",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop",
    alt: "Table setting",
    category: "ambiance",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2944&auto=format&fit=crop",
    alt: "Chef at work",
    category: "ambiance",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1586999768265-24af89630739?q=80&w=2874&auto=format&fit=crop",
    alt: "Bar area",
    category: "ambiance",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop",
    alt: "Restaurant exterior",
    category: "ambiance",
  },
  
  // Events images
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2940&auto=format&fit=crop",
    alt: "Private dining event",
    category: "events",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2940&auto=format&fit=crop",
    alt: "Wedding reception",
    category: "events",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=2940&auto=format&fit=crop",
    alt: "Corporate event",
    category: "events",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2940&auto=format&fit=crop",
    alt: "Birthday celebration",
    category: "events",
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2940&auto=format&fit=crop",
    alt: "Celebration event",
    category: "events",
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2940&auto=format&fit=crop",
    alt: "Small gathering",
    category: "events",
  },
];

const Gallery = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [headerRef, isHeaderVisible] = useIsVisible<HTMLDivElement>();
  
  // State for modal
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  
  // State for filter
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // Filter images based on category
  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory);
  
  // Open modal
  const openModal = (image: Image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };
  
  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl"
          >
            Explore the visual journey of culinary excellence and elegant ambiance
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div 
          ref={headerRef}
          className="taj-container"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title centered mx-auto">Our Visual Story</h2>
            <p className="mt-6 text-neutral-600 max-w-3xl mx-auto">
              Take a peek at our restaurant's ambiance, delicious food, and special events through our curated gallery.
            </p>
          </motion.div>
          
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex bg-neutral-100 rounded-full p-1">
              {[
                { id: "all", name: "All" },
                { id: "food", name: "Food" },
                { id: "ambiance", name: "Ambiance" },
                { id: "events", name: "Events" },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm transition-colors",
                    activeCategory === category.id
                      ? "bg-gold text-white"
                      : "text-neutral-600 hover:bg-neutral-200"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="image-overlay rounded-lg overflow-hidden shadow-md cursor-pointer relative group"
                onClick={() => openModal(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/50 rounded-full p-2">
                    <Maximize2 className="h-6 w-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={closeModal}
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl max-h-[80vh]"
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4 font-serif text-lg">{selectedImage.alt}</p>
          </motion.div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
