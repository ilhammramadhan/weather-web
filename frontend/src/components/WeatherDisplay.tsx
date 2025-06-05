import React, { useState } from "react";
import { useWeather } from "../hooks/useWeather";

const WeatherDisplay: React.FC = () => {
  const [city, setCity] = useState("London");
  const { data, isLoading, error } = useWeather(city);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      {data && (
        <div>
          <h2>{data.city}</h2>
          <p>Temperature: {data.temperature}°C</p>
          <p>Description: {data.description}</p>
          <p>Humidity: {data.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
