import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "CodeAura transformed our vision into a stunning digital reality. The attention to detail and innovative approach exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, Creative Co",
    content: "Working with CodeAura was seamless. They delivered a website that's not just beautiful, but drives real results for our business.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Marketing Director, BrandWave",
    content: "The team's expertise in modern design and UX is unmatched. Our new site has dramatically improved engagement and conversions.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-magenta bg-clip-text text-transparent">
            Client Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from our satisfied clients
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glassmorphism p-12 rounded-3xl relative"
          >
            {/* Quote Mark */}
            <div className="absolute top-8 left-8 text-primary/20 text-8xl font-bold leading-none">
              "
            </div>

            {/* Stars */}
            <div className="flex gap-2 mb-6 justify-center">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed relative z-10">
              {testimonials[currentIndex].content}
            </p>

            {/* Author */}
            <div className="text-center">
              <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="glassmorphism hover:bg-white/10 border-primary/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="glassmorphism hover:bg-white/10 border-primary/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
