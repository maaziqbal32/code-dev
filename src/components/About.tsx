import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 md:py-40 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-5">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10 leading-tight">
              Building Smart
              <br />
              <span className="italic font-normal">Digital Solutions</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-[1.8] font-light">
              <p>
                We are a modern software development company focused on building
                powerful web applications and intelligent AI marketing
                automation solutions. Our goal is simple — help startups and
                small businesses grow faster through smart technology.
              </p>

              <p>
                Our team combines expertise in software engineering, automation,
                and modern web technologies to deliver scalable and efficient
                digital products. We work closely with businesses to understand
                their challenges and turn ideas into real-world solutions.
              </p>

              <p>
                From custom web platforms to AI-powered marketing automation,
                every project we build is designed to improve efficiency,
                increase customer engagement, and support long-term business
                growth.
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {[
              {
                title: "Our Vision",
                text: "To empower startups and growing businesses with intelligent digital solutions that simplify operations, automate marketing, and unlock new growth opportunities.",
              },
              {
                title: "Our Approach",
                text: "We follow a collaborative and transparent development process. By understanding your business goals, we design and build web applications and AI tools that solve real problems.",
              },
              {
                title: "Our Commitment",
                text: "We are committed to delivering reliable, scalable, and high-performance solutions. Every product we build focuses on quality, innovation, and long-term success for our clients.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-primary pl-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-[1.8] font-light">
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