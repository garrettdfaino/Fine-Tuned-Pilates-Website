import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Counter component with animation
function AnimatedCounter({ end, label }: { end: number; label: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 4000; // 4 seconds
      const increment = end / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center flex-1">
      <div className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-foreground mb-2">
        {label}
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
        {count}+
      </div>
    </div>
  );
}

const heroContent = {
  title: "We Keep Your Pilates Equipment Moving",
  subtitle: "Fine Tuned Pilates delivers expert maintenance, custom repairs, and installation services to ensure your studio's equipment performs at its best—keeping your business and clients in perfect motion."
};

interface HeroProps {
  setShowContactModal?: (show: boolean) => void;
}

export function Hero({ setShowContactModal }: HeroProps) {
  const navigate = useNavigate();

  const handleViewServices = () => {
    navigate('/services');
    window.scrollTo(0, 0);
  };

  const handleScheduleService = () => {
    setShowContactModal?.(true);
  };

  return (
    <section id="home" className="relative min-h-[45vh] flex items-center pt-32 pb-24 bg-primary">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start space-y-6"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] w-full md:w-[90%]"
            >
              We Keep Your
              <br />
              Pilates Equipment Moving
            </h1>
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 w-full">
              <Card className="w-full lg:max-w-[50%] rounded-xl shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-base sm:text-lg md:text-xl text-foreground/90">
                    {heroContent.subtitle}
                  </p>
                </CardContent>
              </Card>
              <div className="flex flex-col gap-4 lg:ml-12 lg:mt-8">
                <div className="flex flex-col gap-4">
                  <AnimatedCounter end={30} label="Studios" />
                  <AnimatedCounter end={220} label="Reformers Covered" />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                onClick={handleScheduleService}
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 rounded-full px-6 py-3 shadow-lg w-full sm:w-auto"
              >
                Schedule Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={handleViewServices}
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-3 shadow-lg w-full sm:w-auto"
              >
                View Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
