// Importing needed components
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

// Stateless Function Component (React) Weather Card (base)
const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
  // Reactive Backgrounds
  let highColor = 0,
    lowColor = 0,
    bg = null;

  // Hot weather
  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 200;
    bg = `linear-gradient(
      to top,
      rgba(255, ${highColor}, 0),
      rgba(255, ${Math.abs(lowColor)}, 0)
    )`;
  }

  // Cold weather
  else if (temp <= 12) {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 200;
    bg = `linear-gradient(
      to top,
      rgba(0, ${highColor}, 255),
      rgba(0, ${Math.abs(lowColor)}, 255)
    )`;
  }

  // Card-styles
  const Card = styled.div`
    background: ${bg};
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  // Card-structure
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location getWeather={getWeather} city={city} country={country} />
        <Icon condition={condition} />
        <Condition temp={temp} condition={condition} />
      </Card>
    </motion.div>
  );
};

// Exports
export default WeatherCard;
