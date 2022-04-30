// Importing needed components
import styled from "@emotion/styled";

// Icon-component structure
const Icon = ({ condition }) => {
  // Component styles
  const Icon = styled.img`
    width: 40%;
  `;

  // Defining icon
  var icon = "";
  switch (condition) {
    case "Clear":
      icon = `./images/Mostly Sunny-2x.png`;
      break;
    case "Clouds":
      icon = `./images/Mostly Cloudy-2x.png`;
      break;
    case "Haze":
      icon = `./images/Haze-2x.png`;
      break;
    case "Hail":
      icon = `./images/Hail-2x.png`;
      break;
    case "Fog":
      icon = `./images/Fog-2x.png`;
      break;
    case "Tornado":
      icon = `./images/Tornado-2x.png`;
      break;
    case "Dust":
      icon = `./images/Dust-2x.png`;
      break;
    case "Mist":
      icon = `./images/Fog-2x.png`;
      break;
    case "Snow":
      icon = `./images/Snow-2x.png`;
      break;
    case "Rain":
      icon = `./images/Rain-2x.png`;
      break;
    case "Drizzle":
      icon = `./images/Drizzle-2x.png`;
      break;
    case "Thunderstorm":
      icon = `./images/Severe Thunderstorm-2x.png`;
      break;
    default:
      icon = `./images/Fog-2x.png`;
      break;
  }
  return <Icon src={icon} alt="Weather Icon" />;
};

// Exports
export default Icon;
