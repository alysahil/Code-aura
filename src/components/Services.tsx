import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Layout, Sparkles, Search, FileCode, Video } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Web Design",
    description: "Stunning, user-centric designs that captivate and convert.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive interfaces that users love to interact with.",
    gradient: "from-accent to-magenta",
  },
  {
    icon: Sparkles,
    title: "Branding",
    description: "Bold identities that make your brand unforgettable.",
    gradient: "from-magenta to-primary",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Strategic optimization to dominate search rankings.",
    gradient: "from-primary to-magenta",
  },
  {
    icon: FileCode,
    title: "Landing Pages",
    description: "High-converting pages designed to drive results.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Cinematic video content that tells your brand's story.",
    gradient: "from-magenta to-accent",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-magenta bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital solutions tailored to elevate your brand
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glassmorphism p-8 rounded-2xl h-full hover:shadow-[0_0_50px_rgba(14,165,233,0.3)] transition-all duration-500 relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-glow-primary transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
