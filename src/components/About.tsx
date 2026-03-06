import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 md:py-40 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-body font-semibold mb-5">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10 leading-tight">
              Architecture That
              <br />
              <span className="italic font-normal">Inspires</span>
            </h2>
            <div className="space-y-6 font-body text-muted-foreground leading-[1.8] font-light">
              <p>
                Founded over a decade ago, AMZY Studio has grown from a bold vision into one of the most respected architecture practices in the industry. We believe that great architecture is not just about buildings — it's about creating experiences that elevate everyday life.
              </p>
              <p>
                Our multidisciplinary team of architects, designers, and engineers brings a collaborative approach to every project. We listen deeply to our clients, understand their aspirations, and translate them into spaces that are both beautiful and functional.
              </p>
              <p>
                From private residences to landmark cultural centers, every project receives the same unwavering commitment to design excellence, sustainability, and attention to detail.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {[
              {
                title: "Our Philosophy",
                text: "We design with purpose. Every line, material, and space serves the people who inhabit it. Our work balances innovation with timelessness, creating architecture that endures.",
              },
              {
                title: "Our Approach",
                text: "We believe the best results come from close collaboration. Our process is transparent, iterative, and deeply personal — ensuring your vision is at the heart of every decision.",
              },
              {
                title: "Our Commitment",
                text: "Sustainability is not an afterthought — it's embedded in our design DNA. We create spaces that are responsible, efficient, and in harmony with their environment.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-primary pl-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="font-body text-muted-foreground leading-[1.8] font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
