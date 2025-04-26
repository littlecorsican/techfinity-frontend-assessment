import SectionHeader from './components/SectionHeader';
import SearchHistory from './components/SearchHistory';
import WeatherBlock from './components/WeatherBlock';
import './App.css';
import { getLatLongByName } from './lib/getLatLongByName';
import { getWeatherByLatLong } from './lib/getWeatherByLatLong';
import { useState, useRef, useContext } from 'react';
import { WeatherProvider, WeatherContext } from './context/WeatherContext';
import "@govtechmy/myds-style/full.css";

function Client() {
  const cityRef = useRef("");
  const countryRef = useRef("");
  const { apiUrl, apiKey, weather, setWeather, showNoResult, setShowNoResult, searchHistory } = useContext(WeatherContext);
  
  const search=async()=>{
    try {
      const city = cityRef.current.value;
      const country = countryRef.current.value;
      if (!city && !country) {
        return;
      }
      const { lat, lon } = await getLatLongByName({ name: city, apiKey, baseUrl: apiUrl });
      console.log(lat, lon);
      const weatherData = await getWeatherByLatLong({ lat, lon, apiKey, baseUrl: apiUrl });
    } catch (error) {
      console.error('Error, ', error);
      setShowNoResult(true);
    }
  }

  const clear=()=>{
    cityRef.current.value = ""
    countryRef.current.value = "";
  }
  
  return (
    <div className="App">
      <SectionHeader text="Today's Weather" />
      <section className="flex flex-row justify-start">
        <div className="p-2">
          <label htmlFor='city_input' className='px-2 font-arial text-2xl'>
            City: 
          </label>
          <input type="text" id="city_input" className="border-2 border-black rounded" ref={cityRef} />
        </div>
        <div className="p-2">
          <label htmlFor='city_input' className='px-2 font-arial text-2xl'>
            Country: 
          </label>
          <input type="text" id="country_input" className='border-2 border-black rounded' ref={countryRef} />
        </div>
        <div className="p-2">
          <button onClick={search}>
            Search
          </button>
        </div>
        <div className="p-2">
          <button onClick={clear}>
            Clear
          </button>
        </div>
      </section>
      <WeatherBlock />
      <SearchHistory history={searchHistory} />
    </div>
  );
}

function App() {
  return (
    <WeatherProvider>
      <Client />
    </WeatherProvider>
  );
}

export default App;
