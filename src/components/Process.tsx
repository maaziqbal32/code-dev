import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your business goals, target audience, and challenges to craft the right digital strategy.",
  },
  {
    number: "02",
    title: "Planning & UI/UX Design",
    description:
      "Our team designs intuitive user interfaces and smooth user experiences that align with your brand and customers.",
  },
  {
    number: "03",
    title: "Web Application Development",
    description:
      "We build scalable web applications using modern technologies to ensure performance, security, and reliability.",
  },
  {
    number: "04",
    title: "AI Marketing Automation",
    description:
      "We implement AI-powered marketing automation tools that help startups and small businesses generate leads and grow faster.",
  },
  {
    number: "05",
    title: "Launch & Growth Optimization",
    description:
      "After launch, we continuously optimize performance, analytics, and automation to scale your business efficiently.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      className="relative py-28 md:py-40 bg-gray-900 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-blue-300 font-semibold mb-5">
            How We Work
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-7">
            Our 5-Step Digital Process
          </h2>

          <p className="text-base text-white/60 max-w-xl mx-auto font-light leading-relaxed">
            A streamlined process that helps startups and small businesses
            launch powerful web applications and scale faster using AI-driven
            marketing automation.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group flex flex-col items-center text-center hover:scale-105 transition-transform duration-500"
              >
                {/* Step Number */}
                <div className="text-6xl font-bold text-white/10 mb-6 pointer-events-none select-none">
                  {step.number}
                </div>

                {/* Card */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 w-full h-full flex flex-col justify-start shadow-xl hover:shadow-2xl transition-all">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm md:text-base text-white/70 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>

                {/* Horizontal line */}
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 right-0 w-full h-px bg-blue-500/20 translate-x-full" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex items-start gap-6"
              >
                {/* Dot */}
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-500 relative z-10" />

                  {i < steps.length - 1 && (
                    <div className="w-px h-full bg-blue-500/30 mt-0.5" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-bold text-white/20 mb-4 select-none">
                    {step.number}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;