import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Shield, Video } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI & ML",
    description: "Machine Learning projects and AI-driven solutions",
  },
  {
    icon: Code2,
    title: "Full Stack",
    description: "End-to-end web development expertise",
  },
  {
    icon: Shield,
    title: "PROBLEM SOLVING",
    description: "Proficient in C/C++, Python",
  },
  {
    icon: Video,
    title: "Content Creation",
    description: "Video editing and fitness content",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl glass-hover">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a <span className="text-primary font-semibold">Computer Science (Business Studies)</span> undergraduate at{" "}
                <span className="text-secondary font-semibold">BMSCE</span> with a strong interest in{" "}
                <span className="text-accent font-semibold">Artificial Intelligence</span> and problem-solving.
                I am passionate about leveraging technology to design smarter solutions and enjoy learning by experimenting with new ideas.
                Alongside my technical journey, I am also a content creator, where I independently produce and edit videos.
                This blend of technical expertise and creative expression helps me continuously grow, innovate, and communicate ideas effectively.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "4+", label: "Months Experience" },
                { number: "10+", label: "Projects Done" },
                { number: "5+", label: "Tech Stacks" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass p-4 rounded-xl text-center glass-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass p-6 rounded-2xl glass-hover group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
