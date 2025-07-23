import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import crochetProducts from './crochetData';
import BannerBackground from "../Assets/home-banner-background.png"; 

const ProductShowcase = () => {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate(); // ✅ Add this

  const categories = ["All", "Yarn", "Hook", "Handmade"];

  const filteredProducts = crochetProducts.filter(
    (product) => filter === "All" || product.category === filter
  );

  return (
    <div>
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="Home Banner" />
      </div>

      <div className="category-dropdown">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="catalogue-container">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="catalogue-item"
            onClick={() => navigate(`/product/${product.id}`)} // ✅ Make it clickable
            style={{ cursor: "pointer" }} // Optional: Add pointer cursor
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong className='price'>₦{product.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
