import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-24">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://github.com/garrettdfaino/Pictures-for-FTP/blob/main/inspection-2.jpg?raw=true"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-[1.1] w-[90%] drop-shadow-lg"
            >
              We Keep Your
              <br />
              Pilates Equipment Moving
            </h1>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-12 max-w-[50%]">
              <p className="text-lg md:text-xl text-white/90">
                {heroContent.subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleScheduleService}
                className="px-6 py-3 rounded-full bg-white text-theme-secondary hover:bg-white/90 transition-opacity flex items-center justify-center text-sm font-medium shadow-lg"
              >
                Schedule Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button 
                onClick={handleViewServices}
                className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors flex items-center justify-center text-sm font-medium shadow-lg"
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