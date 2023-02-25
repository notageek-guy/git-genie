import React, { Fragment, useEffect, useState } from "react";
import { GithubUser } from "@/types/types";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCopyOutline } from "react-icons/io5";
import { Octokit } from "@octokit/core";
import useSwr from "swr";
import Card from "@/components/Card";
import copy from "@/utils/copy";
import GoBack from "@/components/Goback";
export default function User() {
  const [user, setUser] = useState<GithubUser>();
  const [removeWhenBack, setRemoveWhenBack] = useState(false);
  const acessToken = process.env.ACCESS_TOKEN;
  const octokit = new Octokit({ auth: acessToken });
  const [repoUrl, setRepoUrl] = useState<string>("");
  const { data } = useSwr(
    user?.login,
    async (username) => {
      const { data } = await octokit.request("GET /users/{username}/repos", {
        username,
      });
      return data;
    },
    { refreshInterval: 1000 }
  );

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
    if (removeWhenBack) {
      localStorage.removeItem("user");
    }
  }, []);

  const router = useRouter();
  const goBack = () => {
    setRemoveWhenBack(true);
    router.back();
  };
 

  return (
    <div className="grid h-screen place-items-center bg-gradient-to-b from-black to-gray-800">
      {user ? (
        <>
          <Card>
            <GoBack goback={goBack} />
            <h1 className="text-2xl font-bold text-center text-gray-900 sm:text-3xl dark:text-white">
              User Details
            </h1>
            <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
              <Image
                src={user.avatar_url as any}
                alt={(user.name as any) || (user.login as any)}
                width={200}
                height={200}
                className="rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
                priority
              />
              <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                Repositories
              </h1>
              <select
                className="max-w-xs p-2 px-4 text-white bg-gray-800 rounded-md sm:max-w-sm md:max-w-md w-[80%] sm:w-[100%]"
                onChange={(e) => setRepoUrl(e.target.value)}
              >
                {data?.map((repo) => {
                  return (
                    <Fragment key={repo.id}>
                      <option value={repo.html_url}>{repo.name}</option>
                    </Fragment>
                  );
                })}
              </select>
              <CopyToClipboard text={repoUrl} onCopy={() => copy()}>
                <button className="px-4 py-2 text-white bg-gray-800 rounded-md">
                  <IoCopyOutline className="inline-block mr-2" />
                  Copy
                </button>
              </CopyToClipboard>
              <ToastContainer />
            </div>
          </Card>
        </>
      ) : null}
    </div>
  );
}




