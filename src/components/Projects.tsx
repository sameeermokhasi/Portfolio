import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Github, Brain, ShoppingCart, Car, Eye } from "lucide-react";

const projects = [
  {
    title: "Customer Prediction App",
    description: "A machine learning application that predicts customer behavior and purchasing patterns using advanced ML algorithms and data analysis techniques.",
    tech: ["Python", "Scikit-learn", "Pandas", "Flask", "React"],
    icon: Brain,
    gradient: "from-primary to-secondary",
    liveUrl: "#",
    githubUrl: "https://github.com/sameeermokhasi/customer-prediction-app.git",
  },
  {
    title: "Amazon Sale Challenge",
    description: "Competition project analyzing Amazon sales data to predict trends and optimize pricing strategies using ensemble machine learning methods.",
    tech: ["Python", "XGBoost", "NumPy", "Matplotlib", "Jupyter"],
    icon: ShoppingCart,
    gradient: "from-secondary to-accent",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "VOYAGO",
    description: "A comprehensive ride-hailing and vacation booking platform featuring real-time driver tracking, secure payments, and interactive maps.",
    tech: ["React", "FastAPI", "PostgreSQL", "Tailwind", "Leaflet"],
    icon: Car,
    gradient: "from-accent to-primary",
    liveUrl: "#",
    githubUrl: "https://github.com/sameeermokhasi/VOYAGO.git",
  },
  {
    title: "Visual Prediction System",
    description: "Computer vision AI system for real-time object detection, image classification, and visual analytics using deep learning models.",
    tech: ["Python", "TensorFlow", "OpenCV", "FastAPI", "Docker"],
    icon: Eye,
    gradient: "from-primary to-accent",
    liveUrl: "#",
    githubUrl: "https://github.com/sameeermokhasi/visual-prediction-system.git",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in machine learning, full-stack development, and AI systems.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass rounded-2xl overflow-hidden group glass-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              {/* Project header with gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-14 h-14 rounded-xl bg-background/20 backdrop-blur flex items-center justify-center">
                    <project.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-foreground/10" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-foreground/10" />
              </div>

              {/* Project content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="heroOutline" size="sm" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="ghost" size="sm" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
