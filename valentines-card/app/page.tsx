"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function ValentineCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating Background Hearts */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-200 pointer-events-none"
          initial={{ y: "100vh", x: Math.random() * 100 + "vw", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 1, 0] }}
          transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: i * 0.5 }}
        >
          <Heart fill="currentColor" size={24 + Math.random() * 40} />
        </motion.div>
      ))}

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Envelope Front */
            <motion.div
              key="closed"
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-red-500 rounded-lg shadow-2xl p-12 flex flex-col items-center justify-center border-4 border-red-600 aspect-[4/3]"
            >
              <Heart className="text-white animate-bounce" size={64} fill="white" />
              <h2 className="text-white font-bold text-2xl mt-4">For You...</h2>
              <p className="text-red-100 mt-2 italic">(Click to open)</p>
            </motion.div>
          ) : (
            /* Card Inside */
            <motion.div
              key="open"
              initial={{ rotateY: -180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-2xl p-8 border-t-8 border-red-500 aspect-[4/3] flex flex-col items-center justify-center text-center"
            >
              <h1 className="text-4xl font-serif text-red-600 mb-4">Happy Valentine's Day!</h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                "Roses are red, <br />
                Next.js is fast... <br />
                My love for you <br />
                is built to last!"
              </p>
              <div className="mt-6 flex gap-2">
                <Heart className="text-red-500 fill-red-500" size={20} />
                <Heart className="text-red-500 fill-red-500" size={20} />
                <Heart className="text-red-500 fill-red-500" size={20} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}