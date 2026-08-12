import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench, PackageCheck, CheckCircle2, ArrowRight, AlertTriangle, ShieldAlert, DollarSign, Clock, Handshake, Settings, Star, type LucideIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {content.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {content.summary}
              </p>
            </div>
            <motion.div
              className="space-y-4"
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
          <div className="relative max-w-md mx-auto">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={content.image}
                alt={content.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary p-6 rounded-xl">
              <IconComponent className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {content.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-muted/50 p-6 border-border">
                  <h4 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Risks Section for Why Maintenance Tab */}
        {key === 'why-maintenance' && (
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Risks of Poor Maintenance</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {content.risks?.map((risk, index) => (
                <motion.div
                  key={risk.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-primary/10 p-6 border-primary/20">
                    <risk.icon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="text-xl font-semibold text-foreground mb-3">{risk.title}</h4>
                    <p className="text-muted-foreground">{risk.description}</p>
                  </Card>
                </motion.div>
              ))}
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
                  <Card className="relative bg-muted/50 p-8 border-border overflow-hidden shadow-glow">
                    {/* Radial gradient background */}
                    <div className="absolute inset-0 opacity-10 bg-glow-radial" />

                    <div className="relative">
                      <div className="flex items-center gap-3 mb-6">
                        {plan.icon && <plan.icon className="w-8 h-8 text-primary" />}
                        <h4 className="text-2xl font-bold text-foreground">{plan.plan}</h4>
                      </div>

                      {/* Premier Partnership Services and Benefits */}
                      {plan.services && plan.benefits ? (
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                              <Wrench className="w-5 h-5 text-primary" />
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
                          <div>
                            <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                              <Star className="w-5 h-5 text-primary" />
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
                        className="w-full"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Services Introduction */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive equipment solutions for Pilates studios, from expert maintenance
            to professional installation services. Our team ensures your studio's equipment performs
            at its peak, keeping your clients safe and satisfied.
          </p>
        </div>

        {/* Tabs */}
        <div id="services-tabs" className="mb-12">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="flex flex-wrap justify-center gap-4 h-auto bg-transparent p-0">
              {Object.entries(tabContent).map(([key, { title, icon: Icon }]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-full px-6 py-3 border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none hover:border-primary"
                >
                  <Icon className="w-5 h-5 mr-2" />
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
      </div>
    </div>
  );
};

export default Services;
