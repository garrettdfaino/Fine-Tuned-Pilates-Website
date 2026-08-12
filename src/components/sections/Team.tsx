import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Section, Container, Eyebrow } from '@/components/layout/Section';
import { cn } from '@/lib/utils';

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
    <Section id="team" tone="paper">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Eyebrow className="text-primary">Meet Our Team</Eyebrow>
          <p className="mt-4 font-display font-semibold tracking-[-0.01em] leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)] lg:max-w-[24ch]">
            Our experts bring decades of combined experience in Pilates equipment, studio setup, and training
          </p>
        </motion.div>

        <div className="mt-16 space-y-20 md:mt-24 lg:space-y-32">
          {teamMembers.map((member, index) => {
            const mirrored = index === 1;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className={cn(
                  'grid items-start lg:grid-cols-12 lg:gap-x-12',
                  mirrored && 'lg:mt-16'
                )}
              >
                <div
                  className={cn(
                    'group overflow-hidden',
                    mirrored ? 'lg:col-span-6 lg:col-start-7' : 'lg:col-span-6'
                  )}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className={cn(
                      'aspect-[3/4] w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]',
                      member.name === "Dennis Faino" ? "object-[50%_35%]" : "object-[50%_65%]"
                    )}
                  />
                </div>
                <div className={cn(mirrored ? 'lg:col-span-5 lg:col-start-1' : 'lg:col-span-6')}>
                  <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-primary">
                    {String(index + 1).padStart(2, '0')} / {member.role}
                  </p>
                  <h3 className="mt-2 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold uppercase leading-[0.95]">
                    {member.name}
                  </h3>
                  <p className="mt-4 max-w-[46ch] text-[0.9375rem] leading-[1.7] text-muted-foreground">
                    {member.bio}
                  </p>
                  <div className="plate mt-6 inline-flex items-start gap-2 border border-brass/40 bg-brass/[0.06] px-3 py-2">
                    <GraduationCap className="h-3.5 w-3.5 shrink-0 text-brass" />
                    <p className="font-mono text-[0.625rem] uppercase leading-[1.5] tracking-[0.12em] text-brass">
                      {member.certification}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
