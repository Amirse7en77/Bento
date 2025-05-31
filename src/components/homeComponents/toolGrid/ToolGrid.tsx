// pages/ToolGrid.jsx (or wherever your ToolGrid component is)
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import InfiniteScrollComponent from '@/components/common/infiniteScrollComponent'; // Adjust path if needed

 export interface ToolProps {
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
    const { data, isSuccess, isLoading, isError, error } = useQuery({
        queryKey: ['products'], // Changed queryKey to 'products' for a general list of products
        queryFn: async () => {
            const response = await axios.get("http://localhost:8000/categories");
            // Flatten the nested structure into a single array of tools
            const allTools: ToolProps[] = [];
            response.data.forEach((category: { category: string, tools: ToolProps[] }) => {
                allTools.push(...category.tools);
            });
            return allTools;
        }
    });

    if (isLoading) {
        return <div className="text-center p-4">Loading tools...</div>;
    }

    if (isError) {
        return <div className="text-center p-4 text-red-500">Error loading tools: {error?.message}</div>;
    }

    return (
        <div className="p-4">
            {isSuccess && data && <InfiniteScrollComponent initialProducts={data} />}
        </div>
    );
};

export default ToolGrid;