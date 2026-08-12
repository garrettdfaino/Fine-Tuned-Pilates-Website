import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const teamMembers = [
  {
    name: "Garrett Faino",
    role: "Founder & Engineer",
    image: "https://raw.githubusercontent.com/garrettdfaino/Pictures-for-FTP/main/garrett-1-2.JPG",
    bio: "With years of hands-on experience working on Pilates equipment and a solid Mechanical Engineering background, Garrett is the driving force behind our operation. By combining technical expertise with a genuine passion for building strong customer relationships, Garrett ensures every client feels valued and supported. Always focused on innovation and growth, Garrett leads the team with strategic insight and a practical, results-oriented approach.",
    certification: "Certified by the National Pilates Certification Program"
  },
  {
    name: "Dennis Faino",
    role: "Service Technician",
    image: "https://raw.githubusercontent.com/garrettdfaino/Pictures-for-FTP/main/dad-1.jpg",
    bio: "With 17 years of experience, Dennis has expertly managed the assembly, installation, maintenance, and relocation of our studios—home to the renowned STOTT and Balanced Body apparatus. His technical expertise and attention to detail ensure that every facility operates seamlessly, supporting our commitment to excellence.",
    certification: "Certified by the National Pilates Certification Program"
  }
];

export function Team() {
  return (
    <section id="team" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our experts bring decades of combined experience in Pilates equipment, studio setup, and training
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="relative bg-brand-surface text-brand-surface-foreground shadow-glow rounded-xl p-6 overflow-hidden">
                {/* Radial gradient background */}
                <div className="absolute inset-0 opacity-10 bg-glow-radial" />
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
                    <h3 className="text-2xl font-bold text-brand-surface-foreground">{member.name}</h3>
                    <p className="text-lg font-medium text-brand-surface-foreground/90">{member.role}</p>
                    <p className="text-lg text-brand-surface-foreground/90 leading-relaxed">{member.bio}</p>
                    <div className="flex items-center gap-2 pt-2">
                      <GraduationCap className="w-5 h-5 text-brand-surface-foreground/90" />
                      <p className="text-lg text-brand-surface-foreground/90 font-medium italic">{member.certification}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
