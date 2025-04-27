import {formatTimestampToDateTime} from "../utils/helper";
import { useState, useRef, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { SearchIcon, TrashIcon } from "@govtechmy/myds-react/icon";
import WeatherBlock from "./WeatherBlock";
import  SearchHistory from "./SearchHistory";

function Content({ history }) {
    return (
        <div className="w-min-[360px] w-[360px] md:w-[700px] mt-[200px] min-h-[50vh] mx-auto my-4 flex flex-col justify-between px-8 py-2 rounded-[40px] border-2 border-white/20 shadow-md bg-white/20 py-8">
            <WeatherBlock />
            <SearchHistory history={history} />
        </div>
    );
}
  
export default Content;
  
