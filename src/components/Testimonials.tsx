import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The team built our web application exactly how we imagined it. The performance, UI, and scalability are outstanding. It helped us launch our startup much faster.",
    name: "Ali Hassan",
    project: "Startup Founder — SaaS Web Platform",
  },
  {
    quote:
      "Their AI marketing automation completely changed how we generate leads. We now have automated campaigns running 24/7 and our customer acquisition has doubled.",
    name: "Emily Carter",
    project: "Marketing Director — E-commerce Brand",
  },
  {
    quote:
      "From strategy to development, everything was handled professionally. Our new web application and automated marketing system helped us scale our business globally.",
    name: "Daniel Rodriguez",
    project: "CEO — Digital Services Company",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-5">
            Client Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            What Our Clients Say
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto mt-6">
            Startups and small businesses trust us to build powerful web
            applications and implement AI-driven marketing automation that
            drives real growth.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-10 border border-border rounded-lg hover:border-primary/30 hover:shadow-xl transition-all duration-500"
            >
              <Quote className="text-primary/20 mb-8" size={28} />

              <p className="text-muted-foreground leading-[1.8] mb-10 italic font-light">
                "{t.quote}"
              </p>

              <div>
                <p className="font-medium text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">
                  {t.project}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;