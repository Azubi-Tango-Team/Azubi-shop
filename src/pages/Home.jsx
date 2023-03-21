import React from "react";
import products from "./products.json";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="products">
          {products.map((product) => {
            return (
              <div key={product.id} className="prodTitle">
                <img src={process.env.PUBLIC_URL +product.image} alt={`Preview of ${product.title}`} />
                <h3>{product.title}</h3>
                <p className="description">{product.description}</p>
                <p>
                  <button className="button">Place Order</button>
                  ${product.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
