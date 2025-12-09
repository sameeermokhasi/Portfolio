import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Film, Instagram, Youtube, X } from "lucide-react";

const videoProjects = [
  {
    title: "CSBS Edit",
    type: "Highlight Reel",
    src: "/videos/csbs_edit.mp4",
  },
  {
    title: "Run Club",
    type: "Community Event",
    src: "/videos/run_club.mp4",
  },
  {
    title: "Sponsored Run Club",
    type: "Commercial",
    src: "/videos/sponsored_run_club.mov",
  },
  {
    title: "Timeless Edit",
    type: "Cinematic",
    src: "/videos/timeless_edit.mp4",
  },
];

const ContentCreation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="content" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Content <span className="gradient-text-secondary">Creation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fitness content creator and freelance video editor with a passion for visual storytelling.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="glass p-8 rounded-2xl glass-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Film className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Video Editor</h3>
                  <p className="text-secondary font-semibold">Fitness Niche Specialist</p>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                As a fitness-focused content creator, I specialize in creating engaging video content that inspires and motivates. With experience editing{" "}
                <span className="text-secondary font-semibold">10–12 professional projects</span>, I bring stories to life through dynamic editing, color grading, and cinematic techniques.
              </p>

              {/* Content types */}
              <div className="flex flex-wrap gap-3 mb-6">
                {["Reels", "Transformation Edits", "Cinematic Cuts", "Social Media Content"].map((type) => (
                  <span
                    key={type}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 text-sm font-medium text-secondary border border-secondary/30"
                  >
                    {type}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-4">
                <motion.a
                  href="https://www.instagram.com/sam.beyondd?igsh=ZDBjanljdnkxcWJk&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-secondary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://youtube.com/@sam.beyondd?si=UBkvEfFauhEPfZTO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-secondary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Video grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {videoProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="aspect-[9/16] glass rounded-2xl overflow-hidden relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedVideo(project.src)}
              >
                {/* Video Thumbnail (Auto-playing muted) */}
                <video
                  src={project.src}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <div className="w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center mb-3 backdrop-blur-sm">
                    <Play className="w-6 h-6 text-background fill-background" />
                  </div>
                  <p className="text-sm font-bold text-white text-center drop-shadow-md">{project.title}</p>
                  <span className="text-xs text-white/90 drop-shadow-md">{project.type}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-secondary/20" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/50 hover:bg-background/80 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src={selectedVideo}
                className="w-full h-full object-contain bg-black"
                controls
                autoPlay
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContentCreation;
