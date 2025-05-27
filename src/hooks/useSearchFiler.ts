import type { searchFilter } from "@/components/homeComponents/sideBar/Sidebar";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export const useSearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") as searchFilter["search"];
  const setSearch = useCallback((filters: searchFilter) => {
    setSearchParams((params) => {
      if (filters.search !== null && filters.search !== undefined) {
        params.set("search", filters.search);
      }

      return params;
    });
  }, []);
  return { search, setSearch };
};
