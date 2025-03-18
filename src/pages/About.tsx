
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "@/hooks/useIsVisible";
import Button from "@/components/ui/Button";
import { Award, Clock, Users, Utensils } from "lucide-react";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [introRef, isIntroVisible] = useIsVisible<HTMLDivElement>();
  const [valuesRef, isValuesVisible] = useIsVisible<HTMLDivElement>();
  const [teamRef, isTeamVisible] = useIsVisible<HTMLDivElement>();

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523294587484-bae6cc870010?q=80&w=2864&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl"
          >
            A journey of passion, tradition, and culinary excellence
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div 
          ref={introRef}
          className="taj-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isIntroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">The Beginning of Taj Royale</h2>
            <p className="text-neutral-600 mt-6">
              Taj Royale began in 2005 with a simple vision: to create a dining experience that celebrates the rich culinary heritage of India while embracing modern sophistication and innovation.
            </p>
            <p className="text-neutral-600 mt-4">
              Founded by Vikram Patel, a third-generation restaurateur with a passion for authentic flavors, Taj Royale quickly established itself as a premier destination for fine Indian dining in Mumbai.
            </p>
            <p className="text-neutral-600 mt-4">
              What started as a small family restaurant has evolved into an acclaimed culinary institution, known for its exceptional service, elegant ambiance, and masterfully crafted dishes that pay homage to India's diverse regional cuisines.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isIntroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="image-overlay rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2940&auto=format&fit=crop" 
              alt="Taj Royale restaurant interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-neutral-50">
        <div 
          ref={valuesRef}
          className="taj-container"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title centered mx-auto">Our Values</h2>
            <p className="mt-6 text-neutral-600 max-w-3xl mx-auto">
              At Taj Royale, our commitment to excellence extends beyond our kitchen. These core values guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Utensils className="h-10 w-10 text-gold" />,
                title: "Culinary Excellence",
                description: "We are dedicated to creating exceptional dishes that delight the senses and honor authentic techniques."
              },
              {
                icon: <Users className="h-10 w-10 text-gold" />,
                title: "Warm Hospitality",
                description: "We believe in treating every guest like family, offering attentive service that anticipates your needs."
              },
              {
                icon: <Award className="h-10 w-10 text-gold" />,
                title: "Uncompromising Quality",
                description: "From ingredients to ambiance, we maintain the highest standards in every aspect of your dining experience."
              },
              {
                icon: <Clock className="h-10 w-10 text-gold" />,
                title: "Respect for Tradition",
                description: "We honor culinary heritage while embracing innovation, creating a perfect balance of classic and contemporary."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl mb-4">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div 
          ref={teamRef}
          className="taj-container"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title centered mx-auto">Meet Our Team</h2>
            <p className="mt-6 text-neutral-600 max-w-3xl mx-auto">
              The heart and soul of Taj Royale is our dedicated team of culinary artists and hospitality professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Singh",
                position: "Executive Chef",
                bio: "With over 20 years of experience in luxury hotels across India and Europe, Chef Rajesh brings his expertise and passion for authentic flavors to every dish at Taj Royale.",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2831&auto=format&fit=crop"
              },
              {
                name: "Priya Sharma",
                position: "Restaurant Manager",
                bio: "Priya ensures that every guest receives impeccable service and an unforgettable dining experience. Her attention to detail and warm hospitality set the standard for our service team.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2922&auto=format&fit=crop"
              },
              {
                name: "Vikram Patel",
                position: "Founder",
                bio: "Vikram's vision and passion for Indian cuisine led to the creation of Taj Royale. His commitment to quality and authenticity continues to guide our culinary journey.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isTeamVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-1">{member.name}</h3>
                  <p className="text-gold mb-4">{member.position}</p>
                  <p className="text-neutral-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="taj-container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8">Experience Taj Royale</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-12">
            Step into our world of culinary excellence and elegant ambiance.
          </p>
          <div className="rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Taj Royale Restaurant Experience" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gold/10">
        <div className="taj-container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">Join Us For An Unforgettable Experience</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-10">
            We invite you to dine with us and experience the magic of Taj Royale firsthand.
          </p>
          <Button to="/reservation" size="lg">
            Reserve Your Table
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
