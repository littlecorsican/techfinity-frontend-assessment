import SectionHeader from './components/SectionHeader';
import SearchHistory from './components/SearchHistory';
import WeatherBlock from './components/WeatherBlock';
import './App.css';
import { getLatLongByName } from './lib/getLatLongByName';
import { getWeatherByLatLong } from './lib/getWeatherByLatLong';
import { useState, useRef, useContext } from 'react';
import { WeatherProvider, WeatherContext } from './context/WeatherContext';
import "@govtechmy/myds-style/full.css";
import CustomButton from './components/Shared/CustomButton';
import {
  Callout,
  CalloutAction,
  CalloutTitle,
  CalloutContent,
} from "@govtechmy/myds-react/callout";

function Client() {
  const cityRef = useRef("");
  const countryRef = useRef("");
  const { apiUrl, apiKey, weather, setWeather, showNoResult, setShowNoResult, searchHistory, search } = useContext(WeatherContext);
  
  const handleSearch=async()=>{
    try {
      setShowNoResult(false);
      const city = cityRef.current.value;
      const country = countryRef.current.value;
      if (!city && !country) {
        return;
      }
      search({ city, country });
    } catch (error) {
      console.error('Error, ', error);
      setShowNoResult(true);
    }
  }

  const handleClear=()=>{
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
          <input type="text" id="city_input" className="border-2 border-black rounded w-80" ref={cityRef} />
        </div>
        <div className="p-2">
          <label htmlFor='city_input' className='px-2 font-arial text-2xl'>
            Country: 
          </label>
          <input type="text" id="country_input" className='border-2 border-black rounded w-80' ref={countryRef} />
        </div>
        <div className="p-2">
          <CustomButton onClick={handleSearch}>
            Search
          </CustomButton>
        </div>
        <div className="p-2">
          <CustomButton onClick={handleClear}>
            Clear
          </CustomButton>
        </div>
      </section>
      {showNoResult && <Callout variant="danger" className="mx-4 border-2 border-red-500 !text-black">
        Not Found
      </Callout>}
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
