import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Web Application Development",
    desc: "Custom, scalable web applications built with modern technologies to power your business operations and digital products.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Marketing Automation",
    desc: "Automate lead generation, email campaigns, customer engagement, and marketing workflows using intelligent AI systems.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Custom Software Solutions",
    desc: "Tailored software systems designed to streamline operations, improve efficiency, and solve complex business challenges.",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Startup MVP Development",
    desc: "Turn your startup idea into a functional MVP quickly so you can validate, launch, and attract investors faster.",
    color: "from-teal-500 to-emerald-600",
  },
  {
    title: "Business Process Automation",
    desc: "Eliminate repetitive manual work by automating workflows, integrations, and internal systems with smart technology.",
    color: "from-green-500 to-lime-600",
  },
  {
    title: "Digital Growth Solutions",
    desc: "Technology-driven strategies and tools that help startups and small businesses scale faster in the digital world.",
    color: "from-pink-500 to-rose-600",
  },
];

const ServicesCarousel = () => {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactionTimeout = useRef(null);

  const slideWidth = 350 + 32;
  const continuousDuration = 20;

  const startContinuous = (dir = 1) => {
    controls.start({
      x: dir === 1 ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        duration: continuousDuration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startContinuous();
  }, []);

  const handleArrowClick = (dir) => {
    controls.stop();
    setIsInteracting(true);

    setCurrentIndex((prev) => {
      const nextIndex = (prev + dir + services.length) % services.length;

      controls.start({
        x: -nextIndex * slideWidth,
        transition: { type: "spring", stiffness: 120, damping: 20 },
      });

      return nextIndex;
    });

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
        <span className="text-blue-300 uppercase tracking-[0.3em] text-sm font-medium">
          Our Services
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white">
          Smart Technology Solutions For Growing Businesses
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
          <motion.div animate={controls} className="flex w-[200%]">
            {[...services, ...services].map((service, i) => (
              <div
                key={i}
                className="min-w-[350px] p-10 rounded-3xl border border-white/10 backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/10 shadow-xl flex flex-col justify-between mr-8"
              >
                <div
                  className={`h-1 w-full mb-6 rounded-full bg-gradient-to-r ${service.color}`}
                />

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>
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

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[140px]" />
    </section>
  );
};

export default ServicesCarousel;