import MyLogo from "../assets/magoboDevsLogo.png";
import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
      <nav className="bg-neutral-primary md:fixed w-full z-50 top-0 start-0 border-b border-default">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={MyLogo} className="h-12" alt="Company Logo" />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              MagoboDevs
            </span>
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div
             className={`w-full md:block md:w-auto ${isMenuOpen ? 'block bg-neutral-primary border-b border-default shadow-lg' : 'hidden'}`}
             id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a
                  href="#about"
                  className="block py-2 px-4 text-heading rounded-md hover:bg-neutral-tertiary
                  md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 
                  transition duration-300 hover:underline
                  hover:decoration-2 hover:decoration-lightblue-300 hover:underline-offset-2"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#tech-stack"
                  className="block py-2 px-4 text-heading rounded-md hover:bg-neutral-tertiary
                  md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0
                  transition duration-300 hover:underline
                  hover:decoration-2 hover:decoration-lightblue-300 hover:underline-offset-2"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-4 text-heading rounded-md hover:bg-neutral-tertiary
                  md:hover:bg-transparent md:border-0 md:hover:text-fg-brand
                  md:p-0 transition duration-300 hover:underline hover:decoration-2
                  hover:decoration-lightblue-300 hover:underline-offset-2">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-4 text-heading rounded-md hover:bg-neutral-tertiary 
                  md:hover:bg-transparent md:border-0 md:hover:text-fg-brand 
                  md:p-0 transition duration-300
                  hover:underline hover:decoration-2 hover:decoration-lightblue-300
                  hover:underline-offset-2">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavBar