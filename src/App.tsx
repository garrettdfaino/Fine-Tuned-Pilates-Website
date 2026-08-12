import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ContactModal } from './components/modals/ContactModal';
import { Home } from './pages/Home';
import Services from './pages/Services';

// ScrollToTop component to handle page transitions
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'team'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        {/* Header */}
        <Header 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          setShowContactModal={setShowContactModal}
        />

        {/* Routes */}
        <Routes>
          <Route path="/services" element={<Services setShowContactModal={setShowContactModal} />} />
          <Route path="/" element={<Home setShowContactModal={setShowContactModal} />} />
        </Routes>

        {/* Footer */}
        <Footer setShowContactModal={setShowContactModal} />

        {/* Contact Modal */}
        <ContactModal 
          showContactModal={showContactModal}
          setShowContactModal={setShowContactModal}
        />
      </div>
    </Router>
  );
}

export default App;