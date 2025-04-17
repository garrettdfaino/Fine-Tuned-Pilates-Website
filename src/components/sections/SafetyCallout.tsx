import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, ChevronRight } from 'lucide-react';

export function SafetyCallout() {
  const navigate = useNavigate();

  const handleMaintenanceClick = () => {
    navigate('/services');
    window.scrollTo(0, 0);
  };

  return (
    <section id="safety" className="bg-theme-background py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFF9E5] rounded-lg overflow-hidden w-full md:w-[40%]"
        >
          {/* Diagonal stripes background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #FFB800,
                #FFB800 10px,
                transparent 10px,
                transparent 20px
              )`
            }}></div>
          </div>

          <div className="relative py-3 px-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#FFB800] bg-opacity-10 p-1.5 rounded-full flex-shrink-0">
                <AlertTriangle className="w-3.5 h-3.5 text-[#FFB800]" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-theme-secondary">Did you know?</h3>
                <p className="text-theme-secondary/70 text-xs">
                  Poor maintenance can lead to 'gross neglect' claims and safety risks.
                </p>
              </div>
              <button 
                onClick={handleMaintenanceClick}
                className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#FFB800] bg-opacity-10 text-[#FFB800] hover:bg-opacity-20 transition-colors text-xs font-medium whitespace-nowrap flex-shrink-0"
              >
                Learn more
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}