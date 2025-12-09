import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import ContentCreation from "@/components/ContentCreation";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>

      <div className="relative min-h-screen bg-background">
        <ParticleBackground />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <ContentCreation />

          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
