import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, GraduationCap } from 'lucide-react';

const teamMembers = [
  {
    name: "Garrett Faino",
    role: "Founder & Engineer",
    image: "https://github.com/garrettdfaino/Pictures-for-FTP/blob/main/garrett-1-2.JPG?raw=true",
    bio: "With years of hands-on experience working on Pilates equipment and a solid Mechanical Engineering background, Garrett is the driving force behind our operation. By combining technical expertise with a genuine passion for building strong customer relationships, Garrett ensures every client feels valued and supported. Always focused on innovation and growth, Garrett leads the team with strategic insight and a practical, results-oriented approach.",
    certification: "Certified by Body Be Well Pilates - Equipment Maintenace Course"
  },
  {
    name: "Kathy Jannino-Faino",
    role: "Industry Strategist & Studio Support Specialist",
    image: "https://github.com/garrettdfaino/Pictures-for-FTP/blob/main/mom-1.1.JPG?raw=true",
    bio: "With 17 years of entrepreneurial experience in the Pilates industry, Kathy has managed multiple studios and experienced firsthand the challenges of finding reliable support. After selling her last studio in July 2024, she has shifted her focus from ownership to empowering other studios. Drawing on her deep industry insights and innovative business acumen, Kathy now dedicates herself to ensuring professional service and robust support for every client, bridging the gap she once faced.",
    certification: "Certified by the National Pilates Certification Program"
  },
  {
    name: "Dennis Faino",
    role: "Service Technician",
    image: "https://github.com/garrettdfaino/Pictures-for-FTP/blob/main/dad-1.jpg?raw=true",
    bio: "With 17 years of experience, Dennis has expertly managed the assembly, installation, maintenance, and relocation of our studios—home to the renowned STOTT and Balanced Body apparatus. His technical expertise and attention to detail ensure that every facility operates seamlessly, supporting our commitment to excellence.",
    certification: "Certified by Body Be Well Pilates - Equipment Maintenace Course"
  }
];

export function Team() {
  return (
    <section id="team" className="py-16 bg-theme-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-theme-secondary">Meet Our Team</h2>
          <p className="text-xl text-theme-secondary/80 max-w-2xl mx-auto">
            Our experts bring decades of combined experience in Pilates equipment, studio setup, and training
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative bg-theme-accent rounded-xl p-6 border border-theme-secondary/10 overflow-hidden"
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
                <div className="relative overflow-hidden rounded-xl aspect-square mb-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className={`object-cover w-full h-full transition-transform duration-500 hover:scale-110 ${
                      member.name === "Dennis Faino" ? "object-[50%_35%]" : "object-[50%_65%]"
                    }`}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-theme-background">{member.name}</h3>
                  <p className="text-lg font-medium text-theme-background/90">{member.role}</p>
                  <p className="text-lg text-theme-background/90 leading-relaxed">{member.bio}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <GraduationCap className="w-5 h-5 text-theme-background/90" />
                    <p className="text-lg text-theme-background/90 font-medium italic">{member.certification}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
