'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGlobe, FaShippingFast, FaHeadphones } from 'react-icons/fa';

const features = [
  {
    icon: FaGlobe,
    title: 'Professional Global Logistics',
    description: 'Aptus Group offers a full range of Logistics services for every business.'
  },
  {
    icon: FaShippingFast,
    title: 'On Time Delivery',
    description: 'Aptus delivers Air, Land and Sea Freights in time through extensive asset investments.'
  },
  {
    icon: FaHeadphones,
    title: '24/7 Support and Tracking',
    description: 'Get world-class support from our agents who will ensure a seamless service for your cargo. Track your cargo by its shipment number anytime.'
  }
];

export default function Features() {
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
            className="space-y-8"
          >
            <div>
              <h6 className="text-blue-600 uppercase text-sm font-semibold tracking-wider mb-4">
                Why Choose Aptus Group
              </h6>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                We Are Trusted Logistics Company Since 2012
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="text-blue-600 text-4xl" />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[500px]"
          >
            <Image
              src="/images/feature.jpg"
              alt="Aptus Group Features"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
