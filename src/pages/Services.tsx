import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, PackageCheck, CheckCircle2, ArrowRight, AlertTriangle, ShieldAlert, DollarSign, Clock, Handshake, Settings, Star } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface ServicesProps {
  setShowContactModal?: (show: boolean) => void;
}

const Services = ({ setShowContactModal }: ServicesProps) => {
  const [activeTab, setActiveTab] = useState('maintenance');
  const location = useLocation();
  const state = location.state as { scrollToSection?: string };

  const handleGetStarted = () => {
    setShowContactModal?.(true);
  };

  const tabContent = {
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
            "Deep cleaning and sanitization of all equipment",
            "Evaluation of springs, carriage wheels, straps, and ropes",
            "Secure fastening of bolts and nuts",
            "Wheel alignment and lubrication",
            "Safety and performance recommendations"
          ],
          benefits: [
            "Reduced repair rate at $115/hour (standard rate $165/hour)",
            "Reduced travel fee at $65/hour (standard rate $100/hour)",
            "48-hour priority service",
            "No additional charges for evenings or weekends",
            "Complimentary storage of commonly used reformer wear parts",
            "Access to a loaner reformer during downtime (subject to availability; $50/day rental)"
          ]
        },
        {
          plan: "Non-Partnership Standard Service",
          icon: Settings,
          features: [
            "Professional repair service at $165/hour",
            "Travel time billed at $100/hour",
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

  const IconComponent = tabContent[activeTab as keyof typeof tabContent].icon;
  const content = tabContent[activeTab as keyof typeof tabContent];

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

  return (
    <div className="min-h-screen bg-theme-background pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Services Introduction */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-theme-secondary">
            Our Services
          </h1>
          <p className="text-xl text-theme-secondary/80 max-w-3xl mx-auto">
            We provide comprehensive equipment solutions for Pilates studios, from expert maintenance 
            to professional installation services. Our team ensures your studio's equipment performs 
            at its peak, keeping your clients safe and satisfied.
          </p>
        </div>

        {/* Tabs */}
        <div id="services-tabs" className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(tabContent).map(([key, { title, icon: Icon }]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-full transition-colors ${
                  activeTab === key
                    ? 'bg-theme-primary text-theme-secondary'
                    : 'bg-theme-background border border-theme-secondary/10 text-theme-secondary/80 hover:border-theme-primary'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-theme-secondary mb-4">
                  {content.title}
                </h2>
                <p className="text-theme-secondary/80 text-lg leading-relaxed">
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
                    <CheckCircle2 className="w-6 h-6 text-theme-primary flex-shrink-0" />
                    <span className="text-theme-secondary/80">{item}</span>
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
              <div className="absolute -bottom-4 -right-4 bg-theme-primary p-6 rounded-xl">
                <IconComponent className="w-6 h-6 text-theme-secondary" />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="text-2xl font-bold text-theme-secondary mb-8">Key Features</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {content.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-theme-background/50 p-6 rounded-xl border border-theme-secondary/10"
                >
                  <h4 className="text-xl font-semibold text-theme-secondary mb-3">{feature.title}</h4>
                  <p className="text-theme-secondary/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Risks Section for Why Maintenance Tab */}
          {activeTab === 'why-maintenance' && (
            <div>
              <h3 className="text-2xl font-bold text-theme-secondary mb-8">Risks of Poor Maintenance</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {content.risks?.map((risk, index) => (
                  <motion.div
                    key={risk.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-theme-primary/10 p-6 rounded-xl border border-theme-primary/20"
                  >
                    <risk.icon className="h-8 w-8 text-theme-primary mb-4" />
                    <h4 className="text-xl font-semibold text-theme-secondary mb-3">{risk.title}</h4>
                    <p className="text-theme-secondary/80">{risk.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Service Options Section */}
          {content.pricing && (
            <div>
              <h3 className="text-2xl font-bold text-theme-secondary mb-8">
                {activeTab === 'installation' ? 'Request a Quote' : 'Service Options'}
              </h3>
              <div className="grid gap-8">
                {content.pricing.map((plan, index) => (
                  <motion.div
                    key={plan.plan}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-theme-background/50 p-8 rounded-xl border border-theme-secondary/10 overflow-hidden"
                    style={{
                      boxShadow: '0 0 40px var(--color-primary)',
                    }}
                  >
                    {/* Radial gradient background */}
                    <div 
                      className="absolute inset-0 opacity-10"
                      style={{
                        background: `radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%)`
                      }}
                    />

                    <div className="relative">
                      <div className="flex items-center gap-3 mb-6">
                        {plan.icon && <plan.icon className="w-8 h-8 text-theme-primary" />}
                        <h4 className="text-2xl font-bold text-theme-secondary">{plan.plan}</h4>
                      </div>

                      {/* Premier Partnership Services and Benefits */}
                      {plan.services && plan.benefits ? (
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h5 className="text-lg font-semibold text-theme-secondary mb-4 flex items-center gap-2">
                              <Wrench className="w-5 h-5 text-theme-primary" />
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
                                  <CheckCircle2 className="w-5 h-5 text-theme-primary flex-shrink-0" />
                                  <span className="text-theme-secondary/80">{service}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-theme-secondary mb-4 flex items-center gap-2">
                              <Star className="w-5 h-5 text-theme-primary" />
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
                                  <CheckCircle2 className="w-5 h-5 text-theme-primary flex-shrink-0" />
                                  <span className="text-theme-secondary/80">{benefit}</span>
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
                              <CheckCircle2 className="w-5 h-5 text-theme-primary flex-shrink-0" />
                              <span className="text-theme-secondary/80">{feature}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}

                      <button 
                        onClick={handleGetStarted}
                        className="w-full px-6 py-3 rounded-lg bg-theme-primary text-theme-secondary hover:opacity-90 transition-opacity flex items-center justify-center"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;