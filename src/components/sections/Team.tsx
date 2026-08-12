import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Section, Container } from '@/components/layout/Section';
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
    <Section id="team" tone="light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-primary">
            Meet Our Team
          </h2>
          <p className="mt-4 font-display font-semibold tracking-[-0.03em] leading-[1.03] text-[clamp(2rem,5vw,4rem)] lg:max-w-[24ch]">
            Our experts bring decades of combined experience in Pilates equipment, studio setup, and training
          </p>
        </motion.div>

        <div className="mt-16 grid gap-16 md:mt-24 lg:grid-cols-12 lg:gap-x-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={
                index === 0
                  ? 'lg:col-span-6'
                  : 'lg:col-span-5 lg:col-start-8 lg:mt-40'
              }
            >
              <div className="group overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className={cn(
                    'aspect-[3/4] w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]',
                    member.name === "Dennis Faino" ? "object-[50%_35%]" : "object-[50%_65%]"
                  )}
                />
              </div>
              <p className="mt-6 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-primary">
                {member.role}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
                {member.name}
              </h3>
              <p className="mt-4 max-w-[52ch] text-base leading-[1.75] text-muted-foreground">
                {member.bio}
              </p>
              <div className="mt-6 flex items-start gap-2 border-t border-border pt-4">
                <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {member.certification}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
