import type { productFilter } from "@/components/homeComponents/sideBar/Sidebar"
import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"

export const useProductFilter=()=>{
     const [searchParams,setSearchParams]=useSearchParams()
  const searchFilter = searchParams.get("searchFilter") as productFilter["searchFilter"];
  const feature=searchParams.get("feature") as productFilter['feature']
  const category=searchParams.get("category")as productFilter['category']
  const price=searchParams.get("price")as productFilter['price']
  const sort=searchParams.get("sort")as productFilter['sort']

 const setFilters=useCallback((filters:productFilter)=>{
    setSearchParams((params)=>{
        if (filters.searchFilter !== null && filters.searchFilter !== undefined) {
        params.set("searchFilter", filters.searchFilter);
      }
         if(filters.feature!==null&& filters.feature!==undefined){
            params.set('feature',filters.feature)
        }
         if(filters.category!==null&& filters.category!==undefined){
            params.set('category',filters.category)
        }
         if(filters.price!==null&& filters.price!==undefined){
            params.set('price',filters.price)
        }
         if(filters.sort!==null&& filters.sort!==undefined){
            params.set('sort',filters.sort)
        }
         return params
    })
   
 },[])
 return{
    searchFilter,
    feature,
    category,
    price,
    sort,
    setFilters

 }
}