// CustomDialog.tsx
import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const CustomDialog: React.FC<CustomDialogProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#1E1E1E] bg-opacity-90 flex justify-center items-center z-[150]"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="sm:max-w-[763px] w-full p-8 sm:p-0 rounded-lg overflow-hidden "
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
