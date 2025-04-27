import {formatTimestampToDateTime} from "../utils/helper";
import { useState, useRef, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { SearchIcon, TrashIcon } from "@govtechmy/myds-react/icon";
import WeatherBlock from "./WeatherBlock";
import  SearchHistory from "./SearchHistory";
import { useTheme } from "@govtechmy/myds-react/hooks";
import { themes } from "../utils/theme";
import { cn } from "../utils/helper";


function Content({ history }) {
    const { theme } = useTheme();
    const { weather } = useContext(WeatherContext);
    return (
            <div
            className={cn(
                "w-min-[360px] w-[360px] md:w-[700px] mt-[200px] min-h-[50vh] mx-auto my-4 flex flex-col justify-between px-8 py-2 rounded-[40px] border-2 shadow-md py-8",
                theme === "dark" ? `${themes.dark.borderNone} bg-black/20` : `${themes.light.borderWhite} bg-white/20`
            )}
            >
            {weather && <WeatherBlock />}
            <SearchHistory history={history} />
        </div>
    );
}
  
export default Content;
  
