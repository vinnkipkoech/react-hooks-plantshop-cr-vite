import React, { useState } from "react";

function PlantCard({ plant }) {
  const [soldOut, setSoldOut] = useState(false);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!soldOut ? (
        <button
          className="primary"
          onClick={() => setSoldOut(true)}
        >
          In Stock
        </button>
      ) : (
        <button
          onClick={() => setSoldOut(false)}
        >
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;