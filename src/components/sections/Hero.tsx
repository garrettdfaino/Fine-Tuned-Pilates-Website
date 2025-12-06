import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    <div ref={ref} className="text-center">
      <div className="text-2xl font-semibold text-theme-secondary mb-2">
        {label}
      </div>
      <div className="text-4xl font-bold text-theme-secondary">
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
    <section id="home" className="relative min-h-[45vh] flex items-center pt-32 pb-24 bg-theme-primary">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-theme-secondary leading-[1.1] w-[90%]"
            >
              We Keep Your
              <br />
              Pilates Equipment Moving
            </h1>
            <div className="flex items-center gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg max-w-[50%] mb-0">
                <p className="text-lg md:text-xl text-theme-secondary/90">
                  {heroContent.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-6 ml-12 mt-8">
                <div className="flex gap-8">
                  <AnimatedCounter end={17} label="Studios" />
                  <AnimatedCounter end={140} label="Reformers Covered" />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 -mt-8">
              <button 
                onClick={handleScheduleService}
                className="px-6 py-3 rounded-full bg-theme-background text-theme-secondary hover:bg-theme-background/90 transition-opacity flex items-center justify-center text-sm font-medium shadow-lg"
              >
                Schedule Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button 
                onClick={handleViewServices}
                className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center text-sm font-medium shadow-lg"
              >
                View Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
