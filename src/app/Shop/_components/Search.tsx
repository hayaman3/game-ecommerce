import React, { FunctionComponent, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export type SearchProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: FunctionComponent<SearchProps> = ({ handleChange }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // const search = searchParams.get('search')
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <input
      type="text"
      // placeholder={placeholder}
      // value={searchQuery}
      onChange={handleChange}
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    />
  );
};

export default Search;
