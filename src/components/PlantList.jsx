import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {  // ADD plants prop
  return (
    <ul className="cards">
      {plants.map((plant) => (  // ADD this map
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
