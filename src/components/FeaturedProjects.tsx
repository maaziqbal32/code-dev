import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const FeaturedProjects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2rem] text-primary font-body font-semibold mb-5">
            Portfolio
          </p>

          <h2 className="font-poppins text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-2 sm:mb-7 ">
            Featured Projects
          </h2>

          <p className="font-body text-base text-muted-foreground max-w-lg font-regular leading-relaxed">
            Innovative Software Solutions & AI Automation. Building powerful
            web applications, AI marketing automation systems, and modern
            digital experiences that help startups and businesses scale faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to={`/project/${project.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden aspect-[4/3] mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 flex items-center justify-center">
                    <ArrowUpRight className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0" size={28} />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-poppins text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-poppins text-sm text-muted-foreground mt-1 font-regular">
                      {project.location}
                    </p>
                  </div>
                  <span className="font-poppins text-[10px] uppercase tracking-[0.15em] text-muted-foreground border border-border px-3 py-1.5 rounded-sm whitespace-nowrap">
                    {project.category}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
