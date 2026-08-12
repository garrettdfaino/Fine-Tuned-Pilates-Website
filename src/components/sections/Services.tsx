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
          <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-azure">
            Our Services
          </h2>
          <p className="font-display font-semibold tracking-[-0.03em] leading-[1.03] text-[clamp(2rem,5vw,4rem)] text-white lg:col-span-8">
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
                className="group grid cursor-pointer gap-4 border-b border-white/12 py-10 transition-colors duration-300 hover:bg-white/[0.04] md:grid-cols-12 md:items-baseline md:gap-8 md:py-14"
              >
                <service.icon className="h-7 w-7 text-azure md:col-span-1" />
                <h3 className="font-display text-3xl font-semibold tracking-[-0.02em] text-white md:col-span-5 md:text-[2.5rem]">
                  {service.title}
                </h3>
                <p className="text-base leading-[1.7] text-ink-muted md:col-span-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white md:col-span-2 md:justify-self-end">
                  Learn More
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
