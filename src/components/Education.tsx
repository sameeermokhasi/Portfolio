import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    id: 1,
    title: "B.E. in Computer Science (Business Studies)",
    institution: "BMS College of Engineering (BMSCE)",
    period: "Currently Pursuing",
    status: "ongoing",
    icon: GraduationCap,
    description: "Focusing on Problem solving, AI, Machine Learning, and Full Stack Development",
    grade: "CGPA: 7.00",
  },
  {
    id: 2,
    title: "Diploma in Computer Science",
    institution: "Polytechnic",
    period: "Completed",
    status: "completed",
    icon: BookOpen,
    description: "Strong foundation in programming and computer fundamentals",
    grade: "GRADE : 10CGPA",
  },
  {
    id: 3,
    title: "10th Standard (SSLC)",
    institution: "Secondary Education",
    period: "Completed",
    status: "completed",
    icon: Award,
    description: "Completed secondary education with focus on Science and Mathematics",
    grade: "GRADE: 78%",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey from foundational studies to specialized engineering.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="relative pl-8 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              {/* Timeline line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />
              )}

              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ${edu.status === "ongoing"
                  ? "bg-primary animate-pulse"
                  : "bg-primary/20 border-2 border-primary"
                  }`}
              >
                <edu.icon className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Content card */}
              <motion.div
                className="glass p-6 rounded-2xl ml-4 glass-hover"
                whileHover={{ x: 10 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">{edu.title}</h3>
                  {edu.status === "ongoing" && (
                    <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                      Currently Pursuing
                    </span>
                  )}
                </div>
                <p className="text-primary font-medium mb-2">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.description}</p>
                {edu.grade && (
                  <p className="text-secondary font-semibold text-sm mt-2">{edu.grade}</p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
