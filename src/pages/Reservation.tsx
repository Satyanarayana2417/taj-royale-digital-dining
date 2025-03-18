
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "@/hooks/useIsVisible";
import ReservationForm from "@/components/ui/ReservationForm";

const Reservation = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [contentRef, isContentVisible] = useIsVisible<HTMLDivElement>();

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop")' }}
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
            Reservations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl"
          >
            Book your table and experience fine dining at Taj Royale
          </motion.p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-20">
        <div 
          ref={contentRef}
          className="taj-container"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isContentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Make a Reservation</h2>
              <p className="text-neutral-600 mt-6 mb-8">
                Reserve your table at Taj Royale for an unforgettable dining experience. Whether it's a special occasion or simply a night out, we look forward to hosting you.
              </p>
              
              <div className="bg-neutral-50 p-6 rounded-lg mb-8">
                <h3 className="font-serif text-xl mb-4">Reservation Guidelines</h3>
                <ul className="text-neutral-600 space-y-2">
                  <li>• Reservations can be made up to 30 days in advance</li>
                  <li>• For parties of 8 or more, please contact us directly</li>
                  <li>• A credit card is required for parties of 6 or more</li>
                  <li>• We hold reservations for 15 minutes past the reservation time</li>
                  <li>• For cancellations, please notify us at least 24 hours in advance</li>
                </ul>
              </div>
              
              <div className="bg-gold/10 p-6 rounded-lg">
                <h3 className="font-serif text-xl mb-4">Private Dining & Events</h3>
                <p className="text-neutral-600 mb-4">
                  Planning a special celebration or corporate event? Our private dining room is perfect for intimate gatherings and special occasions.
                </p>
                <p className="text-neutral-800 font-medium">
                  For private dining inquiries, please contact us at:<br />
                  <a href="mailto:events@tajroyale.com" className="text-gold hover:underline">events@tajroyale.com</a> or <a href="tel:+919876543210" className="text-gold hover:underline">+91 (987) 654-3210</a>
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isContentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <ReservationForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Restaurant Hours & Info Section */}
      <section className="py-20 bg-neutral-50">
        <div className="taj-container">
          <h2 className="section-title text-center centered mb-16">Restaurant Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-4">Hours of Operation</h3>
              <ul className="space-y-3 text-neutral-600">
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
              <p className="mt-4 text-sm text-neutral-500">
                Last seating is 1 hour before closing time
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-4">Location</h3>
              <p className="text-neutral-600 mb-4">
                123 Luxury Lane<br />
                Fine Dining District<br />
                Mumbai, India
              </p>
              <p className="text-neutral-600">
                <span className="font-medium">Parking:</span> Complimentary valet parking available
              </p>
              <p className="text-neutral-600">
                <span className="font-medium">Public Transit:</span> 5-minute walk from Downtown Metro Station
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-4">Additional Information</h3>
              <ul className="space-y-3 text-neutral-600">
                <li>• Smart casual dress code</li>
                <li>• Wheelchair accessible</li>
                <li>• We cater to dietary restrictions (please inform us when booking)</li>
                <li>• Children's menu available</li>
                <li>• Free Wi-Fi</li>
                <li>• Payment: All major credit cards accepted</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reservation;
