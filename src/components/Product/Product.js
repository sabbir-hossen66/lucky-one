import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  //   console.log(props.meal);
  const { product, handleAddToCart } = props;
  const { image, name, price } = product
  return (
    <div className="product-container">
      <img src={image} alt="" />
      <h2>Name: {name}</h2>
      <p>Price: ${price}</p>
      <button className="btn-cart" onClick={() => handleAddToCart(name)}>
        <p className="btn-text">Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
