import { useRouter } from "next/router";
import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useState,
} from "react";

export type SearchProps = {
  //no props
};

const Search: FunctionComponent<SearchProps> = ({}) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push(`/your-list-page?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        // placeholder={placeholder}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
