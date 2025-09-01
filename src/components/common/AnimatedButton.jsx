import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Download, Linkedin, Mail } from "lucide-react";

const AnimatedButton = ({
  type,
  text,
  mainIcon: MainIcon,
  items,
  onItemClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024);
      setIsSmallMobile(width < 634);
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  useEffect(() => {
    if (!isMobile || !isExpanded) return;
    const handleClickOutside = (event) => {
      const button = event.target.closest("[data-animated-button]");
      if (!button) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile, isExpanded]);

  const handleMainClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsExpanded(false);
    }
  };

  const getCirclePositions = (isContactsButton, isSmallMobileDevice) => {
    const radius = 90;
    const direction = isContactsButton && isSmallMobileDevice ? -1 : 1;
    const positions = [];

    if (items.length === 2) {
      positions.push(
        { x: -radius * 0.7, y: radius * 0.7 * direction },
        { x: radius * 0.7, y: radius * 0.7 * direction }
      );
    } else if (items.length === 3) {
      positions.push(
        { x: -radius * 0.87, y: radius * 0.5 * direction },
        { x: 0, y: radius * direction },
        { x: radius * 0.87, y: radius * 0.5 * direction }
      );
    }
    return positions;
  };

  const positions = getCirclePositions(type === "contacts", isSmallMobile);

  return (
    <div
      className="relative flex items-center justify-center md:w-56 md:h-32"
      data-animated-button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        className="relative flex items-center justify-center text-white font-medium overflow-hidden cursor-pointer"
        style={{ backgroundColor: "#6A4C9C" }}
        onClick={handleMainClick}
        animate={{
          width: isExpanded ? 70 : 226,
          height: isExpanded ? 70 : 49,
          borderRadius: isExpanded ? "50%" : "30px",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.3,
        }}
        whileHover={!isMobile ? { scale: 1.05 } : {}}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence>
          {!isExpanded && (
            <motion.span
              key="text"
              initial={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.15 },
              }}
              className="absolute inset-0 flex items-center justify-center font-raleway text-[16px] font-medium"
            >
              {text}
            </motion.span>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              key="icon"
              initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { delay: 0.15, duration: 0.3 },
              }}
              exit={{
                opacity: 0,
                scale: 0.3,
                rotate: 180,
                transition: { duration: 0.15 },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <MainIcon size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <>
            {items.map((item, index) => (
              <motion.button
                key={`${type}-${index}`}
                className="absolute rounded-full flex items-center justify-center text-white font-medium shadow-lg z-20 cursor-pointer"
                style={{
                  backgroundColor: "#6A4C9C",
                  width: "60px",
                  height: "60px",
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: positions[index]?.x || 0,
                  y: positions[index]?.y || 0,
                  transition: {
                    delay: 0.1 + index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0,
                  transition: {
                    delay: (items.length - 1 - index) * 0.05,
                    duration: 0.2,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onItemClick(item)}
              >
                {item.icon ? (
                  <item.icon size={22} />
                ) : (
                  <span className="text-sm font-bold">{item.label}</span>
                )}
              </motion.button>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const AnimatedContactButtons = () => {
  const handleContactClick = (item) => {
    console.log("Contact clicked:", item);
    if (item.url) {
      window.open(item.url, "_blank");
    }
  };

  const handleResumeClick = (item) => {
    console.log("Resume clicked:", item);
  };

  const contactItems = [
    {
      label: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/marcos-alexandre-dev/",
    },
    {
      label: "Email",
      icon: Mail,
      url: "mailto:contato@marcosalexandre.me",
    },
  ];

  const resumeItems = [
    {
      label: "EN",
      downloadUrl: "/resume-en.pdf",
    },
    {
      label: "PT",
      downloadUrl: "/resume-pt.pdf",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-[18px] md:flex-row md:gap-6">
      <AnimatedButton
        type="contacts"
        text="My Contacts"
        mainIcon={ExternalLink}
        items={contactItems}
        onItemClick={handleContactClick}
      />
      <AnimatedButton
        type="resume"
        text="Download Resume"
        mainIcon={Download}
        items={resumeItems}
        onItemClick={handleResumeClick}
      />
    </div>
  );
};

export default AnimatedContactButtons;
