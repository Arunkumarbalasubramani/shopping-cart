import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "../src/image.PNG";
import "./Productpage.scss";
import Tooltip from "@mui/material/Tooltip";

import Rating from "@mui/material/Rating";

const Productspage = ({ setExistingCart }) => {
  const [inCartValue, setinCartValue] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [cart, setCart] = useState([]);
  const addtoCart = (name, price, index) => {
    const updatedCart = [...cart, { name: name, price: price }];
    setCart(updatedCart);
    setExistingCart(updatedCart);
    const updatedInCartValue = [...inCartValue];
    updatedInCartValue[index] = true;
    setinCartValue(updatedInCartValue);
  };

  const removefromCart = (name, price, index) => {
    const updatedCart = cart.filter(
      (item) => item.name !== name || item.price !== price
    );
    setCart(updatedCart);
    setExistingCart(updatedCart);
    const updatedInCartValue = [...inCartValue];
    updatedInCartValue[index] = false;
    setinCartValue(updatedInCartValue);
  };

  const productDetails = [
    { id: 1, name: "Fancy Product", price: " $80.00" },
    {
      id: 2,
      name: "Special Item",
      price: "$18.00",
      stars: 4,
    },
    { id: 3, name: "Sale Item", price: "$25.00" },
    {
      id: 4,
      name: "Popular Item",
      price: "$40.00 ",
      stars: 4,
    },
    { id: 5, name: "Sale Item", price: "$25.00" },
    { id: 6, name: "Fancy Product", price: " $280.00" },
    {
      id: 7,
      name: "Special Item",
      price: "$18.00",
      stars: 5,
    },
    {
      id: 8,
      name: "Popular Item",
      price: "$40.00 ",
      stars: 5,
    },
  ];

  return (
    <div className="product-container">
      {productDetails &&
        productDetails.map(({ name, price, id, stars, inCart }, index) => (
          <Card key={index} style={{ width: "18rem", height: "380px" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body className="cardbody">
              <Card.Title>{name}</Card.Title>
              <Card.Text>{price}</Card.Text>
              {stars ? (
                <Rating name="size-small" value={stars} size="small" readOnly />
              ) : null}
              <div className="buttons">
                <Button
                  className="btn btn-danger"
                  onClick={() => {
                    addtoCart(name, price, index);
                  }}
                  disabled={inCartValue[index]}
                >
                  Add to Cart
                </Button>
                {inCartValue[index] ? (
                  <Button
                    className="btn btn-secondary"
                    onClick={() => {
                      removefromCart(name, price, index);
                    }}
                  >
                    Remove
                  </Button>
                ) : null}
              </div>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Productspage;
