import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Network, Server, Lock, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const experiences = [
  {
    title: "Intern",
    company: "Athreya Technologies Private Limited",
    location: "Hubli, Karnataka, India · Hybrid",
    duration: "Jan 2024 - May 2024 · 5 mos",
    description: "My project was based on Internet Protocol spoofing detection tool. I have worked specifically on packet tracing within computer networks, where my team and I focused on monitoring and analyzing network packets to ensure that communication between two parties is accurate and reliable.",
    skills: ["Leadership", "Cybersecurity", "Java", "Computer Networking", "Application Development"],
    highlights: [], // Cleared old highlights as they are replaced by the description and skill tags
    icons: [],
    certificate: {
      url: "/certificates/Internship.pdf",
      thumbnail: "/certificates/thumbnails/thumb_internship_1765227159590.png",
      title: "Internship Certificate"
    }
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience in cybersecurity and network administration.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

              <div className="ml-0 md:ml-20">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center animate-pulse-glow z-20">
                  <div className="w-3 h-3 rounded-full bg-background" />
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Left Block: Experience Details */}
                  <div className="glass rounded-2xl p-8 glass-hover h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-semibold text-lg mb-1">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="text-sm font-semibold text-foreground mr-2">Skills:</span>
                      {exp.skills?.map((skill) => (
                        <span key={skill} className="text-xs px-2 py-1 rounded-md bg-secondary/10 text-secondary-foreground border border-secondary/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <span className="absolute top-8 right-8 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-sm font-mono text-primary border border-primary/30 hidden sm:block">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Right Block: Certification Card */}
                  {exp.certificate && (
                    <div className="glass rounded-2xl p-2 glass-hover h-full flex flex-col">
                      <a href={exp.certificate.url} target="_blank" rel="noopener noreferrer" className="block group/cert relative overflow-hidden rounded-xl h-full">
                        <div className="w-full h-full relative bg-muted">
                          <img
                            src={exp.certificate.thumbnail}
                            alt={exp.certificate.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/cert:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/cert:opacity-100 transition-opacity">
                            <div className="bg-background/90 text-foreground px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              View Certificate
                            </div>
                          </div>

                          {/* Card overlay text */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white font-bold text-lg mb-1">{exp.certificate.title}</p>
                            <p className="text-white/80 text-sm">Click to view credential</p>
                          </div>
                        </div>
                      </a>
                    </div>
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

export default Experience;
