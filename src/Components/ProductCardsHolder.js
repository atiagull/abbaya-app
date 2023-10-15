import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const ProductCardsHolder = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));

  const fetchMoreData = () => {
    // Simulate a fake async API call that adds 20 more records after a delay
    setTimeout(() => {
      setItems(prevItems => [...prevItems, ...Array.from({ length: 10 })]);
    }, 1500);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Spinner />}
        style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '10%', marginRight: '10%' }}>
        {items.map((item, index) => (
          <div  key={index}>
            <ProductCard />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default ProductCardsHolder;
