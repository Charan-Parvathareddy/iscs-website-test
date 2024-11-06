import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="flex flex-wrap items-center w-full p-6 footer gap-7 grow justify-between "
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
              <Link
                href="/Services#ai-ml-solutions"
                className="opacity-75 hover:opacity-100"
              >
                AI / ML Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/Services#salesforce-solutions"
                className="opacity-75 hover:opacity-100"
              >
                Salesforce Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/Services#tibco-services"
                className="opacity-75 hover:opacity-100"
              >
                TIBCO Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/Services#oracle-solutions"
                className="opacity-75 hover:opacity-100"
              >
                Oracle Solutions
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section3">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <p className="font-bold">Products</p>
            <li>
              <Link
                href="/Products#g-nayana"
                className="opacity-75 hover:opacity-100"
              >
                G-Nayana
              </Link>
            </li>
            <li>
              <Link
                href="/Products#mi-ware"
                className="opacity-75 hover:opacity-100"
              >
                Mi-Ware
              </Link>
            </li>
            <li>
              <Link
                href="/Products#i-hrms"
                className="opacity-75 hover:opacity-100"
              >
                i-HRMS
              </Link>
            </li>
            <li>
              <Link
                href="/Products#ogcom-elp"
                className="opacity-75 hover:opacity-100"
              >
                E-Learning Platform
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section4">
          <p className="font-bold">Get in touch</p>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="font-bold">India</h4>
              <p>
                **Corporate Office & Delivery Center** Level 4, Gumidelli Towers,
                Old Airport Rd, Begumpet, Hyderabad, TS- 500016, India.
              </p>
              <p>Phone: +91 75695 38823</p>
              <p>E-mail: info@iscstech.com</p>
            </div>
            <div>
              <h4 className="font-bold">Canada</h4>
              <p>
                165 Matheson Blvd East, Unit #5A, Mississauga, ON, Canada - L4Z 3K2.
              </p>
              <p>Phone: +1-647-846-2033, +1-416-829-6643</p>
              <p>E-mail: info@iscstech.com</p>
            </div>
            <div>
              <h4 className="font-bold">USA</h4>
              <p>2055 Limestone Road STE 200-C, Wilmington, Delaware, 19702</p>
              <p>Phone: +1-302-725-4554</p>
              <p>E-mail: info@iscstech.com</p>
            </div>
            <div>
              <h4 className="font-bold">Australia</h4>
              <p>10 Keilor Road, Essendon North, Victoria 3041 Australia.</p>
              <p>Phone: +61 302-503-5426</p>
              <p>E-mail: info@iscstech.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}