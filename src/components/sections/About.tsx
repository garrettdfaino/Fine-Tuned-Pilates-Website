import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-16 bg-theme-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-theme-secondary">Our Story</h2>
            <div className="space-y-4 text-theme-secondary/80">
              <p className="text-lg leading-relaxed">
                At Fine Tuned Pilates, LLC, we believe that your studio's success begins with dependable, expert support. Our journey started when we recognized a major gap in the Pilates industry: there was simply no reliable maintenance and support system available for studios. Without proper care, even the best equipment could fall short—impacting safety, performance, and ultimately, your business's success.
              </p>
              
              {!isExpanded && (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="flex items-center gap-2 text-theme-primary hover:opacity-80 transition-opacity text-sm font-medium"
                >
                  Read More
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 overflow-hidden"
                  >
                    <p className="text-lg leading-relaxed">
                      Drawing from our personal experiences, we witnessed firsthand how challenging it was for studios to secure the reliable maintenance and support they needed. Without the dedicated expertise provided by myself and Dennis, even studios managed by industry veterans like Kathy would have faced significant challenges in keeping their equipment in optimal condition.
                    </p>
                    <p className="text-lg leading-relaxed">
                      That realization inspired us to create Fine Tuned Pilates. We built our business on the principle of being more than just a service provider—we strive to be your studio's trusted support system. With Garrett's technical expertise as a Mechanical Engineer, Dennis's 17 years of hands-on experience in assembly, maintenance, and relocation, and Kathy's deep industry insight from years of successful studio ownership, our team combines a wealth of knowledge and passion to give you peace of mind.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Our mission is simple: to keep your Pilates equipment moving, ensuring your equipment is as dependable and safe as possible. We're a family-run business serving New England and beyond, fully insured and dedicated to being there for you when you need us.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Reach out by phone, text, or email to set up an appointment. Let us visit your studio and show you how our expertise can make a difference. We're here to help, so you can focus on what you do best—providing an outstanding Pilates experience.
                    </p>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="flex items-center gap-2 text-theme-primary hover:opacity-80 transition-opacity text-sm font-medium"
                    >
                      Read Less
                      <ChevronUp className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-md mx-auto w-full"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src="https://github.com/garrettdfaino/Pictures-for-FTP/blob/main/group-1.jpg?raw=true"
                alt="Pilates Studio Equipment"
                className="w-full h-full object-cover shadow-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-theme-primary p-6 rounded-2xl">
              <Star className="h-6 w-6 text-theme-secondary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}