import { useRouter } from "next/router";
import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useState,
} from "react";

export type SearchProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: FunctionComponent<SearchProps> = ({ handleChange }) => {
  // const router = useRouter();
  // const [searchQuery, setSearchQuery] = useState<string>("");

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   router.push(`/your-list-page?search=${encodeURIComponent(searchQuery)}`);
  // };

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
