import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { SafetyCallout } from '../components/sections/SafetyCallout';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Team } from '../components/sections/Team';
import { Testimonials } from '../components/sections/Testimonials';

interface HomeProps {
  setShowContactModal: (show: boolean) => void;
}

export function Home({ setShowContactModal }: HomeProps) {
  const location = useLocation();
  const state = location.state as { scrollTo?: string };

  useEffect(() => {
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [state?.scrollTo]);

  return (
    <>
      <Hero setShowContactModal={setShowContactModal} />
      <SafetyCallout />
      <About />
      <Services />
      <Team />
      <Testimonials />
    </>
  );
}
