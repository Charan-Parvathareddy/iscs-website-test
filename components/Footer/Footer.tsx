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
          <p className="font-semibold">Services</p>
          <ul>
            <li>
              <Link href="/Services#ai-ml-solutions" className="hover:text-lightblue">
                AI/ML | Data Engg & Science
              </Link>
            </li>
            <li>
              <Link href="/Services#cloud-services" className="hover:text-lightblue">
                Cloud Services
              </Link>
            </li>
            <li>
              <Link href="/Services#tibco-services" className="hover:text-lightblue">
                TIBCO | API Integrations
              </Link>
            </li>
            <li>
              <Link href="/Services#oracle-peoplesoft" className="hover:text-lightblue">
                PeopleSoft
              </Link>{" "}
              |{" "}
              <Link href="/Services#salesforce-solutions" className="hover:text-lightblue">
                Salesforce
              </Link>{" "}
              |{" "}
              <Link href="/Services#oracle-solutions" className="hover:text-lightblue">
                Oracle
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <p className="font-semibold">Products</p>
          <ul>
            <li>
              <Link href="/Products#g-nayana" className="hover:text-lightblue">
                G-Nayana - Healthcare.AI
              </Link>
            </li>
            <li>
              <Link href="/Products#mi-ware" className="hover:text-lightblue">
                Mi-ware - Integrations
              </Link>
            </li>
            <li>
              <Link href="/Products#i-hrms" className="hover:text-lightblue">
                HRMS.AI
              </Link>
            </li>
            <li>
              <Link href="/Products#ogcom-elp" className="hover:text-lightblue">
                LMS.AI
              </Link>
            </li>
          </ul>
        </div>

        {/* India Section */}
        <div className="footer-section">
          <p className="font-semibold">Corporate Office - India</p>

          <address className="not-italic">
            Level 4, Gumidelli Towers, Old Airport Rd, Begumpet, Hyderabad, TS- 500016, India.
            <br />
            Phone: +91 75695 38823
            <br />
            <a href="mailto:info@iscstech.com" className="hover:text-lightblue">
              Email: info@iscstech.com
            </a>
          </address>
        </div>

        {/* USA Section */}
        <div className="footer-section">
          <p className="font-semibold">Global Office - USA</p>

          <address className="not-italic">
            2055 Limestone Road
            <br /> STE 200-C,
            <br /> Wilmington, Delaware, 19702
            <br />
            Phone: +1-302-725-4554
            <br />
            <a href="mailto:info@iscstech.com" className="hover:text-lightblue">
              Email: info@iscstech.com
            </a>
          </address>
        </div>

        {/* Australia Section */}
        <div className="footer-section">
          <p className="font-semibold">Global Office - Australia</p>

          <address className="not-italic">
            10 Keilor Road,
            <br /> Essendon North,
            <br /> Victoria 3041, Australia.
            <br />
            Phone: +61 302-503-5426
            <br />
            <a href="mailto:info@iscstech.com" className="hover:text-lightblue">
              Email: info@iscstech.com
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
}
