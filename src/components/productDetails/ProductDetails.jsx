import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { product } from "../../data";

const ProductDetails = () => {
  const addCart = (name, prix, discount) => {
    alert(
      `The ${name} with the price of ${prix} TND is added to the cart with a discount of ${discount}%`
    );
  };
  return (
    <div>
      <div className="info-cont">
        {/* block d'image */}
        <div className="img-cont">
          <Carousel
            style={{ width: "300px", margin: "5px" }}
            slide={true}
            interval={10000}
          >
            {product.imagesUrl.map((el, i) => (
              <Carousel.Item key={i}>
                <img
                  src={el}
                  alt={`element num ${i}`}
                  style={{ width: "300px", height: "auto" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <p>On Stock {product.quantity} pieces</p>
          <div style={{ display: "flex" }}>
            <Button style={{ width: "15px" }}>+</Button>
            <p style={{ margin: "5px" }}>1</p>
            <Button style={{ width: "15px" }}>-</Button>
          </div>
          <Button
            style={{ margin: "5px", width: "300px" }}
            variant="outline-danger"
            onClick={() =>
              addCart(product.name, product.price, product.remisePerc)
            }
          >
            Add to cart
          </Button>
        </div>
        {/* block description */}
        <div className="desc-cont">
          <h2>{product.name}</h2>
          <p style={{ textDecoration: "line-through" }}>{product.price} TND</p>
          <p style={{ color: "red" }}>Discount {product.remisePerc} %</p>
          <p style={{ color: "green" }}>
            Final Price :{" "}
            {product.price - (product.price * product.remisePerc) / 100} TND
          </p>
          <p>{product.description}</p>
          <div>
            <h4>Device info</h4>
            <p>{product.specs}</p>
          </div>
        </div>
      </div>
      {/* block video */}
      <div className="vid-cont">
        <iframe
          width="560"
          height="315"
          src={product.prodVid}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProductDetails;
