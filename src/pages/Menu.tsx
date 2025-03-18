
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "@/hooks/useIsVisible";
import Button from "@/components/ui/Button";
import { Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

type Dish = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "starters" | "mains" | "desserts" | "sides" | "beverages";
  type: "veg" | "non-veg";
  spiceLevel?: 1 | 2 | 3;
  chefRecommended?: boolean;
  bestseller?: boolean;
};

const menu: Dish[] = [
  // Starters
  {
    id: 1,
    name: "Paneer Tikka",
    description: "Marinated cottage cheese cubes grilled to perfection in the tandoor",
    price: "₹350",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?q=80&w=2940&auto=format&fit=crop",
    category: "starters",
    type: "veg",
    spiceLevel: 2,
    bestseller: true,
  },
  {
    id: 2,
    name: "Chicken Seekh Kebab",
    description: "Minced chicken mixed with herbs and spices, skewered and grilled",
    price: "₹420",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2940&auto=format&fit=crop",
    category: "starters",
    type: "non-veg",
    spiceLevel: 2,
  },
  {
    id: 3,
    name: "Vegetable Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    price: "₹250",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2940&auto=format&fit=crop",
    category: "starters",
    type: "veg",
    spiceLevel: 1,
  },
  {
    id: 4,
    name: "Tandoori Prawns",
    description: "Jumbo prawns marinated in yogurt and spices, cooked in tandoor",
    price: "₹650",
    image: "https://images.unsplash.com/photo-1626508035297-0dbc8459dce3?q=80&w=2787&auto=format&fit=crop",
    category: "starters",
    type: "non-veg",
    spiceLevel: 2,
    chefRecommended: true,
  },
  
  // Mains
  {
    id: 5,
    name: "Butter Chicken",
    description: "Tender chicken in a rich buttery tomato sauce with aromatic spices",
    price: "₹450",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2940&auto=format&fit=crop",
    category: "mains",
    type: "non-veg",
    spiceLevel: 2,
    bestseller: true,
    chefRecommended: true,
  },
  {
    id: 6,
    name: "Paneer Tikka Masala",
    description: "Grilled cottage cheese cubes in a spiced tomato gravy",
    price: "₹380",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=3271&auto=format&fit=crop",
    category: "mains",
    type: "veg",
    spiceLevel: 2,
  },
  {
    id: 7,
    name: "Lamb Biryani",
    description: "Fragrant basmati rice cooked with tender lamb and signature spices",
    price: "₹520",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2874&auto=format&fit=crop",
    category: "mains",
    type: "non-veg",
    spiceLevel: 3,
  },
  {
    id: 8,
    name: "Dal Makhani",
    description: "Creamy black lentils simmered overnight with butter and spices",
    price: "₹320",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=2940&auto=format&fit=crop",
    category: "mains",
    type: "veg",
    spiceLevel: 1,
    chefRecommended: true,
  },
  {
    id: 9,
    name: "Prawn Curry",
    description: "Succulent prawns cooked in a coconut-based curry with coastal spices",
    price: "₹580",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?q=80&w=2636&auto=format&fit=crop",
    category: "mains",
    type: "non-veg",
    spiceLevel: 3,
  },
  
  // Desserts
  {
    id: 10,
    name: "Gulab Jamun",
    description: "Soft khoya dumplings soaked in rose-flavored sugar syrup",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1602341128381-35d3313c5b82?q=80&w=2833&auto=format&fit=crop",
    category: "desserts",
    type: "veg",
  },
  {
    id: 11,
    name: "Rasmalai",
    description: "Soft cottage cheese patties soaked in sweetened, thickened milk",
    price: "₹250",
    image: "https://images.unsplash.com/photo-1594331474268-e5b23c1ddf12?q=80&w=3087&auto=format&fit=crop",
    category: "desserts",
    type: "veg",
    bestseller: true,
  },
  
  // Sides
  {
    id: 12,
    name: "Garlic Naan",
    description: "Soft leavened bread with garlic, baked in tandoor",
    price: "₹80",
    image: "https://images.unsplash.com/photo-1601050690717-94e4968ba6e0?q=80&w=2946&auto=format&fit=crop",
    category: "sides",
    type: "veg",
  },
  {
    id: 13,
    name: "Jeera Rice",
    description: "Basmati rice tempered with cumin seeds",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1596426367836-7c0bfd2191c4?q=80&w=2940&auto=format&fit=crop",
    category: "sides",
    type: "veg",
  },
  
  // Beverages
  {
    id: 14,
    name: "Mango Lassi",
    description: "Refreshing yogurt drink blended with sweet mangoes",
    price: "₹150",
    image: "https://images.unsplash.com/photo-1553787499-6f9133242796?q=80&w=2787&auto=format&fit=crop",
    category: "beverages",
    type: "veg",
  },
  {
    id: 15,
    name: "Masala Chai",
    description: "Traditional Indian spiced tea with milk",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=2940&auto=format&fit=crop",
    category: "beverages",
    type: "veg",
  },
];

const MenuPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [headerRef, isHeaderVisible] = useIsVisible<HTMLDivElement>();

  // Filtering state
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeDietaryType, setActiveDietaryType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter dishes based on active filters and search
  const filteredDishes = menu.filter((dish) => {
    // Filter by search query
    if (
      searchQuery &&
      !dish.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !dish.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Filter by category
    if (activeCategory !== "all" && dish.category !== activeCategory) {
      return false;
    }

    // Filter by dietary type
    if (activeDietaryType !== "all" && dish.type !== activeDietaryType) {
      return false;
    }

    return true;
  });

  const categories = [
    { id: "all", name: "All" },
    { id: "starters", name: "Starters" },
    { id: "mains", name: "Main Course" },
    { id: "desserts", name: "Desserts" },
    { id: "sides", name: "Sides" },
    { id: "beverages", name: "Beverages" },
  ];

  const dietaryTypes = [
    { id: "all", name: "All" },
    { id: "veg", name: "Vegetarian" },
    { id: "non-veg", name: "Non-Vegetarian" },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop")' }}
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
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl"
          >
            Explore our culinary creations crafted with passion and precision
          </motion.p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20">
        <div 
          ref={headerRef}
          className="taj-container"
        >
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8"
            >
              <h2 className="section-title mb-0">Discover Our Dishes</h2>
              
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
                <Input
                  placeholder="Search our menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full md:w-[300px]"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col md:flex-row gap-6"
            >
              <div>
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Filter className="h-4 w-4" /> Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={cn(
                        "px-4 py-1.5 text-sm rounded-full transition-colors",
                        activeCategory === category.id
                          ? "bg-gold text-white"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Filter className="h-4 w-4" /> Dietary Preference
                </h3>
                <div className="flex flex-wrap gap-2">
                  {dietaryTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setActiveDietaryType(type.id)}
                      className={cn(
                        "px-4 py-1.5 text-sm rounded-full transition-colors",
                        activeDietaryType === type.id
                          ? "bg-gold text-white"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      )}
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDishes.map((dish, index) => (
                <motion.div
                  key={dish.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md group"
                >
                  <div className="relative h-56 image-overlay">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white text-neutral-800 text-xs py-1 px-2 rounded-full">
                      {dish.type === "veg" ? "Vegetarian" : "Non-Vegetarian"}
                    </div>
                    {dish.chefRecommended && (
                      <div className="absolute top-3 right-3 bg-gold text-white text-xs py-1 px-2 rounded-full">
                        Chef's Choice
                      </div>
                    )}
                    {dish.bestseller && (
                      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs py-1 px-2 rounded-full">
                        Bestseller
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl group-hover:text-gold transition-colors">{dish.name}</h3>
                      <span className="text-gold font-medium">{dish.price}</span>
                    </div>
                    <p className="text-neutral-600 text-sm mb-4">{dish.description}</p>
                    {dish.spiceLevel && (
                      <div className="flex items-center gap-1 mb-4">
                        <span className="text-xs text-neutral-500">Spice Level:</span>
                        <div className="flex">
                          {[...Array(3)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-3 h-3 rounded-full mr-1 ${
                                i < dish.spiceLevel! ? 'bg-red-500' : 'bg-neutral-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    <Button variant="outline" size="sm" className="w-full">
                      Order Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-serif mb-4">No dishes found</h3>
              <p className="text-neutral-600 mb-8">Try adjusting your filters or search query.</p>
              <Button
                onClick={() => {
                  setActiveCategory("all");
                  setActiveDietaryType("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="taj-container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">Ready to Experience Our Culinary Delights?</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-10">
            Join us for lunch or dinner and indulge in our chef's special creations. Book your table now for an unforgettable dining experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/reservation" size="lg">
              Reserve a Table
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
