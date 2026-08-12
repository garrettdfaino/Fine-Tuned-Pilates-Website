import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Section';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isTransparent = isHome && !isScrolled;

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
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-border transition-transform duration-300 translate-y-0">
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
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-editorial border-b',
        isTransparent
          ? 'bg-transparent border-transparent'
          : 'bg-background/90 backdrop-blur-md border-border'
      )}
    >
      <Container>
        <div
          className={cn(
            'flex items-center justify-between transition-all duration-300 ease-editorial',
            isTransparent ? 'h-24 lg:h-28' : 'h-16 lg:h-20'
          )}
        >
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://raw.githubusercontent.com/garrettdfaino/Pictures-for-FTP/main/Fine%20Tuned%20Pilates_black-cropped.PNG"
              alt="Fine Tuned Pilates"
              className={cn('h-10 w-auto transition-all duration-300', isTransparent && 'invert')}
            />
            <span
              className={cn(
                'font-display text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-300',
                isTransparent ? 'text-white' : 'text-foreground'
              )}
            >
              Fine Tuned Pilates
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
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
                    'relative py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors',
                    isTransparent
                      ? isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                      : isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 h-px w-full bg-current" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Button
              size="xl"
              variant={isTransparent ? 'inverse' : 'default'}
              className="rounded-none"
              onClick={() => setShowContactModal?.(true)}
            >
              Get Started
            </Button>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn('md:hidden', isTransparent && 'text-white hover:bg-white/10')}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md bg-ink text-ink-foreground border-0 p-0">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <SheetDescription className="sr-only">
                Site navigation links and contact action
              </SheetDescription>
              <div className="flex h-full flex-col justify-between px-8 pt-28 pb-10">
                <nav className="space-y-6">
                  {navigationItems.map((item) => (
                    <div key={item.label} className="border-b border-white/10 pb-6">
                      <a
                        href={item.path}
                        onClick={(e) => handleNavigation(e, item.path, item.section)}
                        className="block font-display text-4xl font-semibold tracking-[-0.02em] text-white/90 transition-colors hover:text-white"
                      >
                        {item.label}
                      </a>
                    </div>
                  ))}
                </nav>
                <Button
                  size="xl"
                  variant="inverse"
                  className="w-full rounded-none"
                  onClick={() => {
                    setShowContactModal?.(true);
                    setIsMenuOpen?.(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
