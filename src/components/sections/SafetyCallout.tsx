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
    <section id="safety" className="relative border-y border-border bg-white py-5">
      <div className="rule-calibrated absolute inset-x-0 top-0" />
      <div className="rule-calibrated absolute inset-x-0 bottom-0" />
      <Container className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 shrink-0 text-brass" />
          <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-brass">
            Did you know?
          </span>
        </div>
        <p className="text-[0.9375rem] text-foreground">
          Poor maintenance can lead to 'gross neglect' claims and safety risks.
        </p>
        <Button
          variant="rail"
          onClick={handleMaintenanceClick}
          className="group font-mono text-xs uppercase tracking-[0.16em] text-primary md:ml-auto"
        >
          Learn more
          <ChevronRight className="ml-1 inline h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Button>
      </Container>
    </section>
  );
}
