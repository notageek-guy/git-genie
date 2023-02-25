import React, { useCallback, useState } from "react";
import Searchbar from "./Searchbar";
import { fetcher } from "@/utils/fetcher";
import useSwr from "swr";
import Result from "./Result";
import Loader from "./Loader";
export default function Content() {
  const [searchQuery, setSearchQuery] = useState("");

  const [toggleSearch, setToggleSearch] = useState(false);
  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const { data, error, isLoading } = useSwr(
    toggleSearch ? `https://api.github.com/users/${searchQuery}` : null,
    fetcher,
    {
      refreshInterval: 1000,
    }
  );

  const handleToggleSearch = useCallback(() => {
    setToggleSearch((prev) => !prev);
  }, []);

  return (
    <div className="max-w-4xl mx-auto ">
      <Searchbar
        toggleSearch={handleToggleSearch}
        searchQuery={searchQuery}
        handleSearchQuery={handleSearchQuery}
      />
      {error ? <div>Something went wrong</div> : null}
      {isLoading ? <Loader /> : data ? <Result data={data} /> : null}
    </div>
  );
}
