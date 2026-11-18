import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench, PackageCheck, CheckCircle2, Check, ArrowRight, AlertTriangle, ShieldAlert, DollarSign, Clock, Handshake, Settings, Star, Tag, CalendarCheck, Archive, ArrowLeftRight, MessageSquare, FileText, type LucideIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Container, Index } from '@/components/layout/Section';

interface ServicesProps {
  setShowContactModal?: (show: boolean) => void;
}

interface TabFeature {
  title: string;
  description: string;
}

interface TabRisk {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TabBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TabPricingPlan {
  plan: string;
  eyebrow?: string;
  recommended?: boolean;
  icon?: LucideIcon;
  summary?: string;
  servicesHeading?: string;
  services?: string[];
  benefits?: TabBenefit[];
  features?: string[];
  report?: { title: string; description: string };
  cta?: string;
}

interface TabComparison {
  title: string;
  points: string[];
}

interface TabContentEntry {
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string[];
  features: TabFeature[];
  risks?: TabRisk[];
  pricing?: TabPricingPlan[];
  comparison?: { heading: string; options: TabComparison[] };
  finePrint?: string;
  image: string;
}

const Services = ({ setShowContactModal }: ServicesProps) => {
  const location = useLocation();
  const state = location.state as { scrollToSection?: string } | null;
  const [activeTab, setActiveTab] = useState(state?.scrollToSection ?? 'maintenance');

  useEffect(() => {
    if (state?.scrollToSection) {
      setActiveTab(state.scrollToSection);
    }
  }, [state?.scrollToSection]);

  const handleGetStarted = () => {
    setShowContactModal?.(true);
  };

  const tabContent: Record<string, TabContentEntry> = {
    maintenance: {
      title: "Equipment Maintenance",
      icon: Wrench,
      summary: "Preventative maintenance, inspections, and repairs for Pilates studios throughout New England. Choose our Premier Maintenance Partnership (PMP) for two preventative visits per year with priority scheduling and member rates, or Standard Service for one-time maintenance or repairs with no commitment.",
      description: [
        "Comprehensive Inspections",
        "Safety Checks",
        "Full Tune-Ups & Cleaning",
        "Repairs & Troubleshooting",
        "Biannual Preventative Visits",
        "Written Visit Reports for PMP Members"
      ],
      features: [
        {
          title: "Professional Expertise",
          description: "Our certified technicians bring years of specialized experience in Pilates equipment maintenance and repair."
        },
        {
          title: "Comprehensive Service",
          description: "From basic maintenance to complex repairs, we handle all aspects of equipment care with precision and expertise."
        },
        {
          title: "Safety First",
          description: "Every service includes thorough safety checks to protect your studio and clients, and Premier Maintenance Partnership members receive a written report after every visit."
        }
      ],
      pricing: [
        {
          plan: "Premier Maintenance Partnership (PMP)",
          eyebrow: "Recommended",
          recommended: true,
          icon: Handshake,
          summary: "Two preventative visits per year, about six months apart. Annual pricing is tailored to your equipment quantity, brand, and model, and members receive reduced rates on any additional work outside of the two biannual visits.",
          servicesHeading: "Included in Each Biannual Visit",
          services: [
            "Comprehensive inspection and safety checks",
            "Full tune-up and cleaning",
            "Springs, carriage wheels, straps, and ropes inspected",
            "Bolts, nuts, and hardware checked and tightened",
            "Carriage and wheel alignment verified",
            "Rails, tracks, and wheels deep cleaned",
            "Components lubricated as needed",
            "Wear items evaluated and replaced if needed",
            "Safety and performance recommendations"
          ],
          benefits: [
            { icon: Tag, title: "Reduced rates", description: "Discounted service and travel, all year long." },
            { icon: CalendarCheck, title: "Priority scheduling", description: "Members go to the front of the line." },
            { icon: Clock, title: "No after-hours fees", description: "Evenings and weekends at no extra charge." },
            { icon: Archive, title: "Wear parts on hand", description: "Common parts stocked for faster repairs." },
            { icon: ArrowLeftRight, title: "Loaner reformer", description: "Stay open during repairs, when available." },
            { icon: MessageSquare, title: "Ongoing support", description: "Maintenance guidance for your team." }
          ],
          report: {
            title: "A written report after every visit",
            description: "Each report documents your equipment's condition, the work performed, and any issues found. That gives you records on file if a safety, liability, or insurance question ever comes up."
          },
          cta: "Request a PMP Quote"
        },
        {
          plan: "Standard Service",
          eyebrow: "Pay As You Go",
          icon: Settings,
          summary: "One-time maintenance or repairs, billed hourly. No commitment.",
          cta: "Request Service"
        }
      ],
      comparison: {
        heading: "Which is right for your studio?",
        options: [
          {
            title: "Choose PMP if...",
            points: [
              "Your reformers see consistent or heavy use",
              "You have multiple pieces of equipment to maintain",
              "You want routine inspections and detailed records",
              "You value priority scheduling and discounted rates",
              "You want a local go-to Pilates equipment expert"
            ]
          },
          {
            title: "Choose Standard Service if...",
            points: [
              "You need a one-time tune-up",
              "You have a specific issue to troubleshoot or repair",
              "Your equipment is used less frequently",
              "A down reformer isn't the end of the world"
            ]
          }
        ]
      },
      finePrint: "Service is billed per hour, per technician. Replacement parts are an additional cost, and availability is not guaranteed due to limited stock.",
      image: "/images/services-maintenance.jpg"
    },
    'why-maintenance': {
      title: "Why Do I Need Maintenance?",
      icon: AlertTriangle,
      summary: "Regular maintenance is essential to keep your Pilates studio running safely, efficiently, and within compliance. It ensures your equipment performs at its best, extends its lifespan, and protects your business from potential liability issues. Without regular care, even minor issues can escalate into major problems that could compromise client safety and lead to costly repairs or legal complications.",
      description: [
        "Prevent equipment failures and accidents",
        "Protect against liability claims",
        "Extend equipment lifespan",
        "Maintain manufacturer warranties",
        "Ensure client safety and satisfaction",
        "Comply with insurance requirements"
      ],
      features: [
        {
          title: "Preventative Care",
          description: "Regular inspections, cleaning, lubrication, and adjustments help keep your equipment in top condition, preventing minor issues from turning into major failures."
        },
        {
          title: "Legal Protection",
          description: "Regular maintenance records provide crucial documentation to defend against negligence claims."
        },
        {
          title: "Documentation & Compliance",
          description: "Comprehensive maintenance logs provide a transparent record of care, meeting manufacturer guidelines and satisfying liability insurers' requirements."
        }
      ],
      risks: [
        {
          icon: ShieldAlert,
          title: "Safety",
          description: "Studios can face serious legal consequences for accidents caused by poorly maintained equipment."
        },
        {
          icon: DollarSign,
          title: "Financial Impact",
          description: "Emergency repairs and replacements can cost 3-4 times more than regular maintenance."
        },
        {
          icon: Clock,
          title: "Legal & Financial Liability",
          description: "Without documented maintenance, studios can face allegations of gross neglect, potentially resulting in denied insurance claims and legal action."
        }
      ],
      image: "/images/services-why-maintenance.jpg"
    },
    installation: {
      title: "Installation & Assembly",
      icon: PackageCheck,
      summary: "When your Pilates equipment is delivered—often simply left at your door—we step in to provide a seamless setup. Our team takes over where the delivery service ends, carefully unboxing and assembling your equipment for a flawless installation. Whether you're setting up a new studio or relocating an existing one, our expertise ensures that every detail is handled with precision and care.",
      description: [
        "Professional Unboxing & Assembly",
        "Studio Layout Planning",
        "Safety & Quality Checks",
        "Studio Relocation",
        "Post-Installation Testing",
        "Expert Technicians"
      ],
      features: [
        {
          title: "Space Planning",
          description: "Thoughtful layout design ensures a seamless flow and enhances the overall client experience."
        },
        {
          title: "Professional Assembly",
          description: "Certified technicians guarantee that each component is properly assembled and ready for immediate use."
        },
        {
          title: "Safety Testing",
          description: "Comprehensive safety checks and performance assessments give you confidence that your studio is fully operational and secure."
        }
      ],
      pricing: [
        {
          plan: "Installation Services",
          features: ["Professional Assembly", "Layout Optimization", "Studio Relocation", "Safety Testing"]
        }
      ],
      image: "/images/services-installation.jpg"
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const renderTabContent = (key: string, content: TabContentEntry) => {
    const IconComponent = content.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        {/* Hero Section */}
        <div className="grid gap-12 pt-16 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 lg:col-span-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <IconComponent className="h-5 w-5 text-primary" />
                <h2 className="font-display text-3xl font-semibold uppercase leading-[1.02] text-foreground md:text-[2.5rem]">
                  {content.title}
                </h2>
              </div>
              <p className="text-lg leading-[1.6] text-muted-foreground">
                {content.summary}
              </p>
            </div>
            <div className="rule-calibrated mb-8" />
            <motion.div
              className="grid gap-x-12 gap-y-3 pt-8 sm:grid-cols-2"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {content.description.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-baseline gap-3 border-b border-border/70 py-2"
                  variants={itemVariants}
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span className="font-mono text-[0.8125rem] text-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="relative lg:col-span-6">
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full bg-primary/15 md:-bottom-6 md:-right-6" />
            <div className="group relative overflow-hidden">
              <img
                src={content.image}
                alt={content.title}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-6 pt-20">
                <div className="flex items-center gap-3 text-white">
                  <IconComponent className="h-5 w-5 text-tick" />
                  <span className="font-mono text-[0.8125rem] font-semibold uppercase tracking-[0.14em]">
                    Fine Tuned Pilates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="mb-8 font-display text-3xl font-semibold uppercase text-foreground md:text-4xl">Key Features</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {content.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden border border-border bg-secondary p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-primary" />
                <span className="block font-display text-5xl font-semibold leading-none text-primary/25 transition-colors duration-300 group-hover:text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-4 mb-2 font-sans text-xl font-semibold text-foreground">{feature.title}</h4>
                <p className="leading-[1.7] text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Risks Section for Why Maintenance Tab */}
        {content.risks && content.risks.length > 0 && (
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-ink px-5 py-20 text-white sm:px-8 lg:px-14">
            <div className="mx-auto max-w-[92rem]">
              <h3 className="mb-10 font-display text-3xl font-semibold uppercase text-white md:text-4xl">Risks of Poor Maintenance</h3>
              <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-white/12">
                {content.risks.map((risk, index) => (
                  <motion.div
                    key={risk.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="md:px-8 first:md:pl-0 last:md:pr-0"
                  >
                    <risk.icon className="h-8 w-8 text-brass-lit mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-3">{risk.title}</h4>
                    <p className="text-ink-mist">{risk.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Service Options Section */}
        {content.pricing && (
          <div>
            <h3 className="mb-8 font-display text-3xl font-semibold uppercase text-foreground md:text-4xl">
              {key === 'installation' ? 'Request a Quote' : 'Service Options'}
            </h3>
            <div className="grid gap-8">
              {content.pricing.map((plan, index) => {
                const featured = Boolean(plan.recommended);
                return (
                <motion.div
                  key={plan.plan}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={featured ? 'plate relative overflow-hidden border-2 border-brass/60 bg-secondary p-8 shadow-lg md:p-12' : 'plate border border-border bg-secondary p-8 md:p-12'}>
                    {featured && <span className="absolute inset-x-0 top-0 h-1 bg-brass" />}
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                      {plan.eyebrow ? (
                        featured ? (
                          <span className="inline-flex items-center gap-1.5 bg-brass px-3 py-1 font-mono text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink">
                            <Star className="h-3.5 w-3.5" /> {plan.eyebrow}
                          </span>
                        ) : (
                          <span className="font-mono text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary">
                            {plan.eyebrow}
                          </span>
                        )
                      ) : (
                        <span className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-muted-foreground">
                          PLAN <Index n={index + 1} className="inline" />
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      {plan.icon && <plan.icon className="h-6 w-6 shrink-0 text-primary" />}
                      <h4 className="font-display text-2xl font-semibold text-foreground md:text-3xl">{plan.plan}</h4>
                    </div>
                    {plan.summary && (
                      <p className="mt-3 max-w-[70ch] text-lg leading-[1.6] text-muted-foreground">{plan.summary}</p>
                    )}
                    <div className="rule-calibrated my-8" />

                    {plan.services && plan.benefits && (
                      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
                        <div>
                          <h5 className="mb-5 font-mono text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-primary">
                            {plan.servicesHeading ?? 'Services Provided'}
                          </h5>
                          <motion.ul
                            className="space-y-3"
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            {plan.services.map((service, i) => (
                              <motion.li key={i} className="flex items-start gap-3" variants={itemVariants}>
                                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <span className="text-foreground">{service}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>
                        <div>
                          <h5 className="mb-5 font-mono text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-primary">
                            Partnership Benefits
                          </h5>
                          <ul className="space-y-4">
                            {plan.benefits.map((benefit) => (
                              <li key={benefit.title} className="flex items-start gap-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                  <benefit.icon className="h-5 w-5" />
                                </span>
                                <span>
                                  <span className="block font-semibold text-foreground">{benefit.title}</span>
                                  <span className="block text-muted-foreground">{benefit.description}</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {plan.features && (
                      <motion.ul
                        className="space-y-3"
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {plan.features.map((feature, i) => (
                          <motion.li key={i} className="flex items-center gap-3" variants={itemVariants}>
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}

                    {plan.report && (
                      <div className="mt-10 flex items-start gap-4 border-l-4 border-primary bg-primary/[0.06] p-6">
                        <FileText className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">{plan.report.title}</p>
                          <p className="mt-1 text-muted-foreground">{plan.report.description}</p>
                        </div>
                      </div>
                    )}

                    <Button
                      onClick={handleGetStarted}
                      size="xl"
                      className={plan.services || plan.features || plan.report ? 'mt-10 w-full sm:w-auto' : 'w-full sm:w-auto'}
                    >
                      {plan.cta ?? 'Get Started'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
                );
              })}
            </div>

            {content.comparison && (
              <div className="mt-16">
                <h3 className="mb-8 font-display text-3xl font-semibold uppercase text-foreground md:text-4xl">
                  {content.comparison.heading}
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {content.comparison.options.map((option, i) => (
                    <div
                      key={option.title}
                      className={i === 0 ? 'border-2 border-brass/60 bg-secondary p-8' : 'border border-border bg-secondary p-8'}
                    >
                      <p className="mb-5 font-display text-xl font-semibold text-foreground md:text-2xl">{option.title}</p>
                      <ul className="space-y-3">
                        {option.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {content.finePrint && (
              <p className="mt-6 text-sm text-muted-foreground">{content.finePrint}</p>
            )}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* Services Introduction — photo banner */}
      <section className="relative isolate overflow-hidden bg-ink pt-40 pb-20 md:pt-48 md:pb-28">
        <div aria-hidden="true" className="absolute -right-32 -top-32 -z-10 h-[32rem] w-[32rem] rounded-full bg-primary/30 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-40 left-1/4 -z-10 h-[24rem] w-[24rem] rounded-full bg-primary/15 blur-3xl" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-8 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-7">
              <p className="font-mono text-[0.9375rem] font-semibold uppercase tracking-[0.14em] text-tick md:text-[1.0625rem]">
                What We Do
              </p>
              <h1 className="mt-4 font-display font-semibold uppercase tracking-[-0.01em] leading-[0.9] text-[clamp(2.75rem,8vw,6.5rem)] text-white">
                Our Services
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg leading-[1.6] text-ink-mist">
                We provide comprehensive equipment solutions for Pilates studios, from expert maintenance
                to professional installation services. Our team ensures your studio's equipment performs
                at its peak, keeping your clients safe and satisfied.
              </p>
              <Button onClick={handleGetStarted} size="xl" variant="inverse" className="mt-8 w-full sm:w-auto">
                Schedule Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <Container className="pb-24">
        {/* Tabs */}
        <div id="services-tabs">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="relative z-10 -mt-10 grid h-auto w-full grid-cols-1 gap-3 rounded-none border-0 bg-transparent p-0 sm:grid-cols-3 md:-mt-12">
              {Object.entries(tabContent).map(([key, { title, icon: TabIcon }], index) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="group relative flex h-auto items-center justify-start gap-4 whitespace-normal rounded-none border border-border bg-secondary px-5 py-5 text-left text-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-xl"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary/10 text-primary transition-colors group-data-[state=active]:bg-white/15 group-data-[state=active]:text-white">
                    <TabIcon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-mono text-[0.75rem] tracking-[0.14em] opacity-70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-lg font-semibold uppercase leading-tight md:text-xl">
                      {title}
                    </span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(tabContent).map(([key, content]) => (
              <TabsContent key={key} value={key}>
                {renderTabContent(key, content)}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Container>

      {/* Call to action band */}
      <section className="bg-primary py-16 text-white md:py-20">
        <Container className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold uppercase leading-[0.95]">
              Ready to get started?
            </p>
            <p className="mt-3 max-w-[52ch] text-lg text-white/80">
              Ask for a quote with exact pricing for your studio.
            </p>
          </div>
          <Button onClick={handleGetStarted} size="xl" variant="inverse" className="w-full shrink-0 sm:w-auto">
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Services;
