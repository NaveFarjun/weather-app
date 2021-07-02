import logo from './logo.svg';
import './App.css';
import WeatherDisplay from './components/weather-display/weather-display-comp'
import { Zap } from 'react-feather';

function App() {
  return (
    <div className="App">
      <h2>weather forecast</h2>
      <Zap />
      <WeatherDisplay />
    </div>
  );
}

export default App;
