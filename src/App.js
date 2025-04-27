import Content from './components/Content';
import SearchBar from './components/SearchBar';
import './App.css';
import { useState, useRef, useContext } from 'react';
import { WeatherProvider, WeatherContext } from './context/WeatherContext';
// import "@govtechmy/myds-style/full.css";
import { ThemeProvider } from "@govtechmy/myds-react/hooks";
import { ThemeSwitch } from "@govtechmy/myds-react/theme-switch";
import { useTheme } from "@govtechmy/myds-react/hooks";
import {
  Callout,
} from "@govtechmy/myds-react/callout";
import { cn } from './utils/helper';

function Client() {
  const { showNoResult, searchHistory } = useContext(WeatherContext);
  const { theme } = useTheme();

  return (
    <div className={cn(
      "App p-4 min-w-[393px]",
      theme === "dark" ? "dark" : "light"
    )}>
      <div className="p-2 flex justify-center border-none">
        <ThemeSwitch className="" />
      </div>
      <SearchBar />
      {showNoResult && <Callout variant="danger" className="m-4 border-2 border-red-500 text-left text-black bg-red-300">
        Not Found
      </Callout>}
      <Content history={searchHistory} />
    </div>
  );
}

function App() {
  return (
    <WeatherProvider>
      <ThemeProvider>
        <Client />
      </ThemeProvider>
    </WeatherProvider>
  );
}

export default App;
