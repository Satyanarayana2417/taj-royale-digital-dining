
import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import Testimonials from "@/components/home/Testimonials";
import Button from "@/components/ui/Button";
import { useIsVisible } from "@/hooks/useIsVisible";
import { MapPin, Clock, Phone } from "lucide-react";

const Index = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [aboutRef, isAboutVisible] = useIsVisible<HTMLDivElement>();
  const [locationRef, isLocationVisible] = useIsVisible<HTMLDivElement>();

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-20">
        <div 
          ref={aboutRef}
          className="taj-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isAboutVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold uppercase tracking-wider text-sm font-medium">Our Story</span>
            <h2 className="section-title mt-2">Experience The Finest Indian Cuisine</h2>
            <p className="text-neutral-600 mt-6">
              At Taj Royale, we are passionate about bringing the authentic flavors of India to your table. Our culinary team, led by award-winning Chef Rajesh Singh, combines traditional recipes with modern techniques to create an unforgettable dining experience.
            </p>
            <p className="text-neutral-600 mt-4">
              Every dish is prepared with the freshest ingredients, aromatic spices, and a deep respect for culinary traditions that span generations.
            </p>
            <div className="mt-8">
              <Button to="/about" size="lg">
                Our Story
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isAboutVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="image-overlay rounded-lg overflow-hidden h-[200px] md:h-[240px]">
              <img 
                src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=2940&auto=format&fit=crop" 
                alt="Taj Royale interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="image-overlay rounded-lg overflow-hidden h-[200px] md:h-[240px] mt-8">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2944&auto=format&fit=crop" 
                alt="Chef preparing food" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="image-overlay rounded-lg overflow-hidden h-[200px] md:h-[240px]">
              <img 
                src="https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=2880&auto=format&fit=crop" 
                alt="Authentic spices" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="image-overlay rounded-lg overflow-hidden h-[200px] md:h-[240px] -mt-8">
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2946&auto=format&fit=crop" 
                alt="Elegant table setting" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <FeaturedDishes />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Location & Hours Section */}
      <section className="py-20">
        <div 
          ref={locationRef}
          className="taj-container"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLocationVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title centered mx-auto">Visit Us</h2>
            <p className="mt-6 text-neutral-600 max-w-3xl mx-auto">
              We're conveniently located in the heart of the city. Come experience the elegant ambiance and exceptional cuisine of Taj Royale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLocationVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gold/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl">Location</h3>
              </div>
              <p className="text-neutral-600">
                123 Luxury Lane, Fine Dining District<br />
                Mumbai, India
              </p>
              <div className="mt-4">
                <Button variant="ghost" size="sm" href="https://maps.google.com" className="text-gold hover:text-gold-dark">
                  Get Directions
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLocationVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gold/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl">Hours</h3>
              </div>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>12:00 - 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>12:00 - 23:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 - 21:00</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLocationVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gold/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl">Contact</h3>
              </div>
              <p className="text-neutral-600 mb-2">
                For reservations or inquiries:
              </p>
              <p className="text-neutral-800 font-medium">
                +91 (987) 654-3210
              </p>
              <p className="text-neutral-800 font-medium mt-1">
                info@tajroyale.com
              </p>
              <div className="mt-4">
                <Button to="/contact" variant="ghost" size="sm" className="text-gold hover:text-gold-dark">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="mt-12">
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.88118615!3d19.08205885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1654862856394!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Taj Royale location map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="taj-container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">Experience The Royal Treatment</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-10">
            Join us for an unforgettable dining experience at Taj Royale. Book your table today and indulge in the finest Indian cuisine.
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

export default Index;
