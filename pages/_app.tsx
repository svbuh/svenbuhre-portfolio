import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import BottomNavigation from "../components/BottomNavigation";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      window.innerWidth >= 768 ? setIsMobile(false) : setIsMobile(true);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const preferredTheme = window.localStorage.getItem("theme");
    if (preferredTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else if (preferredTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      // if there is no value in localStorage, set the theme to dark by default
      setDarkMode(true);
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleColorMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <>
      <Head>
        <title>Sven Buhre - Full-Stack Engineer</title>
        <link rel="icon" href="/alien_117750.ico" />
      </Head>
      <div className={`flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 pb-20`}>
        <div className="flex-grow">
          <Header darkMode={darkMode} toggleColorMode={toggleColorMode} isMobile={isMobile} />
          <Component {...pageProps} />
        </div>
        {isMobile ? (
          <div className="fixed bottom-0 left-0 w-full" id="bottomNav">
            <BottomNavigation />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default MyApp;
