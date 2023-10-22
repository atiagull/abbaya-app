import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Container, Typography} from "@mui/material";
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const ProductCardsHolder = () => {
  const [items, setItems] = useState(Array.from({ length: 10 }));

  const fetchMoreData = () => {
    // Simulate a fake async API call that adds 20 more records after a delay
    if(items.length>30){
      return;
    }
    setTimeout(() => {
      setItems(prevItems => [...prevItems, ...Array.from({ length: 10 })]);
    }, 1500);
  };

  return (
      <Container sx ={{marginTop : 10}}><Typography variant='h3' component="div" sx={{textAlign : 'center'}}> Our Collections</Typography>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={items.length<30}
        loader={<Spinner />}
        style={{ display: 'flex', flexWrap: 'wrap'}}>
        {items.map((item, index) => (
          <div  key={index}>
            <ProductCard />
          </div>
        ))}
      </InfiniteScroll>
      </Container>
  );
}

export default ProductCardsHolder;
