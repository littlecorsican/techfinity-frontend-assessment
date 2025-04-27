import SectionHeader from './components/SectionHeader';
import SearchHistory from './components/SearchHistory';
import Content from './components/Content';
import SearchBar from './components/SearchBar';
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
  

  const handleClear=()=>{
    cityRef.current.value = ""
    countryRef.current.value = "";
  }
  
  return (
    <div className="App p-4">
      <SearchBar />
      {showNoResult && <Callout variant="danger" className="mx-4 border-2 border-red-500 !text-black">
        Not Found
      </Callout>}
      <Content history={searchHistory} />
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
