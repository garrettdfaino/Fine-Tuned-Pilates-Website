import { motion } from 'framer-motion';
import { Section, Container, Eyebrow } from '@/components/layout/Section';

const testimonials = [
  {
    name: "Elizabeth O'Rourke",
    role: "Owner, Studio47",
    logo: "https://raw.githubusercontent.com/garrettdfaino/Pictures-for-FTP/main/stuido47.png",
    text: "I have been a studio owner for over 17-years and thought I knew everything about my Pilates equipment. As a studio we pride ourselves on cleanliness and well-maintained equipment; however, Garrett and his team at Fine Tuned Pilates have been an amazing addition to our routine equipment maintenance. They were able to diagnose small issues to make a big impact on the overall performance and longevity of our equipment. Between our two studio locations we have over 23 reformers and 17 Pilates chairs and to have everything running smoothly is imperative for the business operations and the overall client experience. This is a MUST-do for any studio owner!"
  },
  {
    name: "Jessica Scaicca",
    role: "Owner, Club Pilates East Greenwich & Johnston, RI",
    logo: "https://github.com/garrettdfaino/Pictures-for-FTP/blob/main/club%20pilates.jpg?raw=true",
    text: "I would highly recommend Fine Tune Pilates! Kathy and Garrett came to my pilates studio in Rhode Island and thoroughly explained the maintenance program to me. Once I signed on, they immediately set up a date to return to my 2 studios and thoroughly inspected and made any necessary repairs to all my pilates equipment to ensure I am compliant and up to date with maintenance. Once the maintenance was complete, they provided a thorough post mortem report, listing each piece of equipment, the maintenance that was performed, any outstanding issues that needed to be addressed. Any questions I had were promptly and thoroughly answered afterward. The piece of mind knowing that my equipment is always up to code and compliant by trained pilates maintenance professionals gives me relief as a business owner, knowing we are doing all we can to keep our clients safe."
  },
  {
    name: "Kathleen Curry",
    role: "Owner, Passport Pilates",
    logo: "https://github.com/garrettdfaino/Pictures-for-FTP/blob/main/Passportpilates.png?raw=true",
    text: "We have just had our first Maintenance visit and we are so impressed! The Reformers are quieter, the rides smoother and they feel like new again. Most importantly, we feel good knowing that the Reformers are well maintained and safe for our clients. We were impressed with their willingness to come during our weekend down time without an additional fee. They also gave our instructors a class on how to fix the Allegro 2 footbars when they stick / jam during a group class."
  }
];

export function Testimonials() {
  return (
    <Section id="testimonials" tone="white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Eyebrow className="text-primary">What Studio Owners Say</Eyebrow>
          <p className="mt-4 font-display font-semibold tracking-[-0.01em] leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)] lg:max-w-[24ch]">
            Discover the difference expert maintenance makes
          </p>
        </motion.div>

        <div className="mt-16 divide-y divide-border border-y border-border md:mt-24">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="grid gap-6 py-12 md:grid-cols-12 md:gap-10 md:py-16"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-[0.6875rem] text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <img
                  src={testimonial.logo}
                  alt={`${testimonial.role} logo`}
                  loading="lazy"
                  className="mt-3 h-8 w-auto object-contain grayscale opacity-55 transition hover:grayscale-0 hover:opacity-100"
                />
                <figcaption className="mt-4">
                  <p className="font-display text-xl font-semibold uppercase">{testimonial.name}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{testimonial.role}</p>
                </figcaption>
              </div>
              <blockquote className="border-l-2 border-primary pl-6 text-[1.0625rem] leading-[1.7] text-foreground md:col-span-8 md:col-start-5 md:text-lg max-w-[64ch]">
                {testimonial.text}
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
