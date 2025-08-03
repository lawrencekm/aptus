'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const services = [
  'Air Freight',
  'Sea Freight',
  'Road Freight',
  'Logistic Solutions',
  'Safe Depository solutions'
];

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Contact Us', href: '#quote' },
  { name: 'Our Services', href: '#services' },
  { name: 'Support', href: '#track' }
];

const socialLinks = [
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' }
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Address Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold mb-6">Address</h4>
            
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-gray-300">Airport North Road, Nairobi, KENYA</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <FaPhone className="text-blue-400 flex-shrink-0" />
              <a 
                href="tel:254101631676" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                +254 101 631 676
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-400 flex-shrink-0" />
              <a 
                href="mailto:info@aptusgroup.com" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                info@aptusgroup.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold mb-6">Aptus Group</h4>
            <p className="text-gray-300 leading-relaxed">
              Powering Trade through world-class transport and logistics services across 
              East Africa, the Great Lakes region, and beyond.
            </p>
            <div className="pt-4">
              <div className="bg-blue-600 text-white px-4 py-2 rounded inline-block">
                <h3 className="font-bold">Aptus Group</h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © <a href="#" className="hover:text-white transition-colors">Aptus Group</a>, All Rights Reserved.
            </p>
            <p className="text-gray-400 text-center md:text-right text-sm">
              Powered by{' '}
              <a 
                href="https://wezabusiness.com" 
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                WezaBusiness
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
