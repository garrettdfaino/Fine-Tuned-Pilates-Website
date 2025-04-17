import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Studio Owner, Pilates Plus",
    text: "Fine Tuned Pilates transformed our business operations and equipment maintenance. Revenue is up 40% since implementing their recommendations."
  },
  {
    name: "Michael Chen",
    role: "Director, Core Strength Studio",
    text: "Their equipment maintenance service is unmatched. Our studio has never run more smoothly, and their response time is incredible."
  },
  {
    name: "Emma Williams",
    role: "Owner, Pure Pilates",
    text: "The business consulting services helped us scale from one location to three. Their expertise in the Pilates industry is invaluable."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-theme-background">
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
            See how we've helped Pilates studios grow and succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative bg-theme-accent p-6 rounded-xl border border-theme-secondary/10 overflow-hidden"
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
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-theme-background" />
                  ))}
                </div>
                <p className="text-theme-background/90 mb-4 text-sm">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-theme-background">{testimonial.name}</p>
                  <p className="text-sm text-theme-background/80">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}