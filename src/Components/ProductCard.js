/** @jsxImportSource @emotion/react */
import React, { useState } from "react";

import {
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Select,
  MenuItem
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
const ProductCard = () => {
  const [abayaSize, setAbayaSize]= useState(1)
const updateAbayaSize = (e,val) =>{
  setAbayaSize(e.target.value)
}
  return (
    <>
      <Card sx={{ maxWidth: 250 , marginLeft:'20px', marginTop:'100px'}} >
        <CardMedia
          component={"img"}
          height={390}
          image="https://images.unsplash.com/photo-1682195722467-1be20912ee8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Omaya Abaya
          </Typography>
          <Typography gutterBottom variant="body" component="div" >
            Rs.{"1444"}{<SellIcon style={{fontSize:'medium' }}/>}
            </Typography>
            <Select value={abayaSize} displayEmpty style={{ height: '40px', marginBottom: '2px', width:'100%'}} onChange={updateAbayaSize}>
              <MenuItem value={1}>Small</MenuItem>
              <MenuItem value={2}>Medium</MenuItem>
              <MenuItem value={3}>Larg</MenuItem>
            </Select>
            <Button color="secondary" variant="contained" endIcon={<AddShoppingCartIcon/>} style={{backgroundColor:'#664229',width:'100%'}} >
              Add to cart
            </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
