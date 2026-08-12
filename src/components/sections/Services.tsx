import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Wrench, PackageCheck, ChevronRight } from 'lucide-react';
import { Section, Container } from '@/components/layout/Section';

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
    <Section id="services" tone="ink">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-tick lg:col-span-12">
            Our Services
          </h2>
          <p className="font-display font-semibold tracking-[-0.01em] leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)] text-white lg:col-span-8">
            Comprehensive solutions to help your Pilates studio thrive
          </p>
        </div>

        <div className="mt-16 border-t border-white/12 md:mt-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleServiceClick(service.section)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleServiceClick(service.section);
                  }
                }}
                className="plate-focus group relative grid cursor-pointer gap-4 border-b border-white/12 py-10 transition-colors duration-300 hover:bg-white/[0.03] md:grid-cols-12 md:items-baseline md:py-14"
              >
                <span className="font-mono text-[0.6875rem] text-tick md:col-span-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <service.icon className="h-6 w-6 text-tick md:col-span-1" />
                <h3 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-semibold uppercase leading-[1.02] text-white md:col-span-5">
                  {service.title}
                </h3>
                <p className="text-[0.9375rem] leading-[1.7] text-ink-mist md:col-span-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white md:col-span-1 md:justify-self-end">
                  Learn More
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-editorial group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
