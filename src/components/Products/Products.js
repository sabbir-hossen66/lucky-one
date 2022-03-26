import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [cart, setCart] = useState([]);
  // console.log(cart);
  const handleAddToCart = (name) => {
    setCart([...cart, name]);
  };
  return (
    <div className="container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
        <div className="button-container">
          <button>Choose 1 camera</button><br />
          <button>Choose again</button>

        </div>
      </div>

    </div>
  );
};

export default Products;












