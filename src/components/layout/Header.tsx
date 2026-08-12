import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

interface HeaderProps {
  isMenuOpen?: boolean;
  setIsMenuOpen?: (isOpen: boolean) => void;
  activeSection?: string;
  setShowContactModal?: (show: boolean) => void;
  minimal?: boolean;
}

export function Header({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  setShowContactModal,
  minimal = false
}: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string, section: string | null) => {
    e.preventDefault();

    if (section) {
      if (!isHome) {
        // If we're not on home page, navigate to home first
        navigate('/', { state: { scrollTo: section } });
      } else {
        // If we're already on home page, just scroll
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // For non-section links (like Services page)
      navigate(path);
      window.scrollTo(0, 0);
    }

    if (setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: 'Home', path: '/', section: 'home' },
    { label: 'About', path: '/#about', section: 'about' },
    { label: 'Services', path: '/services', section: null },
    { label: 'Team', path: '/#team', section: 'team' }
  ];

  if (minimal) {
    return (
      <nav
        className={`fixed top-0 w-full z-50 bg-white border-b border-border transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://raw.githubusercontent.com/garrettdfaino/Pictures-for-FTP/main/Fine%20Tuned%20Pilates_black-cropped.PNG"
                alt="Fine Tuned Pilates"
                className="h-12 w-auto"
              />
              <span className="text-xl font-semibold text-foreground">Fine Tuned Pilates</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed w-full z-50 bg-white border-b border-border transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://raw.githubusercontent.com/garrettdfaino/Pictures-for-FTP/main/Fine%20Tuned%20Pilates_black-cropped.PNG"
              alt="Fine Tuned Pilates"
              className="h-12 w-auto"
            />
            <span className="text-xl font-semibold text-foreground">Fine Tuned Pilates</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => {
              const isActive = isHome
                ? activeSection === item.section
                : location.pathname === item.path;

              return (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => handleNavigation(e, item.path, item.section)}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-primary',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Button
              onClick={() => setShowContactModal?.(true)}
              className="rounded-full px-6"
            >
              Get Started
            </Button>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <SheetDescription className="sr-only">
                Site navigation links and contact action
              </SheetDescription>
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.path}
                    onClick={(e) => handleNavigation(e, item.path, item.section)}
                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  onClick={() => {
                    setShowContactModal?.(true);
                    setIsMenuOpen?.(false);
                  }}
                  className="rounded-full px-8 py-3"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
