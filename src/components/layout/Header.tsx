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
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-editorial">
      {!isTransparent && (
        <div className="hidden h-7 bg-ink md:block">
          <Container className="flex h-full items-center justify-between font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-mist">
            <span>Boston, MA</span>
            <span>contact@finetunedpilates.com</span>
          </Container>
        </div>
      )}

      <div
        className={cn(
          'relative transition-colors duration-300 ease-editorial',
          isTransparent ? 'bg-transparent' : 'bg-background/92 backdrop-blur-md'
        )}
      >
        <Container>
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-300 ease-editorial',
              isScrolled ? 'h-[60px]' : 'h-[72px]'
            )}
          >
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://raw.githubusercontent.com/garrettdfaino/Pictures-for-FTP/main/Fine%20Tuned%20Pilates_black-cropped.PNG"
                alt="Fine Tuned Pilates"
                className={cn('h-9 w-auto transition-all duration-300', isTransparent && 'invert')}
              />
              <span
                className={cn(
                  'font-mono text-[0.8125rem] font-medium uppercase tracking-[0.22em] transition-colors duration-300',
                  isTransparent ? 'text-white' : 'text-foreground'
                )}
              >
                Fine Tuned Pilates
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
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
                      'relative py-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] transition-colors',
                      isTransparent
                        ? isActive
                          ? 'text-white'
                          : 'text-white/65 hover:text-white'
                        : isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {isActive && (
                      <span
                        className={cn(
                          'absolute -left-3 top-1/2 h-1 w-1 -translate-y-1/2',
                          isTransparent ? 'bg-tick' : 'bg-primary'
                        )}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}

              <span className={cn('h-5 w-px', isTransparent ? 'bg-white/25' : 'bg-border')} />

              <Button
                size="xl"
                variant={isTransparent ? 'inverse' : 'default'}
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
              <SheetContent side="right" className="w-full sm:max-w-[26rem] border-0 bg-ink p-0 text-white plate">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Site navigation links and contact action
                </SheetDescription>
                <div className="flex h-full flex-col justify-between px-7 pt-24 pb-8">
                  <nav>
                    {navigationItems.map((item, i) => (
                      <a
                        key={item.label}
                        href={item.path}
                        onClick={(e) => handleNavigation(e, item.path, item.section)}
                        className="flex items-baseline justify-between border-b border-white/12 py-5"
                      >
                        <span className="font-mono text-[0.625rem] text-tick">0{i + 1}</span>
                        <span className="font-display text-3xl uppercase">{item.label}</span>
                      </a>
                    ))}
                  </nav>
                  <Button
                    size="xl"
                    variant="inverse"
                    className="w-full"
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

        <div className={cn('absolute inset-x-0 bottom-0', isTransparent ? 'rule-calibrated rule-calibrated--ink' : 'rule-calibrated')} />
      </div>
    </header>
  );
}
