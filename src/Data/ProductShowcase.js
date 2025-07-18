import React, { useState } from 'react';
import crochetProducts from './crochetData';

const ProductShowcase = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Yarn", "Hook", "Handmade", "Style"];

  const filteredProducts = crochetProducts.filter(
    (product) => filter === "All" || product.category === filter
  );

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)}>
            {cat === "Style" ? "Pick Styles" : cat}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              width: "200px",
              borderRadius: "8px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>₦{product.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
