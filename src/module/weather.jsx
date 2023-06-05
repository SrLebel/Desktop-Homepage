import {WiDayCloudyHigh} from "react-icons/wi"
import { useState, useEffect } from 'react';

let city = "Cali";

const url = `https://wttr.in/Cali?format=j1`;


const Api = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTemperature(data.current_condition[0].temp_C);
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
        <p>{temperature} C</p>
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
};

export default Api;