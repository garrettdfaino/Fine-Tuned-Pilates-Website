import { Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Container } from '@/components/layout/Section';

interface FooterProps {
  setShowContactModal: (show: boolean) => void;
}

export function Footer({ setShowContactModal }: FooterProps) {
  return (
    <footer className="bg-ink text-ink-foreground">
      <Container className="py-20 md:py-28">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://raw.githubusercontent.com/garrettdfaino/Pictures-for-FTP/main/Fine%20Tuned%20Pilates_black-cropped.PNG"
                alt="Fine Tuned Pilates"
                className="h-9 w-auto invert"
              />
              <span className="font-display text-base font-semibold uppercase tracking-[0.2em] text-white">
                Fine Tuned Pilates
              </span>
            </div>
            <p className="font-display text-2xl font-medium leading-[1.2] tracking-[-0.02em] text-white md:text-3xl max-w-[16ch]">
              We Keep Your Pilates Equipment Moving
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-muted mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-white/70 transition-colors hover:text-white">About</a></li>
              <li><a href="#services" className="text-sm text-white/70 transition-colors hover:text-white">Services</a></li>
              <li><a href="#testimonials" className="text-sm text-white/70 transition-colors hover:text-white">Testimonials</a></li>
              <li>
                <Button
                  variant="link"
                  onClick={() => setShowContactModal(true)}
                  className="h-auto p-0 text-sm text-white/70 no-underline hover:text-white"
                >
                  Contact
                </Button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-muted mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Boston, MA</li>
              <li>contact@finetunedpilates.com</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink-muted mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/finetunedpilatesllc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61575616882540"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/12" />

        <p className="text-[0.6875rem] uppercase tracking-[0.16em] text-white/50">
          &copy; 2025 Fine Tuned Pilates. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
