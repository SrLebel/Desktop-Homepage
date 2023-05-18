import {WiDayCloudyHigh} from "react-icons/wi"
import { useState, useEffect } from 'react';

let city = "Cali";

const url = `https://goweather.herokuapp.com/weather/${city}`;


const Api = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTemperature(data.temperature);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTemperature();
  }, []);

  return (
    <div className="weather">
      <WiDayCloudyHigh className="icon"/>
      {temperature ? (
        <p>{temperature}</p>
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
};

export default Api;