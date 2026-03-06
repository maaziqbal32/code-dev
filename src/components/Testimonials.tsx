import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "AMZY Studio transformed our vision into a home that exceeds everything we imagined. Their attention to detail and creative problem-solving made the entire process seamless.",
    name: "Sarah & Michael Chen",
    project: "Residential — Villa Serenity",
  },
  {
    quote: "Working with AMZY was a game-changer for our commercial development. They delivered a space that attracts premium tenants and has become a landmark in the district.",
    name: "James Thornton",
    project: "Commercial — Nexus Innovation Center",
  },
  {
    quote: "From the initial consultation to the final walkthrough, AMZY demonstrated an unparalleled commitment to quality. Our renovation honored the building's heritage while feeling completely modern.",
    name: "Élise Moreau",
    project: "Hospitality — The Grand Atelier Hotel",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-body font-semibold mb-5">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-10 border border-border rounded-sm hover:border-primary/20 transition-colors duration-500"
            >
              <Quote className="text-primary/20 mb-8" size={28} />
              <p className="font-body text-muted-foreground leading-[1.8] mb-10 italic font-light">
                "{t.quote}"
              </p>
              <div>
                <p className="font-body font-medium text-foreground text-sm">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide">{t.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
