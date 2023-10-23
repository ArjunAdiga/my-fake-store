import React, { useEffect, useState } from "react";
import Header from "../Header";
import Card from "../Card/Card";

const Home = () => {
  const [products, setProducts] = useState([]);
  
  const getAllProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div >
      <Header />
      <h1 className="text-4xl font-bold text-center mt-8 mb-4">Our Store</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            category={item.category}
            rating={item.rating.rate}
          >

          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
