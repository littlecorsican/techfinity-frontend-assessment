import {formatTimestampToDateTime} from "../utils/helper";
import { useState, useRef, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { SearchIcon, TrashIcon } from "@govtechmy/myds-react/icon";

function SearchHistory({ history }) {
  

    return (
        <>
             <div className="text-left p-4">
                <span className="text-[14px] md:text-[24px]">Search History</span>
             </div>
            <ul className="w-full">
                {
                    history.map((historyItem, index) => (
                        <HistoryItem key={`history_item_${index}`} historyItem={historyItem} />
                    ))
                }
            </ul>
        </>
    );
}
  
export default SearchHistory;
  

function HistoryItem({ historyItem }) {
    const { deleteFromHistory, search } = useContext(WeatherContext);
  
    return (
        <li className="bg-white/40 rounded-[16px] text-black text-left w-full font-arial py-6 sm:text-sm md!text-lg px-4 mb-4">
            {/* show these when in desktop mode */}
            <div className="hidden md:flex justify-between items-center ">
                <div className="flex-1 text-inherit">
                    {historyItem?.name}
                </div>
                <div className="flex flex-1 flex-row justify-end gap-4 items-center flex-shrink-0 text-inherit">
                    <span>{formatTimestampToDateTime(historyItem?.datetime)}</span>
                    <div onClick={() => search(historyItem?.name)} className="rounded-full border-2 border-[#fff] p-2 bg-white hover:bg-gray-300 cursor-pointer shadow-md">
                        <SearchIcon className="w-6 h-6" />
                    </div>
                    <div onClick={() => deleteFromHistory(historyItem?.id)} className="rounded-full border-2 border-[#fff] p-2 bg-white hover:bg-gray-300 cursor-pointer shadow-md">
                        <TrashIcon className="w-6 h-6" />
                    </div>
                </div>
            </div>
            {/* Show these when in mobile mode */}
            <div className="md:hidden flex justify-between items-center ">
                <div className="flex-1 text-inherit block flex flex-col justify-between text-left items-center">
                    <div className="w-full">{historyItem?.name}</div>
                    <div className="text-xs w-full">{formatTimestampToDateTime(historyItem?.datetime)}</div>
                </div>
                <div className="flex flex-1 flex-row justify-end gap-2 md:gap-4 items-center flex-shrink-0 text-inherit">
                    <div onClick={() => search(historyItem?.name)} className="rounded-full border-2 border-[#fff] p-2 bg-white hover:bg-gray-300 cursor-pointer shadow-md">
                        <SearchIcon className="w-6 h-6" />
                    </div>
                    <div onClick={() => deleteFromHistory(historyItem?.id)} className="rounded-full border-2 border-[#fff] p-2 bg-white hover:bg-gray-300 cursor-pointer shadow-md">
                        <TrashIcon className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </li>
      
    )
  }
  