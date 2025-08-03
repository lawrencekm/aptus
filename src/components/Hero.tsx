"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/images/carousel-1.jpg",
    title: "Transport & Logistics",
    heading: "Powering Trade through Logistics",
    description:
      "Our passion is what happens after the delivery. We deliver Hope, Opportunity, and Potential! Cargo Solutions and Global Networks that catalyze Growth.",
    buttonText: "Free Quote",
    buttonAction: "quote",
  },
  {
    id: 2,
    image: "/images/safe.jpg",
    title: "Safe Deposit box & Warehousing",
    heading: "Safe Depository for your Valuables",
    description:
      "Complete Peace of Mind. Your valuables are automatically Insured. Premium protection of your Valuables.",
    buttonText: "Free Quote",
    buttonAction: "quote",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                  <motion.h5
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-white uppercase text-lg mb-4 tracking-wider"
                  >
                    {slides[currentSlide].title}
                  </motion.h5>

                  <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight"
                  >
                    {slides[currentSlide].heading
                      .split(" ")
                      .map((word, index) => (
                        <span key={index}>
                          {word === "Trade" ||
                          word === "Logistics" ||
                          word === "Valuables" ? (
                            <span className="text-blue-400">{word}</span>
                          ) : (
                            word
                          )}{" "}
                        </span>
                      ))}
                  </motion.h1>

                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-white text-lg md:text-xl mb-8 max-w-3xl leading-relaxed"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    onClick={() =>
                      scrollToSection(slides[currentSlide].buttonAction)
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    {slides[currentSlide].buttonText}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
