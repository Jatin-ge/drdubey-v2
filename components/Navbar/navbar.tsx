"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { PhoneIcon } from "lucide-react";

const PHONE_NUMBER_DISPLAY = "+91 89553 73205";
const PHONE_NUMBER_TEL = "+918955373205";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/articles", label: "Articles" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/achievements", label: "Achievements" },
  { href: "/events", label: "Events" },
  { href: "/youtube", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <div className="w-full z-10 bg-[#E2FFF5] dark:text-primary ">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium ">
                    <span>
                      <Image
                        src="/assets/images/logofinalbg.png"
                        alt="Dr. Dheeraj Dubay — Joint Replacement Surgeon, Jaipur"
                        width={150}
                        height={150}
                        className="w-[60%]"
                      />
                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto rounded-md lg:hidden hover:text-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden text-black">
                  <>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="w-full px-4 py-2 -ml-4 hover:text-primary focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <a
                      href={`tel:${PHONE_NUMBER_TEL}`}
                      className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-3 -ml-4 bg-primary text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      Call {PHONE_NUMBER_DISPLAY}
                    </a>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* Desktop menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex font-semibold">
            {navLinks.map((link) => (
              <li key={link.href} className="mr-3 nav__item">
                <Link
                  href={link.href}
                  className="inline-block px-4 py-2 text-lg font-semibold text-gray-800 no-underline rounded-md hover:text-primary focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 items-center space-x-3 lg:flex nav__item text-[#EE8A27]">
          <a
            href={`tel:${PHONE_NUMBER_TEL}`}
            aria-label={`Call ${PHONE_NUMBER_DISPLAY}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>{PHONE_NUMBER_DISPLAY}</span>
          </a>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
