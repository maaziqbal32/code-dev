import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { title: "Architectural Design", desc: "Innovative and timeless architectural concepts tailored to your vision.", color: "from-blue-500 to-blue-700" },
  { title: "3D Modeling & Visualization", desc: "Photorealistic 3D renders that bring your project to life before construction.", color: "from-indigo-500 to-indigo-700" },
  { title: "Interior Architecture", desc: "Luxury interior spaces designed with elegance, function, and comfort.", color: "from-purple-500 to-purple-700" },
  { title: "Urban Planning", desc: "Strategic planning and design for modern, sustainable communities.", color: "from-teal-500 to-teal-700" },
  { title: "Landscape Design", desc: "Seamless integration of nature and architecture for premium outdoor spaces.", color: "from-green-500 to-green-700" },
  { title: "Concept Development", desc: "Transforming ideas into strong architectural concepts and design direction.", color: "from-pink-500 to-pink-700" },
];

const ServicesCarousel = () => {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactionTimeout = useRef<NodeJS.Timeout | null>(null);

  const slideWidth = 350 + 32; // slide width + gap in px
  const continuousDuration = 20; // seconds for full loop

  // Start continuous loop
  const startContinuous = (dir: 1 | -1 = 1) => {
    controls.start({
      x: dir === 1 ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: { duration: continuousDuration, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    startContinuous(); // initial continuous scroll
  }, []);

  const handleArrowClick = (dir: 1 | -1) => {
    // stop continuous while interacting
    controls.stop();
    setIsInteracting(true);

    // move step by step
    setCurrentIndex(prev => {
      const nextIndex = (prev + dir + services.length) % services.length;
      controls.start({
        x: -nextIndex * slideWidth,
        transition: { type: "spring", stiffness: 120, damping: 20 },
      });
      return nextIndex;
    });

    // resume continuous after 3s of no interaction
    if (interactionTimeout.current) clearTimeout(interactionTimeout.current);
    interactionTimeout.current = setTimeout(() => {
      setIsInteracting(false);
      startContinuous(dir);
    }, 3000);
  };

  return (
    <section className="relative py-28 bg-gray-900 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20">
        <span className="text-blue-300 uppercase tracking-[0.3em] text-sm font-medium">Our Services</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white">
          Crafting Architecture That Defines Luxury
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-0 flex items-center justify-center">
        {/* Prev Arrow */}
        <button
          onClick={() => handleArrowClick(-1)}
          className="absolute left-0 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ChevronLeft className="text-white" size={28} />
        </button>

        {/* Slides */}
        <div className="overflow-hidden w-full">
          <motion.div
            animate={controls}
            className="flex w-[200%]"
          >
            {[...services, ...services].map((service, i) => (
              <div
                key={i}
                className="min-w-[350px] p-10 rounded-3xl border border-white/10 backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/10 shadow-xl flex flex-col justify-between mr-8"
              >
                <div className={`h-1 w-full mb-6 rounded-full bg-gradient-to-r ${service.color}`} />
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-200 leading-relaxed text-sm md:text-base">{service.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Next Arrow */}
        <button
          onClick={() => handleArrowClick(1)}
          className="absolute right-0 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ChevronRight className="text-white" size={28} />
        </button>
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[140px]" />
    </section>
  );
};

export default ServicesCarousel;