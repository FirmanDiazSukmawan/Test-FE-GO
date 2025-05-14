import React from 'react';
import { motion } from 'framer-motion';

interface PaginationButtonsProps {
  handlePrev: () => void;
  handleNext: () => void;
  loading: boolean;
  offset: number;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  handlePrev,
  handleNext,
  loading,
  offset,
}) => {
  // Animation variants
  const buttonVariants = {
    initial: { scale: 1, opacity: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
    tap: { 
      scale: 0.95,
      transition: { type: 'spring', stiffness: 500 }
    },
    disabled: { opacity: 0.6 }
  };

  // Page indicator animation
  const pageIndicator = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="flex items-center gap-6 mt-8 justify-center">
      <motion.button
        onClick={handlePrev}
        disabled={offset === 0 || loading}
        className="px-6 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium shadow-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-32"
        variants={buttonVariants}
        initial="initial"
        whileHover={offset === 0 || loading ? "disabled" : "hover"}
        whileTap={offset === 0 || loading ? "disabled" : "tap"}
        animate={offset === 0 || loading ? "disabled" : "initial"}
      >
        <div className="flex items-center justify-center gap-2">
          <motion.svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24"
            animate={{ x: offset === 0 || loading ? 0 : [-2, 2, -2] }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <path 
              fill="currentColor" 
              d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
            />
          </motion.svg>
          Previous
        </div>
      </motion.button>

      <motion.div
        className="text-gray-700 font-medium px-4 py-2 bg-gray-100 rounded-lg shadow-inner"
        variants={pageIndicator}
        initial="hidden"
        animate="visible"
      >
        {Math.floor(offset / 12) + 1}
      </motion.div>

      <motion.button
        onClick={handleNext}
        disabled={loading}
        className="px-6 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-medium shadow-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-32"
        variants={buttonVariants}
        initial="initial"
        whileHover={loading ? "disabled" : "hover"}
        whileTap={loading ? "disabled" : "tap"}
        animate={loading ? "disabled" : "initial"}
      >
        <div className="flex items-center justify-center gap-2">
          Next
          <motion.svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24"
            animate={{ x: loading ? 0 : [-2, 2, -2] }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <path 
              fill="currentColor" 
              d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
            />
          </motion.svg>
        </div>
      </motion.button>
    </div>
  );
};

export default PaginationButtons;