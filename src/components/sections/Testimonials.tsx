import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Elizabeth O'Rourke",
    role: "Owner, Studio47",
    logo: "https://raw.githubusercontent.com/garrettdfaino/Pictures-for-FTP/main/stuido47.png",
    text: "I have been a studio owner for over 17-years and thought I knew everything about my Pilates equipment. As a studio we pride ourselves on cleanliness and well-maintained equipment; however, Garrett and his team at Fine Tuned Pilates have been an amazing addition to our routine equipment maintenance. They were able to diagnose small issues to make a big impact on the overall performance and longevity of our equipment. Between our two studio locations we have over 23 reformers and 17 Pilates chairs and to have everything running smoothly is imperative for the business operations and the overall client experience. This is a MUST-do for any studio owner!"
  },
  {
    name: "Jessica Scaicca",
    role: "Owner, Club Pilates East Greenwich & Johnston, RI",
    logo: "https://github.com/garrettdfaino/Pictures-for-FTP/blob/main/club%20pilates.jpg?raw=true",
    text: "I would highly recommend Fine Tune Pilates! Kathy and Garrett came to my pilates studio in Rhode Island and thoroughly explained the maintenance program to me. Once I signed on, they immediately set up a date to return to my 2 studios and thoroughly inspected and made any necessary repairs to all my pilates equipment to ensure I am compliant and up to date with maintenance. Once the maintenance was complete, they provided a thorough post mortem report, listing each piece of equipment, the maintenance that was performed, any outstanding issues that needed to be addressed. Any questions I had were promptly and thoroughly answered afterward. The piece of mind knowing that my equipment is always up to code and compliant by trained pilates maintenance professionals gives me relief as a business owner, knowing we are doing all we can to keep our clients safe."
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-6 rounded-xl border border-theme-secondary/10 overflow-visible bg-theme-background"
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
                    src={testimonial.logo}
                    alt={`${testimonial.role} logo`}
                    className="h-16 w-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="relative pt-8">
                <div className="relative text-center px-8">
                  <span 
                    className="absolute top-0 left-0 text-8xl leading-none text-theme-primary font-serif opacity-90" 
                    style={{ transform: 'translate(-50%, -25%)' }}
                  >
                    "
                  </span>
                  <p className="text-theme-secondary text-base leading-relaxed">{testimonial.text}</p>
                  <span 
                    className="absolute bottom-0 right-0 text-8xl leading-none text-theme-primary font-serif opacity-90" 
                    style={{ transform: 'translate(50%, 25%)' }}
                  >
                    "
                  </span>
                </div>
                <div className="text-center mt-6">
                  <p className="font-semibold text-theme-secondary">{testimonial.name}</p>
                  <p className="text-sm text-theme-secondary/80">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
