import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center relative">
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav
            className="flex items-center gap-[35px] mr-6 whitespace-nowrap overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.a
              href="#skills"
              className="text-black uppercase font-raleway text-base font-normal transition-colors duration-200 ease-in-out hover:text-gray-700"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              Skills
            </motion.a>
            <motion.a
              href="#experiences"
              className="text-black uppercase font-raleway text-base font-normal transition-colors duration-200 ease-in-out hover:text-gray-700"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              Experiences
            </motion.a>
            <motion.a
              href="#projects"
              className="text-black uppercase font-raleway text-base font-normal transition-colors duration-200 ease-in-out hover:text-gray-700"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              Personal Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="text-black uppercase font-raleway text-base font-normal transition-colors duration-200 ease-in-out hover:text-gray-700"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
            >
              Get in Touch
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>

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
          animate={{ opacity: isOpen ? 0 : 1 }}
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
    </div>
  );
};

export default HamburgerMenu;
