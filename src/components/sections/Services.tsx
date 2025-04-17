import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Wrench, PackageCheck, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: "Equipment Maintenance",
    description: "Professional maintenance and repair services for all Pilates equipment, ensuring optimal performance and safety",
    section: "maintenance"
  },
  {
    icon: PackageCheck,
    title: "Installation & Assembly",
    description: "Expert installation and assembly of new equipment, with precise attention to safety standards and manufacturer specifications",
    section: "installation"
  }
];

export function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (section: string) => {
    navigate('/services', { 
      state: { scrollToSection: section }
    });
  };

  return (
    <section id="services" className="py-16 bg-theme-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-theme-secondary">Our Services</h2>
          <p className="text-xl text-theme-secondary/80 max-w-2xl mx-auto">
            Comprehensive solutions to help your Pilates studio thrive
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative bg-theme-accent p-6 rounded-xl border border-theme-secondary/10 overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => handleServiceClick(service.section)}
              style={{
                boxShadow: '0 0 40px var(--color-primary)',
              }}
            >
              {/* Radial gradient background */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  background: `radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%)`
                }}
              />
              <div className="relative">
                <service.icon className="h-10 w-10 text-theme-background mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-theme-background">{service.title}</h3>
                <p className="text-theme-background/90 text-lg mb-4">{service.description}</p>
                <div 
                  className="text-theme-background text-lg font-medium flex items-center hover:opacity-80 transition-opacity"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}