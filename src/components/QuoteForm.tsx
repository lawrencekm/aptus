'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

interface FormData {
  senderInfo: string;
  holdersEmail: string;
  holdersTel: string;
  type: string;
  weight: string;
  length: string;
  width: string;
  height: string;
  originCity: string;
  destinationCity: string;
  details: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    senderInfo: '',
    holdersEmail: '',
    holdersTel: '',
    type: '',
    weight: '',
    length: '',
    width: '',
    height: '',
    originCity: '',
    destinationCity: '',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          senderInfo: '',
          holdersEmail: '',
          holdersTel: '',
          type: '',
          weight: '',
          length: '',
          width: '',
          height: '',
          originCity: '',
          destinationCity: '',
          details: ''
        });
      }, 3000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section id="quote" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <h2 className="text-3xl font-bold text-green-600 mb-4">Quote Request Submitted!</h2>
            <p className="text-gray-600 mb-6">We will get back to you shortly.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Back Home
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 bg-white">
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
              Get A Quote
            </h6>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Request A Free Quote!
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We deliver a seamless service for cargo we handle by air, land or sea through extensive 
              asset investments. We consistently benchmark our services with global standards of excellence.
            </p>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
              <div className="bg-blue-600 p-3 rounded-full">
                <FaPhone className="text-white text-xl" />
              </div>
              <div>
                <h6 className="font-semibold text-gray-900">Call for any query!</h6>
                <a 
                  href="tel:254101631676" 
                  className="text-blue-600 text-xl font-bold hover:text-blue-700 transition-colors"
                >
                  +254 101 631 676
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="senderInfo"
                  value={formData.senderInfo}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  name="holdersEmail"
                  value={formData.holdersEmail}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="holdersTel"
                  value={formData.holdersTel}
                  onChange={handleInputChange}
                  placeholder="Your Mobile"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select A Freight</option>
                  <option value="air">Air</option>
                  <option value="sea">Sea</option>
                  <option value="road">Road</option>
                  <option value="safe">Safe Deposit/Warehousing</option>
                </select>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  placeholder="Weight (kg)"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="number"
                  name="length"
                  value={formData.length}
                  onChange={handleInputChange}
                  placeholder="Length (cm)"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="number"
                  name="width"
                  value={formData.width}
                  onChange={handleInputChange}
                  placeholder="Width (cm)"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  placeholder="Height (cm)"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="originCity"
                  value={formData.originCity}
                  onChange={handleInputChange}
                  placeholder="City of Origin"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="destinationCity"
                  value={formData.destinationCity}
                  onChange={handleInputChange}
                  placeholder="Deliver City"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <textarea
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                placeholder="Special Note"
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Submitting...' : 'Request Quote'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
