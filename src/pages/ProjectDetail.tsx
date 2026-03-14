import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>

      <Navbar />

      {/* HERO */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">

          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-white/80 mb-6 border p-2 rounded hover:bg-white/20 transition-colors duration-300 font-medium"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <h1 className="text-5xl text-white font-semibold mb-3 font-poppins">
            {project.title}
          </h1>

          <div className="flex gap-3 text-white/80 text-sm font-poppins">
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

        </div>

      </section>


      {/* OVERVIEW */}
      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6 space-y-14">

          <div>
            <h2 className="text-3xl font-poppins font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground font-sans">
              {project.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h3 className="text-xl font-poppins font-semibold mb-3">
                The Challenge
              </h3>
              <p className="text-muted-foreground font-sans">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">
                Our Solution
              </h3>
              <p className="text-muted-foreground font-sans">
                {project.solution}
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* PROJECT STORY */}
      <section className="py-28 bg-muted/30">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-poppins font-semibold text-center mb-20">
            Project Story
          </h2>

          <div className="space-y-28">

            {project.gallery.map((item, index) => {

              const reverse = index % 2 !== 0;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-16 ${
                    reverse ? "lg:flex-row-reverse" : ""
                  }`}
                >

                  {/* IMAGE */}
                  <div className="lg:w-1/2 w-full">

                    <motion.img
                      src={item.image}
                      alt={item.title}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="w-full object-contain h-[270px] rounded-xl shadow-lg"
                    />

                  </div>


                  {/* TEXT */}
                  <div className="lg:w-1/2 w-full">

                    <h3 className="text-2xl font-semibold font-poppins mb-5">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                      {item.description}
                    </p>

                    <button className="border font-poppins border-primary text-primary px-6 py-2 mt-8 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-medium">
                      Book a Consultation
                    </button>

                  </div>

                </motion.div>

              );
            })}

          </div>

        </div>

      </section>


      {/* IMPACT */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-semibold mb-14 font-poppins">
            Project Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-5xl font-semibold text-primary font-sans">+120%</h3>
              <p className="text-muted-foreground font-sans">
                Faster Performance
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-semibold text-primary font-sans">3x</h3>
              <p className="text-muted-foreground font-sans">
                Higher Engagement
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-semibold text-primary font-sans">95%</h3>
              <p className="text-muted-foreground font-sans">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

      </section>


      <Footer />
      <WhatsAppButton />

    </main>
  );
};

export default ProjectDetail;