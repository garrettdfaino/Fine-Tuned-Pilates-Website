import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { Index } from '@/components/layout/Section';

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="bg-background px-5 py-24 sm:px-8 md:py-32 lg:px-14 lg:py-44">
      <div className="mx-auto grid w-full max-w-[92rem] gap-10 lg:grid-cols-12 lg:gap-x-14">
        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-32">
            <Index n={1} className="mb-2 block" />
            <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Our Story
            </h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <p className="font-display text-[clamp(1.5rem,2.4vw,2.125rem)] font-semibold leading-[1.2] text-foreground">
            At Fine Tuned Pilates, LLC, we believe that your studio's success begins with dependable, expert support. Our journey started when we recognized a major gap in the Pilates industry: there was simply no reliable maintenance and support system available for studios. Without proper care, even the best equipment could fall short—impacting safety, performance, and ultimately, your business's success.
          </p>

          <Collapsible open={isExpanded} onOpenChange={setIsExpanded} className="mt-6">
            {!isExpanded && (
              <CollapsibleTrigger asChild>
                <Button variant="rail" className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em]">
                  Read More
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
            )}

            <CollapsibleContent className="space-y-5">
              <p className="text-[0.9375rem] leading-[1.7] text-muted-foreground">
                Drawing from our personal experiences, we witnessed firsthand how challenging it was for studios to secure the reliable maintenance and support they needed. Without the dedicated expertise provided by myself and Dennis, even studios managed by industry veterans like Kathy would have faced significant challenges in keeping their equipment in optimal condition.
              </p>
              <p className="text-[0.9375rem] leading-[1.7] text-muted-foreground">
                That realization motivated us to create Fine Tuned Pilates—a company built to be more than just a service provider. We set out to become a trusted support system for studios of all sizes. With Garrett's technical expertise as a Mechanical Engineer and Dennis's 17 years of hands-on experience in assembly, maintenance, and relocation, our family-run team combines precision, reliability, and passion to keep your equipment performing at its best. Our early work with longtime studio owners like Kathy helped shape our approach and reinforced the importance of consistent, knowledgeable support for every studio we serve.
              </p>
              <p className="text-[0.9375rem] leading-[1.7] text-muted-foreground">
                Our mission is simple: to keep your Pilates equipment moving, ensuring your equipment is as dependable and safe as possible. We're a family-run business serving New England and beyond, fully insured and dedicated to being there for you when you need us.
              </p>
              <p className="text-[0.9375rem] leading-[1.7] text-muted-foreground">
                Reach out by phone, text, or email to set up an appointment. Let us visit your studio and show you how our expertise can make a difference. We're here to help, so you can focus on what you do best—providing an outstanding Pilates experience.
              </p>
              {isExpanded && (
                <CollapsibleTrigger asChild>
                  <Button variant="rail" className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em]">
                    Read Less
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
              )}
            </CollapsibleContent>
          </Collapsible>
        </motion.div>

        <div className="lg:col-span-5">
          <img
            src="https://raw.githubusercontent.com/garrettdfaino/Pictures-for-FTP/main/group-1.jpg"
            alt="Pilates Studio Equipment"
            className="aspect-[4/5] w-full object-cover lg:-mr-14"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
