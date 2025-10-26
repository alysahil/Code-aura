import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-primary/10">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.h3 
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              CodeAura
            </motion.h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Crafting the future of digital experiences through innovative design and cutting-edge technology.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Design", "UI/UX", "Branding", "SEO"].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 text-center text-muted-foreground">
          <p>© {currentYear} CodeAura — Digital Futures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
