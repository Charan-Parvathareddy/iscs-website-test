"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
            className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
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
              className="absolute left-0 z-10 mt-2 w-[450px]"
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
                      <Button size="sm" className="mt-10">
                        Book a call today
                      </Button>
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
          className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
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
        {dropdown && isOpen && name !== "Industries" && (
          // Original dropdown rendering for non-Industries items
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 w-screen max-w-md"
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
                      width={200}
                      height={200}
                      className="w-full h-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">Featured Product</h3>
                    <p className="text-sm text-gray-600">Hybrid AI Approach: CNNs + Vision Transformers!</p>
                    <Button variant="default" className="mt-4 w-full">Learn More</Button>
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
          className="w-full justify-between text-left text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
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
            className="w-full justify-start text-left text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const navItems: NavItemProps[] = [
    
    { name: "About Us", href: "/About" },
    
    {
      name: "Services",
      href: "/Services",
      dropdown: [
        {
          category: "AI/ML Solutions",
          items: [
            { name: "AI Strategy", description: "Develop AI-driven solutions", icon: "/assets/ai/ai-strategy.png", href: "/Services" },
            { name: "Machine Learning Models", description: "Build and deploy ML models", icon: "/assets/ai/ml-models.png", href: "/Services" },
          ],
        },
        {
          category: "Salesforce Solutions",
          items: [
            { name: "Implementation", description: "Salesforce CRM integration", icon: "/assets/salesforce/salesforce-implementation.png", href: "/Services" },
            { name: "Service Cloud", description: "Salesforce Service Cloud ", icon: "/assets/salesforce/service-cloud.png", href: "/Services" }
            ],
        },
        {
          category: "TIBCO Services",
          items: [
            { name: "Integration Strategy", description: "Expert integration planning", icon: "/assets/tibco/tibco-integration.png", href: "/Services" },
            { name: "Training & Development", description: "Empower your team", icon: "/assets/tibco/tibco-consulting.png", href: "/Services" },
            { name: "TIBCO Consulting", description: "Expert TIBCO consulting", icon: "/assets/tibco/tibco-support.png", href: "/Services" },
          
          ],
        },
       
        {
          category: "Oracle Solutions",
          items: [
            { name: "E-business Suite", description: "Solutions for Oracle", icon: "/assets/Oracle/oracle-ebs.png", href: "/Services" },
            { name: "Business Analytics", description: "Insightful business analytics", icon: "/assets/Oracle/oracle.png", href: "/Services" },
           { name: "IT Consulting", description: "Expert IT consulting services", icon: "/assets/Oracle/oracle-consulting.png", href: "/Services" },
       
          ],
        },
       
        {
          category: "Professional Staffing Services",
          items: [
            { 
              name: "IT Consulting Services", 
              description: "Expert IT consulting and staffing solutions", 
              icon: "/assets/staffing/it-consulting.png", 
              href: "/Services" 
            },
            { 
              name: "Talent Assessment Management", 
              description: "Comprehensive talent assessment and management services", 
              icon: "/assets/staffing/talent-assessment.png", 
              href: "/Services" 
            }
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
            { name: "Our Solution", description: "Early detection ", icon: "/assets/G-Nayana/solution.png", href: "/Products" },
            { name: "Leveraging AI", description: "AI-powered solution", icon: "/assets/G-Nayana/ai.png", href: "/Products" },
          ],
        },
        
        
          {
          category: "Integrated HRMS",
          items: [
            { name: "i-HRMS", description: "Fast, scalable, and reliable", icon: "/assets/i-HRMS/i-HRMS.png", href: "/Products" },
         ],
        },

        {
          category: "E-Learning Platform",
          items: [
            { name: "Empowering Learning", description: "Interactive  online education.", icon: "/assets/E-Learning/E-Learning.png", href: "/Products" },
          ],
        },
        {
          category: "Mi-Ware ",
          items: [
            { name: "Our Solution", description: "Streamlining data flow", icon: "/assets/Mi-Ware/Mi-Ware.png", href: "/Products" },
            { name: "Low-Cost", description: "Efficient Integration Solutions", icon: "/assets/Mi-Ware/Mi-Ware.png", href: "/Products" },
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
      href: "/Resources",
      description: "Valuable insights and tools to help you succeed.",
      isResourceItem: true,
      dropdown: [
        {
          items: [
            { name: "Case Studies", icon: "/assets/placeholder.svg", href: "/Resources/case-studies" },
            { name: "Blog", icon: "/assets/placeholder.svg", href: "/Resources/whitepapers" },
            { name: "Insights", icon: "/assets/placeholder.svg", href: "/Resources/blog" },
            { name: "Careers", icon: "/assets/placeholder.svg", href: "/Resources/docs" },
          ],
        }
      ]
    },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-background"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" passHref>
              <Image
                src="/assets/logo.svg"
                alt="ISCS Logo"
                width={144}
                height={64}
                className="h-16 w-36"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 flex-grow justify-center">
            {navItems.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Log In
            </Button>
            <Button variant="default">
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