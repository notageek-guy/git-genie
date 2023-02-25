import Link from "next/link";
import React from "react";

import { FaGithub } from "react-icons/fa";
export default function Header() {
  return (
    <div className="max-w-6xl px-2 py-4 mx-auto sm:px-4 sm:py-6">
      <div className="flex flex-col items-center gap-4">
        <h1 className="heading">Git Genie</h1>
        <Link passHref href="https://github.com/notageek-guy/git-genie">
          <button className="px-4 py-2 text-white bg-gray-800 rounded-md">
            <FaGithub className="inline-block mr-2" />
            Star on Github
          </button>
        </Link>
        <div className="flex flex-col w-full max-w-full gap-2 mx-auto sm:max-w-4xl">
          <h1 className="text-4xl font-bold text-center text-white">
            Discover Github users and their repositories
          </h1>
          <p className="text-2xl font-bold text-center text-gray-300">
            <span className="px-2 text-blue-500 ">
              Copy and paste the username
            </span>
            of a github user to search for their repositories
          </p>
        </div>
      </div>
    </div>
  );
}
