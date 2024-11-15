"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'

interface SubItem {
  name: string
  description?: string
  icon: string
  href: string
}

interface Category {
  category?: string
  items: SubItem[]
}

interface NavItemProps {
  name: string
  href: string
  dropdown?: Category[]
  hasFeatureCard?: boolean
  hasTwoColumns?: boolean
  hasThreeColumns?: boolean
  description?: string
  isResourceItem?: boolean
}

const NavItem: React.FC<NavItemProps> = ({ 
  name, 
  href, 
  dropdown, 
  hasFeatureCard, 
  hasTwoColumns, 
  description,
  isResourceItem 
}) => {
  const [isOpen, setIsOpen] = useState(false)

  if (isResourceItem) {
    return (
      <div 
        className="relative group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link href={href} passHref>
          <Button
            variant="ghost"
            className="text-foreground hover:text-primary px-3 py-1.5 rounded-md text-sm font-medium"
          >
            {name}
            {dropdown && <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />}
          </Button>
        </Link>
        <AnimatePresence>
          {dropdown && isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 z-10 mt-2 w-[405px]"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative bg-background p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex flex-col">
                        <p className="text-base font-medium">{name}</p>
                        <p className="text-muted-foreground text-sm">
                          {description}
                        </p>
                      </div>
                      <Link href="https://iscs-website-test.vercel.app/#contact" passHref>
                      <Button size="sm" className="mt-10">
                        Book a call today
                      </Button>
                      </Link>
                    </div>
                    <div className="flex flex-col text-sm h-full justify-end">
                      {dropdown[0].items.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href} 
                          className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                        >
                          <span>{item.name}</span>
                          <MoveRight className="w-4 h-4 text-muted-foreground" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Regular NavItem (non-resource)
  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={href} passHref>
        <Button
          variant="ghost"
          className="text-foreground hover:text-primary px-3 py-1.5 rounded-md text-sm font-medium"
        >
          {name}
          {dropdown && <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />}
        </Button>
      </Link>
      <AnimatePresence>
        {dropdown && isOpen && name === "Industries" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 w-screen max-w-2xl"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative bg-background px-5 py-6">
                <div className="grid grid-cols-2 gap-x-8">
                  {dropdown.map((category, index) => (
                    <div key={category.category || index} className="space-y-4">
                      {category.category && (
                        <h3 className="text-sm font-semibold text-foreground">
                          {category.category}
                        </h3>
                      )}
                      <ul className="space-y-4">
                        {category.items.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} passHref>
                              <Button
                                variant="ghost"
                                className="w-full justify-start text-sm text-muted-foreground hover:text-primary"
                              >
                                <Image
                                  src={item.icon}
                                  alt={`${item.name} icon`}
                                  width={24}
                                  height={24}
                                  className="h-6 w-6 mr-3 flex-shrink-0"
                                />
                                <span className="font-medium">{item.name}</span>
                              </Button>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
{dropdown && isOpen && name === "Services" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 w-screen max-w-3xl"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative bg-background px-5 py-6">
                <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                  {dropdown.map((category, index) => (
                    <div key={category.category || index} className="space-y-4">
                      {category.category && (
                        <h3 className="text-sm font-semibold text-foreground">
                          {category.category}
                        </h3>
                      )}
                      <ul className="space-y-4">
                        {category.items.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} passHref>
                              <Button
                                variant="ghost"
                                className="w-full justify-start text-sm text-muted-foreground hover:text-primary"
                              >
                                <Image
                                  src={item.icon}
                                  alt={`${item.name} icon`}
                                  width={24}
                                  height={24}
                                  className="h-6 w-6 mr-3 flex-shrink-0"
                                />
                                <div className="flex-grow text-left">
                                  <div className="font-medium">{item.name}</div>
                                  {item.description && (
                                    <p className="text-xs line-clamp-2">{item.description}</p>
                                  )}
                                </div>
                              </Button>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {dropdown && isOpen && name !== "Industries" && name !== "Services" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 w-screen max-w-xl"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className={`relative bg-background px-5 py-6 sm:gap-8 sm:p-8 ${hasFeatureCard || hasTwoColumns ? 'grid grid-cols-2 gap-4' : ''}`}>
                <div className={hasTwoColumns ? 'col-span-2 grid grid-cols-2 gap-x-8 gap-y-4' : ''}>
                  {dropdown.map((category, index) => (
                    <div key={category.category || index} className="mb-4 last:mb-0">
                      {category.category && (
                        <h3 className="text-sm font-semibold text-foreground mb-2">
                          {category.category}
                        </h3>
                      )}
                      <ul className="space-y-2">
                        {category.items.map((subItem) => (
                          <li key={subItem.name}>
                            <Link href={subItem.href} passHref>
                              <Button
                                variant="ghost"
                                className="w-full justify-start text-sm text-muted-foreground hover:text-primary"
                              >
                                <Image
                                  src={subItem.icon}
                                  alt={`${subItem.name} icon`}
                                  width={24}
                                  height={24}
                                  className="h-6 w-6 mr-3 flex-shrink-0"
                                />
                                <div className="flex-grow text-left">
                                  <div className="font-medium">{subItem.name}</div>
                                  {subItem.description && (
                                    <p className="text-xs line-clamp-2">{subItem.description}</p>
                                  )}
                                </div>
                              </Button>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {hasFeatureCard && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Image
                      src="/assets/gradcam.jpg"
                      alt="Product feature"
                      width={180}
                      height={180}
                      className="w-full h-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">Featured Product</h3>
                    <p className="text-sm text-gray-600">Hybrid AI Approach: CNNs + Vision Transformers!</p>
                    <Link href="https://ai-ra.vercel.app/" passHref>
                    <Button variant="default" className="mt-4 w-full">Learn More</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// MobileNavItem component
interface MobileNavItemProps extends NavItemProps {
  toggleDropdown: (name: string) => void;
  activeDropdown: string | null;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({
  name,
  href,
  dropdown,
  toggleDropdown,
  activeDropdown,
  isResourceItem
}) => {
  return (
    <div>
      {dropdown ? (
        <Button
          variant="ghost"
          onClick={() => toggleDropdown(name)}
          className="w-full justify-between text-left text-foreground hover:text-primary px-3 py-1.5 rounded-md text-base font-medium"
        >
          {name}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              activeDropdown === name ? 'transform rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </Button>
      ) : (
        <Link href={href} passHref>
          <Button
            variant="ghost"
            className="w-full justify-start text-left text-foreground hover:text-primary px-3 py-1.5 rounded-md text-base font-medium"
          >
            {name}
          </Button>
        </Link>
      )}
      
      {dropdown && activeDropdown === name && (
        <div className="pl-4 space-y-2">
          {dropdown.map((category, index) => (
            <div key={category.category || index}>
              {category.category && (
                <h3 className="text-sm font-semibold text-foreground mt-2 mb-1">
                  {category.category}
                </h3>
              )}
              {category.items.map((item) => (
                <Link key={item.name} href={item.href} passHref>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm text-muted-foreground hover:text-primary"
                  >
                    {isResourceItem ? (
                      <div className="flex justify-between items-center w-full">
                        <span>{item.name}</span>
                        <MoveRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    ) : (
                      <>
                        <Image
                          src={item.icon}
                          alt={`${item.name} icon`}
                          width={24}
                          height={24}
                          className="h-6 w-6 mr-3 flex-shrink-0"
                        />
                        <div className="flex-grow text-left">
                          <div className="font-medium">{item.name}</div>
                          {item.description && (
                            <p className="text-xs line-clamp-2">{item.description}</p>
                          )}
                        </div>
                      </>
                    )}
                  </Button>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleContactClick = () => {
    if (pathname === '/') {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push('/#contact')
    }
  }

  useEffect(() => {
    if (pathname === '/' && window.location.hash === '#contact') {
      setTimeout(() => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [pathname])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const navItems: NavItemProps[] = [
    
    
  
    {
      name: "Services",
      href: "/Services",
      dropdown: [
        {
          category: "AI/ML | Data Engg . & Science",
          items: [
            { name: "AI Strategy", description: "Develop AI-driven solutions", icon: "/assets/ai/ai-strategy.png", href: "/Services/AI-ML#ai-strategy" },
            { name: "Machine Learning Models", description: "Build and deploy ML models", icon: "/assets/ai/ml-models.png", href: "/Services/AI-ML#ml-models" },
          ],
        },

        {
          category: "TIBCO Services",
          items: [
            { name: "Integration Strategy", description: "Expert integration planning", icon: "/assets/tibco/tibco-integration.png", href: "/Services/TIBCO#tibco-integration" },
            // { name: "Training & Development", description: "Empower your team", icon: "/assets/tibco/tibco-consulting.png", href: "/Services/TIBCO#tibco-training" },
            { name: "TIBCO Consulting", description: "Expert TIBCO consulting", icon: "/assets/tibco/tibco-support.png", href: "/Services/TIBCO#tibco-consulting" },
          
          ],
        },

        {
          category: "Cloud Services",
          items: [
            { name: "Scalable Cloud Solutions", description: "Intelligent Business Insights", icon: "/assets/Cloud-Services/internet-cloud-computing.png", href: "/Services/Cloud-Services#cloud-solutions" },
            { name: "Cloud Migration Services", description: "Migration and Modernization ", icon: "/assets/Cloud-Services/cloud-migration.png", href: "/Services/Cloud-Services#cloud-migration" },
           
          ],
        },

        {
          category: "Salesforce Services",
          items: [
            { name: "Implementation", description: "Salesforce CRM integration", icon: "/assets/salesforce/salesforce-implementation.png", href: "/Services/Salesforce#salesforce-crm" },
            { name: "Service Cloud", description: "Salesforce Service Cloud ", icon: "/assets/salesforce/service-cloud.png", href: "/Services/Salesforce#salesforce-servicecloud" }
            ],
        },
      
       
        {
          category: "Oracle Services",
          items: [
            { name: "E-business Suite", description: "Solutions for Oracle", icon: "/assets/Oracle/oracle-ebs.png", href: "/Services/Oracle#oracle-e-business" },
            { name: "Oracle Fusion Cloud", description: "Intelligent Business Insights", icon: "/assets/Oracle/oracle-fusion-cloud.png", href: "/Services/Oracle#oracle-fusion-cloud" },
           
          ],
        },
       
        
        {
          category: "Peoplesoft Solutions",
          items: [
            { 
              name: "Modernizing Operations", 
              description: "Improving system performance", 
              icon: "/assets/Oracle/oracle-peoplesoft-min.png", 
              href: "/Services#oracle-peoplesoft" 
            },
          ]
        },
        {
          category: "Strategic IT Resource Consulting ",
          items: [
            { 
              name: "IT Consulting Services", 
              description: "Expert IT consulting and staffing ", 
              icon: "/assets/staffing/it-consulting.png", 
              href: "/Services/Staffing" 
            },
          ]
        },
       
      ],
      
      hasTwoColumns: true
    },

    {
      name: "Products",
      href: "/Products",
      dropdown: [
        {
          category: "Diabetic Retinopathy Detection G-Nayana ",
          items: [
            { name: "Our Solution", description: "Early detection ", icon: "/assets/G-Nayana/solution.png", href: "https://ai-ra.vercel.app/" },
            { name: "Leveraging AI", description: "AI-powered solution", icon: "/assets/G-Nayana/ai.png", href: "/Products#g-nayana" },
          ],
        },
        
        
          {
          category: "Integrated HRMS",
          items: [
            { name: "i-HRMS", description: "Fast, scalable, and reliable", icon: "/assets/i-HRMS/i-HRMS.png", href: "/Products#i-hrms" },
         ],
        },

        {
          category: "E-Learning Platform",
          items: [
            { name: "Empowering Learning", description: "Interactive  online education.", icon: "/assets/E-Learning/E-Learning.png", href: "/Products#ogcom-elp" },
          ],
        },
        {
          category: "Mi-Ware ",
          items: [
            { name: "Our Solution", description: "Streamlining data flow", icon: "/assets/Mi-Ware/Mi-Ware.png", href: "/Products/#mi-ware" },
            { name: "Low-Cost", description: "Efficient Integration Solutions", icon: "/assets/Mi-Ware/Mi-Ware.png", href: "/Products/Mi-ware#mi-ware" },
          ],
        },
       

      ],
      hasFeatureCard: true
    },
    {
      name: "Industries",
      href: "/Industries",
      dropdown: [
        {
          category: "Commercial Industries",
          items: [
            { name: "Banking & Financial Services", icon: "/assets/Industries/banking.png", href: "/Industries" },
            { name: "Communication Technologies", icon: "/assets/Industries/communication.png", href: "/Industries" },
            { name: "High-Tech & Semiconductor", icon: "/assets/Industries/semiconductor.png", href: "/Industries" },
            { name: "Education", icon: "/assets/Industries/education.png", href: "/Industries" },
          ],
        },
        {
          category: "Enterprise Industries",
          items: [
            { name: "Information Services", icon: "/assets/Industries/it.png", href: "/Industries" },
            { name: "Retail & Consumer Goods", icon: "/assets/Industries/retail.png", href: "/Industries" },
            { name: "Trading & Distribution", icon: "/assets/Industries/trading.png", href: "/Industries" },
            { name: "Industrial Manufacturing", icon: "/assets/Industries/industry.png", href: "/Industries" },
          ],
        },
      ],
      hasTwoColumns: true
    },
    {
      name: "Resources",
      href: "/",
      description: "Valuable insights and tools to help you succeed.",
      isResourceItem: true,
      dropdown: [
        {
          items: [
            { name: "About Us", icon: "/assets/placeholder.svg", href: "/About" },
            { name: "Case Studies", icon: "/assets/placeholder.svg", href: "/Resources/case-studies" },
            { name: "Blog", icon: "/assets/placeholder.svg", href: "/Resources/blog" },
            { name: "Careers", icon: "/assets/placeholder.svg", href: "/Resources/careers" },
          ],
        }
      ]
    },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-background"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform ">
        <div className="flex justify-between h-[70px]">
          <div className="flex items-center">
            <Link href="/" passHref>
           <Image
  src="/assets/logo.svg"
  alt="ISCS Logo"
  width={200}  // Increased from 200
  height={85} // Increased from 84
  className="h-[102px] w-50" // Changed from h-[82px] w-40
/>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 flex-grow justify-center">
            {navItems.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
          <Link href="https://attendance-tracking.vercel.app/Home" passHref>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Log In
            </Button>
            </Link>
            <Button variant="default" onClick={handleContactClick}>
             Contact Us
            </Button>
           
          </div>
          <div className="flex items-center md:hidden">
           
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="ml-2">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.name}
                  {...item}
                  toggleDropdown={toggleDropdown}
                  activeDropdown={activeDropdown}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation