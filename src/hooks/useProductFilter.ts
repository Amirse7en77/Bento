
import type { productFilter } from "./../components/homeComponents/sideBar/SideBar";
import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"

export const useProductFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get("search") as productFilter["search"];
  const feature = searchParams.get("feature") as productFilter['feature']
  const category = searchParams.get("category") as productFilter['category']
  const price = searchParams.get("price") as productFilter['price']
  const sort = searchParams.get("sort") as productFilter['sort']

  // Consolidated setFilters (as you already have)
  const setFilters = useCallback((filters: productFilter) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams); // Create a mutable copy

      if (filters.search !== null && filters.search !== undefined) {
        newParams.set("search", filters.search);
      } else {
        newParams.delete("search"); // Optionally remove if null/undefined
      }

      if (filters.feature !== null && filters.feature !== undefined) {
        newParams.set('feature', filters.feature);
      } else {
        newParams.delete("feature");
      }

      if (filters.category !== null && filters.category !== undefined) {
        newParams.set('category', filters.category);
      } else {
        newParams.delete("category");
      }

      if (filters.price !== null && filters.price !== undefined) {
        newParams.set('price', filters.price);
      } else {
        newParams.delete("price");
      }

      if (filters.sort !== null && filters.sort !== undefined) {
        newParams.set('sort', filters.sort);
      } else {
        newParams.delete("sort");
      }
      return newParams;
    });
  }, [setSearchParams]); // Dependency on setSearchParams is correct

  // Individual setters (optional, but provides more granular control)
  const setSearch = useCallback((value: productFilter['search']) => {
   console.log(value)
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (value !== null && value !== undefined) {
        newParams.set("search", value);
      } else {
        newParams.delete("search");
      }
      return newParams;
    });
  }, [setSearchParams]);

  const setFeature = useCallback((value: productFilter['feature']) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      console.log(value)
      if (value !== null && value !== undefined) {
        newParams.set("feature", value);
      } else {
        newParams.delete("feature");
      }
      return newParams;
    });
  }, [setSearchParams]);

  const setCategory = useCallback((value: productFilter['category']) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (value !== null && value !== undefined) {
        newParams.set("category", value);
      } else {
        newParams.delete("category");
      }
      return newParams;
    });
  }, [setSearchParams]);

  const setPrice = useCallback((value: productFilter['price']) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (value !== null && value !== undefined) {
        newParams.set("price", value);
      } else {
        newParams.delete("price");
      }
      return newParams;
    });
  }, [setSearchParams]);

  const setSort = useCallback((value: productFilter['sort']) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (value !== null && value !== undefined) {
        newParams.set("sort", value);
      } else {
        newParams.delete("sort");
      }
      return newParams;
    });
  }, [setSearchParams]);

  return {
    search,
    feature,
    category,
    price,
    sort,
    setFilters, // Keep this for convenience
    setSearch,
    setFeature,
    setCategory,
    setPrice,
    setSort,
  }
}