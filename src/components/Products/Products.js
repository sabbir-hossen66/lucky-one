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

  const handleAddToCart = (name) => {
    setCart([...cart, name]);
  };

  const chooseAgain = () => {
    setCart([])
  }
  const chooseOne = () => {
    const random = cart[Math.floor(Math.random() * cart.length)];

    const element = [random];
    setCart(element)

  }


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
          <button className="choose-button" onClick={chooseOne}>Choose 1 camera</button><br />
          <button onClick={chooseAgain}>Choose again</button>

        </div>
      </div>

    </div>
  );
};

export default Products;












