import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ScienceIcon from '@mui/icons-material/Science';

const BottomNavigation: React.FC = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-4 gap-6 w-full rounded-lg bg-slate-100 dark:bg-gray-800">
      <div className="flex justify-center text-center m-2 ">
        <Link href="/">
          <HomeIcon
            className={`${router.pathname === "/" ? "text-sky-500" : "dark:text-slate-400"}`}
          />
          <span
            className={`${
              router.pathname === "/" ? "text-sky-500" : "dark:text-slate-300 text-slate-700"
            } text-sm font-medium`}
          >
            <br />
            Home
          </span>
        </Link>
      </div>
      <div className="flex justify-center text-center m-2">
        <Link href="/cv">
          <WorkHistoryIcon
            className={`${router.pathname === "/cv" ? "text-sky-500" : "dark:text-slate-400"}`}
          />
          <span
            className={`${
              router.pathname === "/cv" ? "text-sky-500 border-solid border-sky-500" : "dark:text-slate-300 text-slate-700"
            } text-sm font-medium`}
          >
            <br />
            CV
          </span>
        </Link>
      </div>
      <div className="flex justify-center text-center m-2">
        <Link href="/projects">
          <ScienceIcon
            className={`${router.pathname === "/projects" ? "text-sky-500" : "dark:text-slate-400"}`}
          />
          <span
            className={`${
              router.pathname === "/projects" ? "text-sky-500" : "dark:text-slate-300 text-slate-700"
            } text-sm font-medium`}
          >
            <br />
            Projects
          </span>
        </Link>
      </div>
      <div className="flex justify-center text-center m-2">
        <Link href="/contact">
          <AlternateEmailIcon
            className={`${router.pathname === "/contact" ? "text-sky-500" : "dark:text-slate-400"}`}
          />
          <span
            className={`${
              router.pathname === "/contact" ? "text-sky-500" : "dark:text-slate-300 text-slate-700"
            } text-sm font-medium`}
          >
            <br />
            Contact
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
