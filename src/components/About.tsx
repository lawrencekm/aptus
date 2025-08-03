'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGlobe, FaShippingFast } from 'react-icons/fa';

const aboutSections = [
  {
    id: 1,
    image: '/images/transport-and-logistics.jpg',
    subtitle: 'About Aptus Group',
    title: 'Cargo Logistics Solutions',
    description: 'Africa presents great potential and more global markets now seek to tap into the possibilities present in the continent. Aptus Group is proud to contribute to this Africa reawakening by providing much-needed global cargo connections in East Africa, the Great Lakes region, and the rest of the world. We are Powering Trade for our customers through world-class transport and logistics services. We approach each shipment we handle and every ton we move as an opportunity to accelerate growth, unlock potential, deliver hope in our communities, and contribute to economic growth in the markets we serve. That\'s how we are Powering Trade.',
    features: [
      {
        icon: FaGlobe,
        title: 'Transparent Affordable Pricing',
        description: 'International supply chains involves a myriad of unknown risks and challenging.'
      },
      {
        icon: FaShippingFast,
        title: 'Real Time Tracking',
        description: 'We ensure customers\' supply chains are fully compliant by comprehensive practices.'
      }
    ]
  },
  {
    id: 2,
    image: '/images/Safe-Deposit-Box-Bank-Vault-Locker.jpg',
    subtitle: 'Safe Depository',
    title: 'Safe Depository Services',
    description: 'Aptus Group Kenya, (part of Aptus Group Global Vaults) is a World\'s First that has revolutionized the Safe Deposit Box industry. Using advanced Safe robotics, it is fully automated & insured. Secure your valuables today with the leading global Safe Deposit Brand.',
    features: [
      {
        icon: FaGlobe,
        title: 'Automated & Insured',
        description: 'fully automated & discrete; you alone control access to privacy pod and personal Safe Deposit Box.'
      },
      {
        icon: FaShippingFast,
        title: 'Real Time Tracking',
        description: 'You can track and access your Safe Depository Box at anytime from 8AM till late.'
      }
    ]
  }
];

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      {aboutSections.map((section, sectionIndex) => (
        <div key={section.id} className={`container mx-auto px-4 ${sectionIndex > 0 ? 'mt-20' : ''}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-[500px]"
            >
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h6 className="text-blue-600 uppercase text-sm font-semibold tracking-wider">
                {section.subtitle}
              </h6>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {section.title}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {section.description}
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {section.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <feature.icon className="text-blue-600 text-3xl" />
                    <h5 className="font-semibold text-gray-900">{feature.title}</h5>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                onClick={() => scrollToSection('quote')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get a Free Quote
              </motion.button>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
