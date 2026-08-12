import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench, PackageCheck, CheckCircle2, ArrowRight, AlertTriangle, ShieldAlert, DollarSign, Clock, Handshake, Settings, Star, type LucideIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Section';

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

interface TabPricingPlan {
  plan: string;
  icon?: LucideIcon;
  services?: string[];
  benefits?: string[];
  features?: string[];
}

interface TabContentEntry {
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string[];
  features: TabFeature[];
  risks?: TabRisk[];
  pricing?: TabPricingPlan[];
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
      image: "https://github.com/garrettdfaino/Pictures-for-FTP/blob/main/tuning-4.jpg?raw=true"
    },
    maintenance: {
      title: "Equipment Maintenance",
      icon: Wrench,
      summary: "Keep your Pilates equipment in peak condition with our comprehensive maintenance services. Choose between our Premier Maintenance Partnership for priority service and exclusive benefits, or our standard service option for individual maintenance needs.",
      description: [
        "Expert Equipment Inspections",
        "Safety Evaluations",
        "Custom Repairs",
        "Efficient Troubleshooting",
        "Preventative Maintenance Plans",
        "Clear Reporting and Documentation"
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
          description: "Every service includes thorough safety checks and documentation to protect your studio and clients."
        }
      ],
      pricing: [
        {
          plan: "Premier Maintenance Partnership",
          icon: Handshake,
          services: [
            "Comprehensive reformer inspection and safety checks",
            "Cleaning of rails, wheels and equipment",
            "Evaluation of springs, carriage wheels, straps, and ropes",
            "Secure fastening of bolts and nuts",
            "Wheel alignment and lubrication",
            "Safety and performance recommendations"
          ],
          benefits: [
            "Reduced repair rate",
            "Reduced travel rate",
            "Priority Service",
            "No additional charges for evenings or weekends",
            "Complimentary storage of commonly used reformer wear parts",
            "Access to a loaner reformer during downtime (subject to availability; $50/day rental)"
          ]
        },
        {
          plan: "Non-Partnership Standard Service",
          icon: Settings,
          features: [
            "Expert technicians",
            "Comprehensive safety checks",
            "Detailed service documentation",
            "Evening/weekend appointments subject to additional charges"
          ]
        }
      ],
      image: "https://github.com/garrettdfaino/Pictures-for-FTP/blob/main/tuning-5.jpg?raw=true"
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
      image: "https://github.com/garrettdfaino/Pictures-for-FTP/blob/main/moving-6.jpg?raw=true"
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
                <IconComponent className="h-6 w-6 text-primary" />
                <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-[2.5rem]">
                  {content.title}
                </h2>
              </div>
              <p className="text-lg leading-[1.6] text-muted-foreground">
                {content.summary}
              </p>
            </div>
            <motion.div
              className="grid gap-x-10 gap-y-4 border-t border-border pt-8 sm:grid-cols-2"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {content.description.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="lg:col-span-6">
            <img
              src={content.image}
              alt={content.title}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Key Features</h3>
          <div className="grid md:grid-cols-3 md:divide-x md:divide-border">
            {content.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="md:px-8 first:md:pl-0 last:md:pr-0"
              >
                <h4 className="font-display text-xl font-semibold text-foreground mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Risks Section for Why Maintenance Tab */}
        {key === 'why-maintenance' && (
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-ink px-6 py-20 text-ink-foreground sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[88rem]">
              <h3 className="text-2xl font-bold text-ink-foreground mb-8">Risks of Poor Maintenance</h3>
              <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-white/12">
                {content.risks?.map((risk, index) => (
                  <motion.div
                    key={risk.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="md:px-8 first:md:pl-0 last:md:pr-0"
                  >
                    <risk.icon className="h-8 w-8 text-azure mb-4" />
                    <h4 className="text-xl font-semibold text-ink-foreground mb-3">{risk.title}</h4>
                    <p className="text-ink-muted">{risk.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Service Options Section */}
        {content.pricing && (
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {key === 'installation' ? 'Request a Quote' : 'Service Options'}
            </h3>
            <div className="grid gap-8">
              {content.pricing.map((plan, index) => (
                <motion.div
                  key={plan.plan}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="border border-border p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      {plan.icon && <plan.icon className="h-6 w-6 text-primary" />}
                      <h4 className="font-display text-2xl md:text-3xl font-semibold text-foreground">{plan.plan}</h4>
                    </div>

                    {/* Premier Partnership Services and Benefits */}
                    {plan.services && plan.benefits ? (
                      <div className="grid md:grid-cols-2 md:gap-12 md:divide-x md:divide-border">
                        <div>
                          <h5 className="mb-4 flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                            <Wrench className="w-4 h-4 text-primary" />
                            Services Provided
                          </h5>
                          <motion.ul
                            className="space-y-3 mb-8"
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            {plan.services.map((service, i) => (
                              <motion.li
                                key={i}
                                className="flex items-center space-x-3"
                                variants={itemVariants}
                              >
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{service}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>
                        <div className="md:pl-12">
                          <h5 className="mb-4 flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                            <Star className="w-4 h-4 text-primary" />
                            Partnership Benefits
                          </h5>
                          <motion.ul
                            className="space-y-3 mb-8"
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            {plan.benefits.map((benefit, i) => (
                              <motion.li
                                key={i}
                                className="flex items-center space-x-3"
                                variants={itemVariants}
                              >
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{benefit}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>
                      </div>
                    ) : (
                      <motion.ul
                        className="space-y-3 mb-8"
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {plan.features?.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center space-x-3"
                            variants={itemVariants}
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}

                    <Button
                      onClick={handleGetStarted}
                      size="xl"
                      className="w-full rounded-none sm:w-auto"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background pt-28 md:pt-36">
      <Container className="pb-24">
        {/* Services Introduction */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 className="font-display font-semibold tracking-[-0.03em] leading-[1.03] text-[clamp(2rem,5vw,4rem)] text-foreground lg:col-span-7">
            Our Services
          </h1>
          <p className="text-lg leading-[1.6] text-muted-foreground lg:col-span-5">
            We provide comprehensive equipment solutions for Pilates studios, from expert maintenance
            to professional installation services. Our team ensures your studio's equipment performs
            at its peak, keeping your clients safe and satisfied.
          </p>
        </div>

        {/* Tabs */}
        <div id="services-tabs">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mt-16 h-auto w-full justify-start gap-8 overflow-x-auto rounded-none border-b border-border bg-transparent p-0 [&::-webkit-scrollbar]:hidden">
              {Object.entries(tabContent).map(([key, { title }]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="shrink-0 whitespace-nowrap rounded-none border-b-2 border-transparent px-0 pb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-none data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  {title}
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
    </div>
  );
};

export default Services;
