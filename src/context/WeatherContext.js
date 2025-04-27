import { useState, createContext } from 'react';
import { getLatLongByName } from '../lib/getLatLongByName';
import { getWeatherByLatLong } from '../lib/getWeatherByLatLong';
import { v4 as uuidv4 } from 'uuid'; 


export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const apiUrl = process.env.REACT_APP_WEATHER_API_BASE_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const dummyHistory = [
    { id: uuidv4(), name: "New York, US", datetime: 1714220000000 },
    { id: uuidv4(), name: "Los Angeles, US", datetime: 1714230000000 },
    { id: uuidv4(), name: "Chicago, US", datetime: 1714240000000 },
    { id: uuidv4(), name: "Houston, US", datetime: 1714250000000 },
  ];
  

  const [weather, setWeather] = useState(null);
  const [showNoResult, setShowNoResult] = useState(false);
  const [theme, setTheme] = useState("light"); // either light or dark , two values only
  const [searchHistory, setSearchHistory] = useState(dummyHistory)
  
  const addToHistory = (inputValue) => {
    const datetime = Date.now();
    const newEntry = {
      id: uuidv4(),
      name: inputValue,
      datetime
    };
    setSearchHistory(prev => [newEntry, ...prev]);
  };

  const deleteFromHistory = (id) => {
    if (!id) return;
    setSearchHistory(prev => prev.filter(item => item.id !== id));
  };

  const search=async(name)=>{
    try {
      const { lat, lon } = await getLatLongByName({ name, apiKey, baseUrl: apiUrl });
      console.log(lat, lon);
      const weatherData = await getWeatherByLatLong({ lat, lon, apiKey, baseUrl: apiUrl });
      console.log(weatherData);
      const { current } = weatherData;
      const { humidity, temp, weather, clouds } = current;
      setWeather({
        humidity,
        temp,
        weather,
        clouds
      })
    } catch (error) {
      console.error('Error, ', error);
      setShowNoResult(true);
    } finally {
      addToHistory(name);
    }
  }
  
  const value = {
    apiUrl,
    apiKey,
    weather, setWeather,
    showNoResult, setShowNoResult,
    searchHistory,
    addToHistory,
    deleteFromHistory,
    search,
    theme, setTheme
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
}