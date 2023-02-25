import { GithubUser } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { SlUserFollow, SlUserFollowing } from "react-icons/sl";
export default function Result({ data }: { data: GithubUser }) {
  const router = useRouter();

  const goToUser = () => {
    localStorage.setItem("user", JSON.stringify(data));
    router.push("/user");
  };

  return (
    <div className="mt-4 card">
      <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
        <Image
          src={data.avatar_url as any}
          alt={(data.name as any) || (data.login as any)}
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          {data.name}
        </h1>
        <h1 className="text-xl font-bold text-center text-gray-900 dark:text-white">
          {data.company}
        </h1>
        <div className="flex flex-row items-center gap-2">
          <SlUserFollow className="w-5 h-5 text-gray-900 dark:text-white" />
          <h1 className="text-lg font-bold text-center text-gray-900 dark:text-white">
            {data.followers}
          </h1>
          <SlUserFollowing className="w-5 h-5 text-gray-900 dark:text-white" />
          <h1 className="text-lg font-bold text-center text-gray-900 dark:text-white">
            {data.following}
          </h1>
        </div>
        <p className="text-lg font-bold text-center text-gray-900 dark:text-white">
          {data.bio}
        </p>
        <div className="flex flex-row items-center gap-2">
          <button
            className="px-4 py-2 text-white bg-gray-800 rounded-md"
            onClick={goToUser}
          >
            Know More
          </button>
          <Link href={data.html_url as any} passHref>
            <button className="px-4 py-2 text-white bg-gray-800 rounded-md">
              User Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
