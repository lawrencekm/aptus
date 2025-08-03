'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const logisticsServices = [
  {
    id: 1,
    image: '/images/service-1.jpg',
    title: 'Air, Sea & Road Freight',
    description: 'We can provide with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by air.'
  },
  {
    id: 2,
    image: '/images/service-2.jpg',
    title: 'Customs Clearing',
    description: 'We provides with the main types of basic conditions International sea transportation is implemented by our partners vessels, the largest ocean carriers.'
  },
  {
    id: 3,
    image: '/images/service-3.jpg',
    title: 'Freight Consulting',
    description: 'We provides a wide range of transportation services including quality international road transportation of cargoes & goods arriving from the ports all over the world.'
  }
];

const warehousingServices = [
  {
    id: 1,
    image: '/images/service-3.jpg',
    title: 'CFS (Clearing and Forwarding)',
    description: 'Aptus Group CFS is a customs bonded terminal in Mombasa located 7.5 kilometers from the Port.'
  },
  {
    id: 2,
    image: '/images/service-4.jpg',
    title: 'Warehousing Services',
    description: 'We offer our customers modern, spacious and secure warehousing that meet your unique needs.'
  },
  {
    id: 3,
    image: '/images/service-5.jpg',
    title: 'Safe Depository & Safekeeping',
    description: 'Aptus Group uses advanced Safe robotics for full automation. Secure your valuables with a leading safe deposit brand.'
  }
];

interface ServiceCardProps {
  service: {
    id: number;
    image: string;
    title: string;
    description: string;
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <h4 className="text-xl font-semibold text-gray-900">{service.title}</h4>
        <p className="text-gray-600 leading-relaxed">{service.description}</p>
        
        <button
          onClick={() => scrollToSection('quote')}
          className="group flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
        >
          <FaArrowRight className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
          <span>Learn More</span>
        </button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Logistics Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h6 className="text-blue-600 uppercase text-sm font-semibold tracking-wider mb-2">
            Our Services
          </h6>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Aptus Group Logistics Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {logisticsServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Warehousing Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Aptus Group Warehousing Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {warehousingServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
