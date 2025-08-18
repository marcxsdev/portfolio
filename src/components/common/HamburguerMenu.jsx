import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 z-20 cursor-pointer"
      >
        <motion.div
          className="w-6 h-0.5 bg-black origin-center"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.div
          className="w-6 h-0.5 bg-black"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.div
          className="w-6 h-0.5 bg-black origin-center"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 right-full flex items-center z-10 whitespace-nowrap"
            initial={{ x: 32, opacity: 0 }}
            animate={{ x: -16, opacity: 1 }}
            exit={{ x: 32, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              type: "tween",
            }}
          >
            <nav className="flex items-center gap-[35px] whitespace-nowrap">
              <motion.a
                href="#skills"
                className="text-black uppercase font-raleway text-base font-normal"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                Skills
              </motion.a>
              <motion.a
                href="#experiences"
                className="text-black uppercase font-raleway text-base font-normal"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                Experiences
              </motion.a>
              <motion.a
                href="#projects"
                className="text-black uppercase font-raleway text-base font-normal"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                Personal Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="text-black uppercase font-raleway text-base font-normal"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                Get in Touch
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
