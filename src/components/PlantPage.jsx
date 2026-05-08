import React, { useState } from "react"; // ADD useState
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant }) {  // ADD props
  const [searchQuery, setSearchQuery] = useState("");  // ADD this

  // ADD this filtered list
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />  {/* ADD prop */}
      <Search searchQuery={searchQuery} onSearch={setSearchQuery} />  {/* ADD props */}
      <PlantList plants={filteredPlants} />  {/* ADD prop */}
    </main>
  );
}

export default PlantPage;