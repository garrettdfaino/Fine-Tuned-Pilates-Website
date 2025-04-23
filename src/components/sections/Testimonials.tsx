import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Elizabeth O'Rourke",
    role: "Owner, Studio47",
    logo: "https://github.com/garrettdfaino/Pictures-for-FTP/blob/main/stuido47.png?raw=true",
    text: "I have been a studio owner for over 17-years and thought I knew everything about my Pilates equipment. As a studio we pride ourselves on cleanliness and well-maintained equipment; however, Garrett and his team at Fine Tuned Pilates have been an amazing addition to our routine equipment maintenance. They were able to diagnose small issues to make a big impact on the overall performance and longevity of our equipment. Between our two studio locations we have over 23 reformers and 17 Pilates chairs and to have everything running smoothly is imperative for the business operations and the overall client experience. This is a MUST-do for any studio owner!"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-theme-secondary">What Studio Owners Say</h2>
          <p className="text-theme-secondary/80 max-w-2xl mx-auto">
            Discover the difference expert maintenance makes
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-6 rounded-xl border border-theme-secondary/10 overflow-visible max-w-lg w-full bg-theme-background"
            style={{
              boxShadow: '0 0 40px var(--color-primary)',
            }}
          >
            {/* Radial gradient background */}
            <div 
              className="absolute inset-0 opacity-10 rounded-xl"
              style={{
                background: `radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%)`
              }}
            />
            
            {/* Logo positioned to overlap */}
            <div className="absolute left-1/2 -top-12 transform -translate-x-1/2">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <img 
                  src={testimonials[0].logo}
                  alt={`${testimonials[0].role} logo`}
                  className="h-16 w-auto rounded-lg"
                />
              </div>
            </div>

            <div className="relative pt-8">
              <div className="relative text-center px-8">
                <span className="absolute top-0 left-0 text-8xl leading-none text-theme-primary font-serif opacity-90" style={{ transform: 'translate(-50%, -25%)' }}>"</span>
                <p className="text-theme-secondary text-base leading-relaxed">{testimonials[0].text}</p>
                <span className="absolute bottom-0 right-0 text-8xl leading-none text-theme-primary font-serif opacity-90" style={{ transform: 'translate(50%, 25%)' }}>"</span>
              </div>
              <div className="text-center mt-6">
                <p className="font-semibold text-theme-secondary">{testimonials[0].name}</p>
                <p className="text-sm text-theme-secondary/80">{testimonials[0].role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
