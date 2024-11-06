import Link from "next/link";
import Image from "next/image";

export function Footer  ()  {
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
       <div className="text-sm   opacity-75">

</div>
        
      </div>
      <div className="flex  gap-6">
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
              <Link href="/Services#oracle-solutions"
               className="opacity-75 hover:opacity-100">
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
        
        <div className="footer-section3">
          
        </div>
      </div>
    </footer>
  );
};