import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import "./App.css";
import { useState } from "react";

// ...data means to copuy over the existing useState
// this means start restaurantState as a copy of ...data
const [restaurantState, setRestaurants] = useState([...data])


function App() {
  return (
    <div className="App">
      <RestaurantsContainer />
    </div>
  );
}

export default App;
