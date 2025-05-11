import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  setShowContactModal: (show: boolean) => void;
}

export function Footer({ setShowContactModal }: FooterProps) {
  return (
    <footer className="bg-theme-background/50 py-12 border-t border-theme-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="https://raw.githubusercontent.com/garrettdfaino/Pictures-for-FTP/main/Fine%20Tuned%20Pilates_black-cropped.PNG"
                alt="Fine Tuned Pilates"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-theme-secondary">Fine Tuned Pilates</span>
            </div>
            <p className="text-theme-secondary/60">
              We Keep Your Pilates Equipment Moving
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-theme-secondary">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-theme-secondary/60 hover:text-theme-primary">About</a></li>
              <li><a href="#services" className="text-theme-secondary/60 hover:text-theme-primary">Services</a></li>
              <li><a href="#testimonials" className="text-theme-secondary/60 hover:text-theme-primary">Testimonials</a></li>
              <li><button onClick={() => setShowContactModal(true)} className="text-theme-secondary/60 hover:text-theme-primary">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-theme-secondary">Contact</h4>
            <ul className="space-y-2 text-theme-secondary/60">
              <li>P.O. Box 963</li>
              <li>Hampstead, Nh 03841</li>
              <li>garrett@finetunedpilates.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-theme-secondary">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/finetunedpilatesllc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-theme-secondary/60 hover:text-theme-primary"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61575616882540" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-theme-secondary/60 hover:text-theme-primary"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-theme-secondary/10 mt-12 pt-8 text-center text-theme-secondary/60">
          <p>&copy; 2025 Fine Tuned Pilates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
