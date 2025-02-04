import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Compass, Mountain, Sunrise, Map } from 'lucide-react';

function ContentSection({ 
  title, 
  description, 
  image, 
  icon: Icon,
  reverse = false 
}: { 
  title: string; 
  description: string; 
  image: string;
  icon: React.ElementType;
  reverse?: boolean;
}) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);

  return (
    <div ref={sectionRef} className={`flex items-center ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-24 lg:px-8">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <motion.div 
            style={{ opacity }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <Icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Learn More
            </button>
          </motion.div>
          
          <motion.div 
            style={{ y, opacity }}
            className="w-full lg:w-11/12"
          >
            <div className="relative aspect-[6/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={image} 
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const sections = [
    {
      title: "Adventure Awaits",
      description: "Embark on an unforgettable journey through pristine wilderness. Our expert guides will lead you to hidden gems and breathtaking vistas that few have witnessed.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop",
      icon: Compass
    },
    {
      title: "Summit Success",
      description: "Challenge yourself with our carefully curated mountain expeditions. From beginner-friendly peaks to advanced alpine ascents, we have the perfect climb for every skill level.",
      image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2940&auto=format&fit=crop",
      icon: Mountain
    },
    {
      title: "Sunrise Serenity",
      description: "Experience the magic of dawn from extraordinary viewpoints. Our sunrise tours offer a peaceful start to your day with breathtaking views and tranquil moments.",
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2940&auto=format&fit=crop",
      icon: Sunrise
    },
    {
      title: "Trail Discovery",
      description: "Explore hidden paths and secret trails that showcase nature's finest offerings. Our expert-crafted routes reveal the best of local landscapes and wildlife.",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2940&auto=format&fit=crop",
      icon: Map
    }
  ];

  return (
    <div className="bg-white">
      {sections.map((section, index) => (
        <ContentSection 
          key={section.title}
          {...section}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}

export default App;