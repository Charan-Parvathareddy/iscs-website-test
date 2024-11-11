import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="footer-container"
      style={{ borderTop: "1px solid #ffffff20" }}
    >
      <div className="footer-logo-section">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </Link>
      </div>
      
      {/* Main footer content divided into rows */}
      <div className="footer-content">
        <div className="footer-section">
          <p className="font-bold">Services</p>
          <ul>
            <br/>
            <li><Link href="/Services#ai-ml-solutions">AI/ML | Data Engg & Science</Link></li>
            <li><Link href="/Services#cloud-services">Cloud Services</Link></li>
            <li><Link href="/Services#tibco-services">TIBCO | API Integrations</Link></li>
            <li>
              <Link href="/Services#oracle-peoplesoft">PeopleSoft</Link> |
              <Link href="/Services#salesforce-solutions"> Salesforce</Link> |
              <Link href="/Services#oracle-solutions"> Oracle</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <p className="font-bold">Products</p>
          <ul>
            <br/>
            <li><Link href="/Products#g-nayana">Healthcare.AI</Link></li>
            <li><Link href="/Products#mi-ware">Middleware Integrations</Link></li>
            <li><Link href="/Products#i-hrms">HRMS.AI</Link></li>
            <li><Link href="/Products#ogcom-elp">LMS.AI</Link></li>
          </ul>
        </div>

        {/* India Section */}
        <div className="footer-section">
        <p className="font-bold">Corporate Office  </p>
          <p className="font-bold">India</p>
          <address>
            Level 4, Gumidelli Towers, Old Airport Rd, Begumpet, Hyderabad, TS- 500016, India.
            <br />Phone: +91 75695 38823
            <br />
            <a href="mailto:info@iscstech.com">Email: info@iscstech.com</a>
          </address>
        </div>

        {/* USA Section */}
        <div className="footer-section">
        <p className="font-bold">Global Office  </p>
        <br/>
          <p className="font-bold">USA</p>
          <address>
            2055 Limestone Road STE 200-C,
            <br/> Wilmington, Delaware, 19702
            <br />Phone: +1-302-725-4554
            <br />
            <a href="mailto:info@iscstech.com">Email: info@iscstech.com</a>
          </address>
        </div>

        {/* Australia Section */}
        <div className="footer-section">
        <p className="font-bold">Global Office </p>
        <br/>
          <p className="font-bold">Australia</p>
          <address>
            10 Keilor Road, Essendon North,
            <br/> Victoria 3041, Australia.
            <br />Phone: +61 302-503-5426
            <br />
            <a href="mailto:info@iscstech.com">Email: info@iscstech.com</a>
          </address>
        </div>
      </div>
    </footer>
  );
}
