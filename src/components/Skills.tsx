import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Bot,
  BrainCircuit,
  Sparkles,
  Network,
  ChartBar,
  Globe,
  Code2,
  Clapperboard,
  Palette,
  Users
} from "lucide-react";

const skills = [
  {
    name: "Python",
    iconType: "devicon",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "C/C++",
    iconType: "devicon",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  },
  {
    name: "Java",
    iconType: "devicon",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    name: "JavaScript",
    iconType: "devicon",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "Leadership",
    iconType: "lucide",
    icon: Users,
    color: "text-orange-500"
  },
  {
    name: "React & Frontend",
    iconType: "devicon",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Node.js & Backend",
    iconType: "devicon",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Machine Learning",
    iconType: "lucide",
    icon: BrainCircuit,
    color: "text-purple-500"
  },
  {
    name: "Artificial Intelligence",
    iconType: "lucide",
    icon: Bot,
    color: "text-cyan-500"
  },
  {
    name: "GenAI Proficient",
    iconType: "lucide",
    icon: Sparkles,
    color: "text-yellow-400"
  },
  {
    name: "Deep Learning",
    iconType: "lucide",
    icon: Network,
    color: "text-indigo-400"
  },
  {
    name: "SQL & Databases",
    iconType: "devicon",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "Data Analysis",
    iconType: "lucide",
    icon: ChartBar,
    color: "text-blue-500"
  },
  {
    name: "Computer Networks",
    iconType: "lucide",
    icon: Globe,
    color: "text-green-500"
  },
  {
    name: "Problem Solving",
    iconType: "lucide",
    icon: Code2,
    color: "text-red-400"
  },
  {
    name: "Video Editing",
    iconType: "lucide",
    icon: Clapperboard,
    color: "text-pink-500"
  },
  {
    name: "UI/UX Design",
    iconType: "devicon",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning programming, AI/ML, full-stack development, and creative content.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass p-6 rounded-2xl glass-hover group flex flex-col items-center justify-center gap-4 aspect-square"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * index, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {skill.iconType === "devicon" ? (
                  <img src={skill.icon as string} alt={skill.name} className="w-full h-full object-contain" />
                ) : (
                  <skill.icon className={`w-10 h-10 ${skill.color}`} />
                )}
              </div>

              <h3 className="font-semibold text-foreground text-center text-sm group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
