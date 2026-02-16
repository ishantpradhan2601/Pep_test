import { useState } from "react";

const useSearch = (data) => {
  const [query, setQuery] = useState("");

  const filtered = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return { query, setQuery, filtered };
};

export default useSearch;
