import { Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface FooterProps {
  setShowContactModal: (show: boolean) => void;
}

export function Footer({ setShowContactModal }: FooterProps) {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="https://raw.githubusercontent.com/garrettdfaino/Pictures-for-FTP/main/Fine%20Tuned%20Pilates_black-cropped.PNG"
                alt="Fine Tuned Pilates"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-foreground">Fine Tuned Pilates</span>
            </div>
            <p className="text-muted-foreground">
              We Keep Your Pilates Equipment Moving
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary">Services</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</a></li>
              <li>
                <Button
                  variant="link"
                  onClick={() => setShowContactModal(true)}
                  className="p-0 h-auto text-muted-foreground hover:text-primary"
                >
                  Contact
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Boston, MA</li>
              <li>contact@finetunedpilates.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/finetunedpilatesllc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61575616882540"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-12" />
        <div className="text-center text-muted-foreground">
          <p>&copy; 2025 Fine Tuned Pilates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
