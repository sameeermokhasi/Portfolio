import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";
import { Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Profile Picture */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <img
              src="/profile-pic.png"
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl glass"
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-muted-foreground text-lg md:text-xl mb-4 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {"<Hello World />"}
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="text-foreground">I'm </span>
            <span className="gradient-text text-glow">Developer</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-20 md:h-16 flex justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <Typewriter
              options={{
                strings: [
                  "AI & Full Stack Developer",
                  "Machine Learning Enthusiast",
                  "Cybersecurity & Networks",
                  "Content Creator & Video Editor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 50,
                wrapperClassName: "font-mono",
                cursorClassName: "text-primary",
              }}
            />
          </motion.div>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-10 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Crafting intelligent solutions at the intersection of AI, web development, and creative content.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <Button
              variant="heroOutline"
              size="xl"
              onClick={scrollToContact}
              className="group"
            >
              <Mail className="mr-2 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
