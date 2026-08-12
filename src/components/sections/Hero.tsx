import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Section';

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
    <div ref={ref}>
      <div className="font-display font-semibold tabular-nums text-[clamp(3.5rem,8vw,6rem)] leading-[0.85] text-white">
        {count}+
      </div>
      <div className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-tick">
        {label}
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
    <section id="home" className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-ink">
      <img
        src="https://github.com/garrettdfaino/Pictures-for-FTP/blob/main/moving-6.jpg?raw=true"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-ink/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/85 to-ink/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-ink/70 via-transparent to-transparent" />
      <Container className="relative pb-16 pt-40 md:pb-24 md:pt-48">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <div className="max-w-[18ch]">
            <h1 className="font-display font-semibold uppercase tracking-[-0.01em] leading-[0.88] text-[clamp(3rem,10vw,8rem)] text-white">
              We Keep Your
              <br />
              Pilates Equipment Moving
            </h1>
          </div>
          <div className="rule-calibrated rule-calibrated--ink my-8 max-w-md" />
          <p className="max-w-[52ch] text-lg leading-[1.6] text-ink-mist md:text-xl">
            {heroContent.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={handleScheduleService}
              size="xl"
              variant="inverse"
              className="w-full sm:w-auto"
            >
              Schedule Service
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={handleViewServices}
              size="xl"
              variant="outlineOnInk"
              className="w-full sm:w-auto"
            >
              View Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="plate mt-14 grid grid-cols-2 divide-x divide-white/15 border border-white/15 bg-white/[0.04] backdrop-blur-sm">
            <div className="px-6 py-7">
              <AnimatedCounter end={30} label="Studios" />
            </div>
            <div className="px-6 py-7">
              <AnimatedCounter end={220} label="Reformers Covered" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
