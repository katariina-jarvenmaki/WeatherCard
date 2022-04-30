import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  // The app contents
  return (
    <div className="App">
      <WeatherEngine location="Helsinki, fi" />
    </div>
  );
}

export default App;
