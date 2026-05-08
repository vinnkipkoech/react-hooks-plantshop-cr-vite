import React, { useState, useEffect } from "react"; // ADD useState, useEffect
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);  // ADD this

  // ADD this entire useEffect
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // ADD this function
  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onAddPlant={handleAddPlant} /> {/* ADD props */}
    </div>
  );
}

export default App;
