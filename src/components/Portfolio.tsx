import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  {
    image: portfolio1,
    title: "Luxury E-Commerce",
    category: "Web Design",
  },
  {
    image: portfolio2,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
  },
  {
    image: portfolio3,
    title: "Creative Portfolio",
    category: "Branding",
  },
  {
    image: portfolio4,
    title: "Mobile App",
    category: "Mobile Design",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-magenta/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-magenta via-primary to-accent bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of cutting-edge digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-8"
                initial={{ y: 20, opacity: 0 }}
                animate={
                  hoveredIndex === index
                    ? { y: 0, opacity: 1 }
                    : { y: 20, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
              >
                <div className="glassmorphism p-6 rounded-xl">
                  <p className="text-primary text-sm font-semibold mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                </div>
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(14,165,233,0.4)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
