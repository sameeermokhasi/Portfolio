import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Animated wave/glow effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/5 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-3xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            {"<Dev />"}
          </motion.a>

          {/* Tagline */}
          <motion.p
            className="text-muted-foreground text-center max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Built with passion for AI & innovation.
          </motion.p>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <motion.div
            className="flex items-center gap-2 text-sm text-center text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span>@2025 : Sameer Venkatesh Mokhasi</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
