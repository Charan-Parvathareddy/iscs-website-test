import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer
      className="flex flex-wrap items-center w-full p-6 footer gap-7 grow justify-between"
      style={{ borderTop: "1px solid #ffffff20" }}
    >
      <div className="footer-section1 flex flex-col gap-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </Link>
        <div className="text-sm opacity-75"></div>
      </div>
      <div className="flex gap-6">
        <div className="footer-section2">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <p className="font-bold">Services</p>
            <li>
              <br/>
              <Link href="/Services#ai-ml-solutions" className="opacity-75 hover:opacity-100">
                AI/ML | Data Engg & Science
              </Link>
            </li>
            <li>
              <Link href="/Services#cloud-services" className="opacity-75 hover:opacity-100">
                Cloud Services
              </Link>
            </li>
            <li>
              <Link href="/Services#tibco-services" className="opacity-75 hover:opacity-100">
                TIBCO | API Integrations
              </Link>
            </li>
            <li>
              <Link href="/Services#peoplesoft" className="opacity-75 hover:opacity-100">
                Peoplesoft
              </Link>
            </li>
            <li>
              <Link href="/Services#salesforce" className="opacity-75 hover:opacity-100">
                Salesforce
              </Link>
            </li>
            <li>
              <Link href="/Services#oracle" className="opacity-75 hover:opacity-100">
                Oracle
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section3">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <p className="font-bold">Products</p>
            <li>
              <br/>
              <Link href="/Products#healthcare-ai" className="opacity-75 hover:opacity-100">
                Healthcare.AI
              </Link>
            </li>
            <li>
              <Link href="/Products#middleware" className="opacity-75 hover:opacity-100">
                Middleware Integrations
              </Link>
            </li>
            <li>
              <Link href="/Products#hrms-ai" className="opacity-75 hover:opacity-100">
                HRMS.AI
              </Link>
            </li>
            <li>
              <Link href="/Products#lms-ai" className="opacity-75 hover:opacity-100">
                LMS.AI
              </Link>
            </li>
          </ul>
        </div>
        {/* Rest of the footer sections remain unchanged */}
        <div className="footer-section4">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <p className="font-bold">Corporate Office & Delivery Center</p>
            <p className="font-bold">India</p>
            <li className="opacity-75">
              Level 4, Gumidelli Towers, Old Airport Rd,
              <br/>
              Begumpet, Hyderabad, TS- 500016, India.
            </li>
            <li className="opacity-75">Phone: +91 75695 38823</li>
            <li>
              <a href="mailto:info@iscstech.com" className="opacity-75 hover:opacity-100">
                Email: info@iscstech.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section5">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <p className="font-bold">Global Offices</p>
            <p className="font-bold">USA</p>
            <li className="opacity-75">
              2055 Limestone Road STE 200-C,
              <br/>Wilmington, Delaware, 19702
            </li>
            <li className="opacity-75">Phone: +1-302-725-4554</li>
            <li>
              <a href="mailto:info@iscstech.com" className="opacity-75 hover:opacity-100">
                Email: info@iscstech.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section6">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <p className="font-bold">Global Offices</p>
            <p className="font-bold">Australia</p>
            <li className="opacity-75">
              10 Keilor Road, Essendon North,
              <br/> Victoria 3041, Australia.
            </li>
            <li className="opacity-75">Phone: +61 302-503-5426</li>
            <li>
              <a href="mailto:info@iscstech.com" className="opacity-75 hover:opacity-100">
                Email: info@iscstech.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}