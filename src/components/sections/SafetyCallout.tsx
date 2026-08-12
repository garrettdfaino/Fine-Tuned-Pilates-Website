import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Section';

export function SafetyCallout() {
  const navigate = useNavigate();

  const handleMaintenanceClick = () => {
    navigate('/services', { state: { scrollToSection: 'why-maintenance' } });
    window.scrollTo(0, 0);
  };

  return (
    <section id="safety" className="border-y border-border bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Container className="flex flex-col gap-3 py-5 md:flex-row md:items-center md:gap-8">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 shrink-0 text-warning" />
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Did you know?
            </span>
          </div>
          <p className="text-sm text-foreground md:text-base">
            Poor maintenance can lead to 'gross neglect' claims and safety risks.
          </p>
          <Button
            onClick={handleMaintenanceClick}
            variant="link"
            className="group h-auto p-0 text-xs font-semibold uppercase tracking-[0.16em] text-primary md:ml-auto"
          >
            Learn more
            <ChevronRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Container>
      </motion.div>
    </section>
  );
}
