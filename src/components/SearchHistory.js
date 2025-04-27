import {formatTimestampToDateTime} from "../utils/helper";
import { useState, useRef, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { SearchIcon, TrashIcon } from "@govtechmy/myds-react/icon";

function SearchHistory({ history }) {
  

    return (
        <>
            <div className="text-left p-4 text-2xl">Search History</div>
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
      <li className="bg-white/40 rounded-[16px] text-black text-left w-full font-arial text-2xl py-6 flex justify-between items-center text-lg px-4 mb-4">
        <div className="flex-1">{historyItem?.name}</div>
        <div className="flex flex-row justify-end gap-4 items-center flex-shrink-0">
          {formatTimestampToDateTime(historyItem?.datetime)}
          <div onClick={() => search(historyItem?.name)} className="rounded-full border-2 border-[#fff] p-2 bg-white hover:bg-gray-300 cursor-pointer">
            <SearchIcon className="w-6 h-6" />
          </div>
          <div onClick={() => deleteFromHistory(historyItem)} className="rounded-full border-2 border-[#fff] p-2 bg-white hover:bg-gray-300 cursor-pointer">
            <TrashIcon className="w-6 h-6" />
          </div>
        </div>
      </li>
    )
  }
  