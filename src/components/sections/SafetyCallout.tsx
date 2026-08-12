import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, ChevronRight } from 'lucide-react';
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export function SafetyCallout() {
  const navigate = useNavigate();

  const handleMaintenanceClick = () => {
    navigate('/services', { state: { scrollToSection: 'why-maintenance' } });
    window.scrollTo(0, 0);
  };

  return (
    <section id="safety" className="bg-background py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[40%]"
        >
          <Alert className="relative flex items-center gap-2 py-3 px-4 bg-warning-soft border-warning/20 rounded-lg overflow-hidden">
            {/* Diagonal stripes background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  hsl(var(--warning)),
                  hsl(var(--warning)) 10px,
                  transparent 10px,
                  transparent 20px
                )`
              }}></div>
            </div>

            <div className="relative bg-warning/10 p-1.5 rounded-full flex-shrink-0">
              <AlertTriangle className="w-3.5 h-3.5 text-warning" />
            </div>
            <div className="relative min-w-0">
              <h3 className="text-sm font-semibold text-foreground">Did you know?</h3>
              <p className="text-muted-foreground text-xs">
                Poor maintenance can lead to 'gross neglect' claims and safety risks.
              </p>
            </div>
            <Button
              onClick={handleMaintenanceClick}
              size="sm"
              variant="ghost"
              className="relative rounded-full bg-warning/10 text-warning hover:bg-warning/20 text-xs ml-auto flex-shrink-0"
            >
              Learn more
              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Button>
          </Alert>
        </motion.div>
      </div>
    </section>
  );
}