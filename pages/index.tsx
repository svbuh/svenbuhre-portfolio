import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { sanityClient } from "../sanity";

interface HomeDocument {
  title: string;
  name: string;
  personDescriptionFirst: string;
  personDescriptionSecond: string;
  aboutMe: string;
}

interface Props {
  home: [HomeDocument];
}

const Home: NextPage<Props> = ({ home }: Props) => {
  console.log(home);

  return (
    <div>
      <Head>
        <title>Sven Buhre - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="h-screen">
        <div className="text-gray-900 dark:text-white text-center">
          <div className="flex justify-center items-center">
            <span className="text-md font-black uppercase text-center text-gray-500 dark:text-gray-400 tracking-widest p-3 md:p-5">
              {home.map((homeElement) => homeElement.title)}
            </span>
          </div>
          <div className="font-black text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            <p className="p-3">{home.map((homeElement) => homeElement.name)}</p>
            <p className="p-3">{home.map((homeElement) => homeElement.personDescriptionFirst)}</p>
            <p className="p-3">{home.map((homeElement) => homeElement.personDescriptionSecond)}</p>
          </div>
          <div className="max-w-xl mx-auto p-5">
            <p className="text-lg sm:text-xl text-center leading-7 sm:leading-8 text-gray-700 dark:text-gray-300">
              <strong>{home.map((homeElement) => homeElement.aboutMe)}</strong>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col sm:flex-row mt-6 max-w-xl mx-auto items-center">
          <a
            href="https://google.de"
            target="_blank"
            className="py-3 mx-2 my-2 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5  w-3/5 text-center rounded-full bg-sky-500 text-white hover:bg-sky-600 hover:text-white"
            rel="noopener noreferrer"
          >
            SHOW CV
          </a>
          <a
            href="contact"
            className="py-3 mx-2 my-2 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5  w-3/5 text-center rounded-full bg-sky-500 text-white hover:bg-sky-600 hover:text-white"
          >
            GITHUB REPOSITORY
          </a>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "home"]{
    aboutMe,
    name,
    personDescriptionFirst,
    personDescriptionSecond,
    title,
  }`;
  const home = await sanityClient.fetch(query);

  return {
    props: {
      home,
    },
  };
};

export default Home;
