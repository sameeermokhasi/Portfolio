import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award, BadgeCheck } from "lucide-react";

const certifications = [
  {
    id: 0,
    title: "Internship Certificate",
    issuer: "Cybersecurity & Computer Networks",
    date: "~ May 2024",
    credentialUrl: "/certificates/Internship.pdf",
    thumbnail: "/certificates/thumbnails/thumb_internship_1765227159590.png",
    description: "Cybersecurity and Network Administration Internship.",
  },
  {
    id: 11,
    title: "GenAI Machine Learning",
    issuer: "GenAI Course",
    date: "~ Apr 2025",
    credentialUrl: "/certificates/GenAI Machine Learning.pdf",
    thumbnail: "/certificates/thumbnails/thumb_ai_hardware_1765226154106.png",
    description: "Specialized training in Generative AI and Machine Learning.",
  },
  {
    id: 1,
    title: "Agentic AI",
    issuer: "Advanced AI Certification",
    date: "~ Nov 2025",
    credentialUrl: "/certificates/Agentic AI.pdf",
    thumbnail: "/certificates/thumbnails/thumb_agentic_ai_1765227598968.png",
    description: "Specialized certification in Agentic Artificial Intelligence systems.",
  },
  {
    id: 2,
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    date: "~ May 2025",
    credentialUrl: "/certificates/SAMEER VENKATESH MOKHASI_Database_Programming_with_SQL_–_English_Award_Of_Completion_on_the_26th_of_May__2025.pdf",
    thumbnail: "/certificates/thumbnails/thumb_sql_1765226121969.png",
    description: "Comprehensive SQL programming certification.",
  },
  {
    id: 3,
    title: "Matlab Workshop Series 5",
    issuer: "MathWorks",
    date: "~ Dec 2024",
    credentialUrl: "/certificates/MATHLAB 5 CERTIFICATE.pdf",
    thumbnail: "/certificates/thumbnails/thumb_matlab_1765226138484.png",
    description: "Advanced Matlab programming techniques.",
  },
  {
    id: 4,
    title: "Matlab Workshop Series 4",
    issuer: "MathWorks",
    date: "~ Dec 2024",
    credentialUrl: "/certificates/MATLAB 4 CERTIFICATE.pdf",
    thumbnail: "/certificates/thumbnails/thumb_matlab_1765226138484.png",
    description: "Data analysis and visualization with Matlab.",
  },
  {
    id: 5,
    title: "Matlab Workshop Series 3",
    issuer: "MathWorks",
    date: "~ Dec 2024",
    credentialUrl: "/certificates/MATHLAB 3 CERTIFICATE.pdf",
    thumbnail: "/certificates/thumbnails/thumb_matlab_1765226138484.png",
    description: "Intermediate Matlab applications.",
  },
  {
    id: 6,
    title: "Matlab Workshop Series 2",
    issuer: "MathWorks",
    date: "~ Nov 2024",
    credentialUrl: "/certificates/MATLAB 2 CERTIFICATE.pdf",
    thumbnail: "/certificates/thumbnails/thumb_matlab_1765226138484.png",
    description: "Core Matlab functionality training.",
  },
  {
    id: 7,
    title: "Hardware for AI",
    issuer: "Workshop",
    date: "~ Oct 2024",
    credentialUrl: "/certificates/HARDWARE FOR AI - CERTIFICATE.pdf",
    thumbnail: "/certificates/thumbnails/thumb_ai_hardware_1765226154106.png",
    description: "Hardware optimization for AI models.",
  },
  {
    id: 8,
    title: "Matlab Fundamentals",
    issuer: "MathWorks",
    date: "~ Oct 2024",
    credentialUrl: "/certificates/MATHLAB CERTIFICATE.pdf",
    thumbnail: "/certificates/thumbnails/thumb_matlab_1765226138484.png",
    description: "Introduction to technical computing.",
  },
  {
    id: 9,
    title: "Infosys Certified",
    issuer: "Infosys",
    date: "~ Oct 2023",
    credentialUrl: "/certificates/INFOSYS CERTIFIED.pdf",
    thumbnail: "/certificates/thumbnails/thumb_corporate_tech_1765226185667.png",
    description: "Professional industry readiness certification.",
  },
  {
    id: 10,
    title: "IEEE Tech Talk Participation",
    issuer: "IEEE",
    date: "~ 2024",
    credentialUrl: "/certificates/Certificate of Participation - Sameer Mokhasi - Tech Talk - IEEE Week 2024.pdf",
    thumbnail: "/certificates/thumbnails/thumb_corporate_tech_1765226185667.png",
    description: "Active participation in technical seminars.",
  },
];



const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and notable achievements that validate my expertise.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl overflow-hidden group glass-hover block h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              {/* Thumbnail Image */}
              <div className="h-48 w-full relative overflow-hidden group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                <img
                  src={cert.thumbnail}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  in {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground/80 mb-4 flex-1 line-clamp-2">
                  {cert.description}
                </p>
                <div className="flex items-center text-xs text-muted-foreground font-mono mt-auto">
                  {cert.date}
                </div>
              </div>
            </motion.a>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Certifications;
