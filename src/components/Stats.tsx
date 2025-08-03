"use client";

import { motion } from "framer-motion";
import { FaPhone, FaUsers, FaShip, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: FaUsers,
    number: 200000,
    label: "Warehouse m²",
    color: "bg-blue-600",
  },
  {
    icon: FaShip,
    number: 1789,
    label: "Complete Shipments",
    color: "bg-gray-600",
  },
  {
    icon: FaStar,
    number: 434,
    label: "Trucking Fleet",
    color: "bg-green-600",
  },
];

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h6 className="text-blue-600 uppercase text-sm font-semibold tracking-wider">
              Aptus Group
            </h6>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              #1 Place To Manage All Of Your Cargo Shipment and Logistics
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Aptus Group leverages Skilled personnel, communications, tracking
              processing software, combined with decades of experience! Through
              an integrated supply chain solutions, Aptus Group drives
              sustainable competitive advantages to some of World&apos;s largest
              companies.
            </p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
            >
              <div className="bg-blue-600 p-3 rounded-full">
                <FaPhone className="text-white text-xl" />
              </div>
              <div>
                <h6 className="font-semibold text-gray-900">
                  Call to learn more!
                </h6>
                <a
                  href="tel:254101631676"
                  className="text-blue-600 text-xl font-bold hover:text-blue-700 transition-colors"
                >
                  +254 101 631 676
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`${stat.color} text-white p-6 rounded-lg text-center space-y-3 shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <stat.icon className="text-4xl mx-auto" />
                <h2 className="text-3xl font-bold">
                  <CountUp end={stat.number} />
                </h2>
                <p className="text-sm opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
