import  React,{useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function Cards({ image, title, price, category, rating }) {
    const [cartCount,setCartCount] = useState(0)
  return (
    <Card sx={{ maxWidth: 300,margin:6,justifyContent:'center',display:'flex'  }}>
      <CardActionArea>
        <CardMedia style={{ maxHeight:'400px', width: 'auto'}} component="img" image={image} alt="product" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary.main">
            {category}
          </Typography>
          <Typography variant="subtitle1"  color='text.secondary.dark'>
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
      </CardActionArea>
    </Card>
  );
}
