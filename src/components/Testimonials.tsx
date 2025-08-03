'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Samuel',
    company: 'Logus',
    message: 'Aptus customer service is the best we have had. We will keep making our ocean shipping through you.'
  },
  {
    id: 2,
    name: 'Johnson',
    company: 'Autova',
    message: 'Expertly delivered cargo using innovative solutions to fit an ever changing business atmosphere.'
  },
  {
    id: 3,
    name: 'Handu',
    company: 'Hotelier',
    message: 'Aptus customer service is the best we have had. We will keep making our ocean shipping through you.'
  },
  {
    id: 4,
    name: 'June K',
    company: 'Cargof',
    message: 'Aptus customer service is the best we have had. We will keep making our ocean shipping through you.'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            What Our Clients Say!
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-600 hover:text-blue-600 p-3 rounded-full shadow-lg transition-colors duration-300"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 text-gray-600 hover:text-blue-600 p-3 rounded-full shadow-lg transition-colors duration-300"
          >
            <FaChevronRight />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg relative"
              >
                <FaQuoteRight className="absolute top-4 right-4 text-gray-200 text-4xl" />
                
                <div className="mb-6">
                  <p className="text-gray-600 text-lg leading-relaxed italic">
                    "{testimonials[currentIndex].message}"
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h5>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
