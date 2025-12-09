import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Download, FileText, Eye } from "lucide-react";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download or view my complete professional resume.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Resume preview card */}
          <div className="glass rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 p-8 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-10 h-10 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Professional Resume</h3>
              <p className="text-muted-foreground">Computer Science (Business Studies) Undergraduate</p>
            </div>

            {/* Resume preview content */}
            <div className="p-8">
              <div className="aspect-[8.5/11] bg-muted/50 rounded-xl border border-border/50 flex items-center justify-center relative overflow-hidden group">
                {/* Simulated resume lines */}
                <div className="absolute inset-8 space-y-4 opacity-30">
                  <div className="h-6 bg-foreground/20 rounded w-2/3" />
                  <div className="h-3 bg-foreground/10 rounded w-full" />
                  <div className="h-3 bg-foreground/10 rounded w-5/6" />
                  <div className="h-3 bg-foreground/10 rounded w-4/5" />
                  <div className="h-6 bg-foreground/20 rounded w-1/2 mt-8" />
                  <div className="h-3 bg-foreground/10 rounded w-full" />
                  <div className="h-3 bg-foreground/10 rounded w-3/4" />
                </div>

                {/* Overlay with action */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                  <Button variant="hero" size="lg">
                    <Eye className="mr-2" />
                    View Full Resume
                  </Button>
                </div>

                {/* Center icon */}
                <div className="relative z-10">
                  <motion.div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FileText className="w-12 h-12 text-primary" />
                  </motion.div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button variant="hero" size="lg" className="flex-1">
                  <Download className="mr-2" />
                  Download Resume
                </Button>
                <Button variant="heroOutline" size="lg" className="flex-1">
                  <Eye className="mr-2" />
                  View Online
                </Button>
              </div>

              {/* File info */}
              <p className="text-center text-sm text-muted-foreground mt-4">
                PDF Format • Updated December 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
