import  { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import ToolCard from "../homeComponents/toolCard/ToolCard";
import LoadingSpinner from "./LoadingSpinner";

export interface InitialProductProps {
  accessibleInIran: boolean;
  aiReview: string;
  expertReview: string;
  id: string;
  likes: string;
  name: string;
  pricing: Array<{
    plan: string;
    price: string;
    features: string;
  }>;
  tags: string[];
  website: string;
}


interface InfiniteScrollComponentProps {
  initialProducts: InitialProductProps[];
}

const InfiniteScrollComponent = ({
  initialProducts,
}: InfiniteScrollComponentProps) => {
  const [items, setItems] = useState<InitialProductProps[]>([]);
  const [displayedItems, setDisplayedItems] = useState<InitialProductProps[]>(
    []
  );
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 8;

  useEffect(() => {
    if (initialProducts) {
      setItems(initialProducts);
      setDisplayedItems(initialProducts.slice(0, itemsPerPage));
      setHasMore(initialProducts.length > itemsPerPage);
    }
  }, [initialProducts]);

  const fetchMoreData = () => {
    if (displayedItems.length >= items.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const nextItems = items.slice(
        displayedItems.length,
        displayedItems.length + itemsPerPage
      );
      setDisplayedItems((prev) => [...prev, ...nextItems]);
    }, 500);
  };

  return (
    <InfiniteScroll
      dataLength={displayedItems.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<LoadingSpinner />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen all the tools.</b>
        </p>
      }
    >
      <h2 className="text-[#0d141c] text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-6 dark:text-white">
        ابزارهای هوش مصنوعی ویژه
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {displayedItems.map((tool) => (
          <ToolCard key={tool.id} {...tool} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
