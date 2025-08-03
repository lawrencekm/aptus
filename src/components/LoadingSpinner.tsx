'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <motion.div
        className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <span className="ml-4 text-gray-600">Loading...</span>
    </div>
  );
}
