import type { NextPage } from "next";
import Link from "next/link";
import { sanityClient } from "../sanity";

interface HomeDocument {
  name: string;
  personDescriptions: [string];
  aboutMe: string;
  welcomeGreeting: string;
}

interface Props {
  home: [HomeDocument];
}

const Home: NextPage<Props> = ({ home }: Props) => {
  return (
    <div>
      <div className="text-gray-900 dark:text-white text-center max-w-xl mx-auto">
        <div className="flex justify-center items-center">
          <span className="text-md font-black uppercase text-center text-gray-700 dark:text-gray-300 tracking-widest p-3 md:p-5">
            {home.map((homeElement) => homeElement.welcomeGreeting)}
          </span>
        </div>
        <div className="font-black text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
          <p className="p-3">{home.map((homeElement) => homeElement.name)}</p>
          <p className="p-3">{home.map((homeElement) => homeElement.personDescriptions.at(0))}</p>
          <p className="p-3">{home.map((homeElement) => homeElement.personDescriptions.at(1))}</p>
        </div>
        <div className="max-w-2xl mx-auto p-5">
          <p className="text-lg sm:text-xl text-center leading-7 sm:leading-8 text-gray-700 dark:text-gray-300">
            <strong>{home.map((homeElement) => homeElement.aboutMe)}</strong>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col sm:flex-row mt-3 max-w-lg mx-auto items-center">
        <Link
          href="/cv"
          className="py-3 mx-2 my-2 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5  w-3/5 text-center rounded-full bg-sky-500 text-white hover:bg-sky-600 hover:text-white"
        >
          CV
        </Link>
        <Link
          href="/projects"
          className="py-3 mx-2 my-2 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5  w-3/5 text-center rounded-full bg-sky-500 text-white hover:bg-sky-600 hover:text-white"
        >
          PROJECTS
        </Link>
        <Link
          href="/contact"
          className="py-3 mx-2 my-2 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5  w-3/5 text-center rounded-full bg-sky-500 text-white hover:bg-sky-600 hover:text-white"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "home"]{
    welcomeGreeting,
    aboutMe,
    name,
    personDescriptions,
  }`;
  const home = await sanityClient.fetch(query);

  return {
    props: {
      home,
    },
  };
};

export default Home;