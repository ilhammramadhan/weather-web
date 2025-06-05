import React from "react";
import WeatherDisplay from "./components/WeatherDisplay";

const App: React.FC = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <WeatherDisplay />
    </div>
  );
};

export default App;
