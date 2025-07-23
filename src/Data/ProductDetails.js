import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import crochetProducts from "./crochetData";
import BannerBackground from "../Assets/home-banner-background.png"; 

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = crochetProducts.find((item) => item.id === parseInt(id));

  if (!product)
    return <h2 style={{ padding: "2rem", textAlign: "center" }}>Product not found</h2>;

  const whatsappMessage = `I'm interested in booking the crochet style: ${product.name}`;

  return (
    <div className="product-detail-wrapper">
         {/* <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="Home Banner" />
              </div> */}
      <style>
        {`
          .product-detail-wrapper {
            max-width: 1000px;
            margin: 2rem auto;
            padding: 1rem;
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            font-family: 'Segoe UI', sans-serif;
          }

          .product-image {
            flex: 1 1 350px;
          }

          .product-image img {
            width: 100%;
            height: 350px;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          .product-info {
            flex: 1 1 400px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .product-info h1 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }

          .product-info p {
            font-size: 16px;
            margin-bottom: 1rem;
            line-height: 1.5;
          }

          .product-info .price {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            color: #fe9e0d;
          }

          .buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .buttons button {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.2s ease;
          }

          .back-button {
            background-color: #fe9e0d;
            color: #fff;
          }

          .back-button:hover {
            background-color: #333;
          }

          .booking-button {
            background-color: #fe9e0d;
            color: #fff;
          }

          .booking-button:hover {
            background-color: #088a3e;
          }

          @media (max-width: 768px) {
            .product-detail-wrapper {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }

            .product-info {
              align-items: center;
            }

            .buttons {
              justify-content: center;
            }
          }
        `}
      </style>
      
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <div>
          <h1>{product.name}</h1>
          <p><strong>Category:</strong> {product.category}</p>
          <p className="price">₦{product.price}</p>
          <p>{product.description}</p>
        </div>

        <div className="buttons">
          <button className="back-button" onClick={() => navigate(-1)}>← Go Back</button>

          <button
            className="booking-button"
            onClick={() =>
              window.open(
                `https://wa.me/2347039020234?text=${encodeURIComponent(whatsappMessage)}`,
                "_blank"
              )
            }
          >
            Bookings Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
