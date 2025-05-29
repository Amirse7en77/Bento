import React from 'react';
import ToolCard from '../toolCard/ToolCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

interface toolProps{
    id: string;
  name: string;
  website: string;
  likes: string;
  expertReview: string;
  pricing: Array<{
    plan: string;
    price: string;
    features: string;
  }>;
  tags: string[];
  accessibleInIran: boolean;
  aiReview: string;
}

const ToolGrid: React.FC = () => {
  const {data,isSuccess}=useQuery({
    queryKey:['product'],
    queryFn:()=>axios.get("http://localhost:8000/categories")

  })
 console.log(data?.data)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
       {isSuccess && (
         data.data.map((category:{category:string,tools:[]})=>(
      
     category.tools.map((tool:toolProps,index)=>(
     <ToolCard key={index} {...tool} />
     )) 
     
    ))
       )
   
  }
    </div>
  );
};

export default ToolGrid;