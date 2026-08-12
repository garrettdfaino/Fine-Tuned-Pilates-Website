import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="bg-background">
      <div className="grid lg:grid-cols-2">
        <div className="relative order-1 h-[55vh] w-full overflow-hidden lg:order-none lg:h-[92vh]">
          <img
            src="https://raw.githubusercontent.com/garrettdfaino/Pictures-for-FTP/main/group-1.jpg"
            alt="Pilates Studio Equipment"
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[38rem] space-y-6"
          >
            <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Our Story
            </h2>
            <p className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium leading-[1.25] tracking-[-0.02em] text-foreground">
              At Fine Tuned Pilates, LLC, we believe that your studio's success begins with dependable, expert support. Our journey started when we recognized a major gap in the Pilates industry: there was simply no reliable maintenance and support system available for studios. Without proper care, even the best equipment could fall short—impacting safety, performance, and ultimately, your business's success.
            </p>

            <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
              {!isExpanded && (
                <CollapsibleTrigger asChild>
                  <button
                    className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground hover:border-foreground"
                  >
                    Read More
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </CollapsibleTrigger>
              )}

              <CollapsibleContent className="space-y-5">
                  <p className="text-base leading-[1.75] text-muted-foreground">
                    Drawing from our personal experiences, we witnessed firsthand how challenging it was for studios to secure the reliable maintenance and support they needed. Without the dedicated expertise provided by myself and Dennis, even studios managed by industry veterans like Kathy would have faced significant challenges in keeping their equipment in optimal condition.
                  </p>
                  <p className="text-base leading-[1.75] text-muted-foreground">
                    That realization motivated us to create Fine Tuned Pilates—a company built to be more than just a service provider. We set out to become a trusted support system for studios of all sizes. With Garrett’s technical expertise as a Mechanical Engineer and Dennis’s 17 years of hands-on experience in assembly, maintenance, and relocation, our family-run team combines precision, reliability, and passion to keep your equipment performing at its best. Our early work with longtime studio owners like Kathy helped shape our approach and reinforced the importance of consistent, knowledgeable support for every studio we serve.
                  </p>
                  <p className="text-base leading-[1.75] text-muted-foreground">
                    Our mission is simple: to keep your Pilates equipment moving, ensuring your equipment is as dependable and safe as possible. We're a family-run business serving New England and beyond, fully insured and dedicated to being there for you when you need us.
                  </p>
                  <p className="text-base leading-[1.75] text-muted-foreground">
                    Reach out by phone, text, or email to set up an appointment. Let us visit your studio and show you how our expertise can make a difference. We're here to help, so you can focus on what you do best—providing an outstanding Pilates experience.
                  </p>
                  {isExpanded && (
                    <CollapsibleTrigger asChild>
                      <button
                        className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground hover:border-foreground"
                      >
                        Read Less
                        <ChevronUp className="w-4 h-4" />
                      </button>
                    </CollapsibleTrigger>
                  )}
              </CollapsibleContent>
            </Collapsible>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
