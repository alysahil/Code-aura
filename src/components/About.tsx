import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import hologram from "@/assets/hologram.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About CodeAura
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              We blend art, strategy, and technology to create brands that shine in the digital space.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of visionary designers and developers push the boundaries of what's possible on the web, 
              crafting experiences that are not just beautiful, but transformative.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-magenta mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Holographic Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative z-10"
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear" 
              }}
            >
              <img 
                src={hologram} 
                alt="Holographic 3D Shape" 
                className="w-full h-auto animate-float drop-shadow-[0_0_50px_rgba(14,165,233,0.5)]"
              />
            </motion.div>
            
            {/* Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-magenta/20 blur-3xl animate-glow-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
