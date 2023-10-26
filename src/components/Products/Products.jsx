import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Cards from "../Card/Card";
import { Button } from "@mui/material";

const Products = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [catPro, setCatPro] = useState([]);
  const fetchCategories = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setAllCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const fetchInitialProd = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setCatPro(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchInitialProd();
  }, []);

  const handleCategoryClick = async (category) => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      console.log(res);
      const data = await res.json();
      setCatPro(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div>
      <Header />   
      <h1 className="text-4xl font-bold text-center mt-8 mb-4">Our Products</h1>
      <div className="flex">
        <div className="w-1/4 bg-blue-500 p-4">
          <h2 className="text-lg font-bold mb-4 text-white">Categories</h2>
          <div className="flex flex-col text-black">
            <Button
              color="inherit"
              className="m-2"
              onClick={() => handleCategoryClick("electronics")}
            >
              {allCategories[0]}
            </Button>
            <Button
              color="inherit"
              className="m-2"
              onClick={() => handleCategoryClick("jewelery")}
            >
              {allCategories[1]}
            </Button>
            <Button
              color="inherit"
              className="m-2"
              onClick={() => handleCategoryClick("men's clothing")}
            >
              {allCategories[2]}
            </Button>
            <Button
              color="inherit"
              className="m-2"
              onClick={() => handleCategoryClick("women's clothing")}
            >
              {allCategories[3]}
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {catPro.map((item) => (
            <Cards
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              category={item.category}
              rating={item.rating.rate}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
