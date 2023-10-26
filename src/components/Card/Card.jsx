import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

export default function Cards({ image, title, price, category, rating }) {
  const [cartCount, setCartCount] = useState(0);
  const increaseCart = () => {
    setCartCount((prev) => prev + 1);
  };
  const decreaseCart = () => {
    if(cartCount>0)
    setCartCount((prev) => prev - 1);
  };
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: 6,
        justifyContent: "center",
        display: "flex",
      }}
    >
      <CardActionArea>
        <CardMedia
          style={{ maxHeight: "400px", width: "auto" }}
          component="img"
          image={image}
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary.main">
            {category}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary.dark">
            $ {price}
          </Typography>
          <Box
            sx={{
              "& > legend": { mt: 1 },
            }}
          >
            <Typography component="legend">Ratings</Typography>
            <Rating name="read-only" value={rating} readOnly />
          </Box>
        </CardContent>
          <div className="mb-2">
            <div className="flex justify-center items-center ">
              <Button onClick={decreaseCart}>-</Button>
              <div>{cartCount}</div>
              <Button onClick={increaseCart}>+</Button>
            </div>
            <div>
              <Button>Add to Cart</Button>
            </div>
          </div>
      </CardActionArea>
    </Card>
  );
}
