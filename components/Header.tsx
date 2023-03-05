import React from "react";
import { Navbar } from "flowbite-react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  darkMode: boolean;
  isMobile: boolean;
  toggleColorMode: () => void;
}

const Header: React.FC<Props> = ({ darkMode, isMobile, toggleColorMode }) => {
  const router = useRouter();
  
  return (
    <div className="max-w-2xl mx-auto" id="headerDiv">
      <Navbar fluid={true} rounded={true} className="bg-slate-100 dark:bg-gray-900 py-4">
        <Navbar.Brand href="/">
          <img src="/sci-fi.png" className="mr-3 h-9" alt="SB" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Sven Buhre</span>
        </Navbar.Brand>

        <div className="flex ml-auto md:ml-0">
          <button
            onClick={toggleColorMode}
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg p-2.5"
          >
            <svg
              className={`${darkMode ? "" : "hidden"} w-5 h-5`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg
              className={`${!darkMode ? "" : "hidden"} w-5 h-5`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center md:justify-between`}>
          {!isMobile ? (
            <div className={`text-center md:text-left`}>
              <Link
                href="/"
                className={`text-2xl md:text-lg font-semibold block my-2 md:my-0 md:inline-block p-1 md:px-3  ${
                  router.pathname === "/" ? "text-sky-500 dark:text-white" : "dark:text-slate-400"
                }`}
              >
                Home
              </Link>
              <Link
                href="/cv"
                className={`text-2xl md:text-lg font-semibold block my-2 md:my-0 md:inline-block p-1 md:px-3  ${
                  router.pathname === "/cv" ? "text-sky-500 dark:text-white" : "dark:text-slate-400"
                }`}
              >
                CV
              </Link>
              <Link
                href="/projects"
                className={`text-2xl md:text-lg font-semibold block my-2 md:my-0 md:inline-block p-1 md:px-3 ${
                  router.pathname === "/projects" ? "text-sky-500 dark:text-white" : "dark:text-slate-400"
                }`}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={`text-2xl md:text-lg font-semibold block my-2 md:my-0 md:inline-block p-1 md:px-3 -mb-4 ${
                  router.pathname === "/contact" ? "text-sky-500 dark:text-white" : "dark:text-slate-400"
                }`}
              >
                Contact
              </Link>
            </div>
          ) : null}
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
