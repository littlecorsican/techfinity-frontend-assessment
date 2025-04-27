import { useState, createContext } from 'react';
import { getLatLongByName } from '../lib/getLatLongByName';
import { getWeatherByLatLong } from '../lib/getWeatherByLatLong';
import { v4 as uuidv4 } from 'uuid'; 
import { extractDailyMinMaxTemperatures, capitalizeEachWord } from '../utils/helper';



export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const apiUrl = process.env.REACT_APP_WEATHER_API_BASE_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  

  const [weather, setWeather] = useState(null);
  const [showNoResult, setShowNoResult] = useState(false);
  const [theme, setTheme] = useState("light"); // either light or dark , two values only
  const [searchHistory, setSearchHistory] = useState([])
  
  const addToHistory = (inputValue) => {
    const datetime = Date.now();
    const newEntry = {
      id: uuidv4(),
      name: capitalizeEachWord(inputValue),
      datetime
    };
    setSearchHistory(prev => [newEntry, ...prev]);
  };

  const deleteFromHistory = (id) => {
    if (!id) return;
    setSearchHistory(prev => prev.filter(item => item.id !== id));
  };

  const search=async(searchValue)=>{
    try {
      const { lat, lon, name, country } = await getLatLongByName({ name: searchValue, apiKey, baseUrl: apiUrl });
      const weatherData = await getWeatherByLatLong({ lat, lon, apiKey, baseUrl: apiUrl });
      const { current } = weatherData;
      const { humidity, temp, weather, clouds, dt } = current;
      const { max, min } = extractDailyMinMaxTemperatures(weatherData)
      setWeather({
        humidity,
        temperature: temp,
        location: `${name}, ${country}`,
        time: dt,
        weather,
        clouds,
        temperatureData: {
          max,
          min
        }
      })
    } catch (error) {
      console.error('Error, ', error);
      setShowNoResult(true);
    } finally {
      addToHistory(searchValue);
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