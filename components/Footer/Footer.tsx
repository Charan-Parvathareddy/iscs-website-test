import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer>
      <div className="bg-white text-gray-800 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/assets/logo.svg"
                  alt="Logo"
                  width={150}
                  height={150}
                  className="cursor-pointer"
                />
              </Link>
              <p className="text-sm mb-4">Your Trusted Global IT Partner</p>
              <p className="text-xs font-light italic">Experienced | Enriched | Envisioned</p>
              <div className="flex mt-4 space-x-4">
                <a href="https://www.linkedin.com/company/iscs-technologies" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/Services#ai-ml-solutions" className="hover:text-blue-600">
                    AI/ML | Data Engg & Science
                  </Link>
                </li>
                <li>
                  <Link href="/Services#cloud-services" className="hover:text-blue-600">
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link href="/Services#tibco-services" className="hover:text-blue-600">
                    TIBCO | API Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/Services#oracle-peoplesoft" className="hover:text-blue-600">
                    PeopleSoft
                  </Link>{" "}
                  |{" "}
                  <Link href="/Services#oracle-solutions" className="hover:text-blue-600">
                    Oracle
                  </Link>{" "}
                  <Link href="/Services#salesforce-solutions" className="hover:text-blue-600">
                    Salesforce
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://ai-ra.vercel.app/" className="hover:text-blue-600 transition-colors">
                    G-Nayana - Healthcare.AI
                  </Link>
                </li>
                <li>
                  <Link href="/Products#mi-ware" className="hover:text-blue-600 transition-colors">
                    Mi-Ware - Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/Products#i-hrms" className="hover:text-blue-600 transition-colors">
                    i-HRMS.AI
                  </Link>
                </li>
                <li>
                  <Link href="/Products/#ogcom-elp" className="hover:text-blue-600 transition-colors">
                    LMS.AI
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/About" className="hover:text-blue-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/Resources/case-studies" className="hover:text-blue-600 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/Resources/blog" className="hover:text-blue-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/Resources/careers" className="hover:text-blue-600 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="pt-8 text-sm">
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-400">Corporate Office - India</h4>
                <address className="not-italic flex items-start">
                  <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                  <p>Level 4, Gumidelli Towers, Old Airport Rd,
                    <br/> Begumpet, Hyderabad, TS- 500016</p>
                </address>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 flex-shrink-0" />
                  <span>+91 75695 38823</span>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-400">Global Office - USA</h4>
                <address className="not-italic flex items-start">
                  <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                  <p>2055 Limestone Road, STE 200-C,
                    <br/> Wilmington, Delaware, 19702</p>
                </address>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 flex-shrink-0" />
                  <span>+1-302-725-4554</span>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-400">Global Office - Australia</h4>
                <address className="not-italic flex items-start">
                  <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                  <p>10 Keilor Road, Essendon North,
                    <br/> Victoria 3041</p>
                </address>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 flex-shrink-0" />
                  <span>+61 302-503-5426</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-between items-center">
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <div className="flex items-center justify-center md:justify-start">
                  <Mail size={16} className="mr-2 flex-shrink-0" />
                  <a href="mailto:info@iscstech.com" className="hover:text-blue-400 transition-colors">info@iscstech.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center py-8 text-xs">
            <p>&copy; {new Date().getFullYear()} ISCS Technologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;