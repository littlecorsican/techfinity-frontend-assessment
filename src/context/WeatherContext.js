import { useState, createContext } from 'react';

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const apiUrl = process.env.REACT_APP_WEATHER_API_BASE_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const dummyHistory = [
    { name: "New York, US", datetime: 1714220000000 },
    { name: "Los Angeles, US", datetime: 1714230000000 },
    { name: "Chicago, US", datetime: 1714240000000 },
    { name: "Houston, US", datetime: 1714250000000 },
  ];
  

  const [weather, setWeather] = useState(null);
  const [showNoResult, setShowNoResult] = useState(false);
  const [searchHistory, setSearchHistory] = useState(dummyHistory)
  
    const addToHistory = ({ city, country }) => {
      const name = `${city}, ${country}`;
      const datetime = Date.now();
      setSearchHistory(prev => [{ name, datetime }, ...prev]);
    };

    const deleteFromHistory = (history) => {
      setSearchHistory(prev => prev.filter(item => item.datetime !== history.datetime && item.name !== history.name));
    };

    const searchAgain =()=>{
      console.log("search again")
    }


  
    const value = {
      apiUrl,
      apiKey,
      weather, setWeather,
      showNoResult, setShowNoResult,
      searchHistory,
      addToHistory,
      deleteFromHistory,
      searchAgain
    };
  
    return (
      <WeatherContext.Provider value={value}>
        {children}
      </WeatherContext.Provider>
    );
  }