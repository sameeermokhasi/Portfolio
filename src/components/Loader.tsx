import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated logo/rings */}
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-secondary/40"
            animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-accent/50"
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-3 h-3 rounded-full bg-primary glow-primary" />
          </motion.div>
        </div>

        {/* Loading text */}
        <motion.div
          className="flex gap-1 font-mono text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {"Loading".split("").map((char, index) => (
            <motion.span
              key={index}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            _
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
