import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, User } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-magenta/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-magenta to-accent bg-clip-text text-transparent">
            Let's Build Something
            <br />
            Extraordinary
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glassmorphism p-8 md:p-12 rounded-3xl relative group"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-magenta/10 to-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-12 h-14 bg-secondary/50 border-primary/20 focus:border-primary focus:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-12 h-14 bg-secondary/50 border-primary/20 focus:border-primary focus:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
              <Textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="pl-12 pt-4 bg-secondary/50 border-primary/20 focus:border-primary focus:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-primary hover:shadow-[0_0_40px_rgba(14,165,233,0.6)] transition-all duration-300 text-lg h-14 border-0 relative overflow-hidden group"
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-magenta to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
