'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TrackingForm() {
  const [trackingCode, setTrackingCode] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode.trim()) return;

    setIsTracking(true);
    
    // Simulate tracking lookup
    setTimeout(() => {
      setIsTracking(false);
      // In a real app, this would redirect to a tracking results page
      alert(`Tracking shipment: ${trackingCode}`);
      setTrackingCode('');
    }, 2000);
  };

  return (
    <section id="track" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Track your Aptus Package
            </h2>

            <h6 className="text-blue-600 uppercase text-sm font-semibold tracking-wider">
              Real-time Tracking
            </h6>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  placeholder="Enter Shipment No. eg. EY24K004"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                
                <button
                  type="submit"
                  disabled={isTracking}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  {isTracking ? 'Tracking...' : 'Track Shipment'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Content - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Tracking is available through this Web site or by calling the Aptus Cargo Management Center. 
              We are able to provide real time status reports of your valued deposits and cargo with us.
            </p>

            {/* Tracking Features */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Real-time location updates</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Delivery status notifications</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Estimated delivery time</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">24/7 customer support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
