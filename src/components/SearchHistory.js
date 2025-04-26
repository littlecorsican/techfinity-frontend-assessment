import SectionHeader from "./SectionHeader";
import {formatTimestampToDateTime} from "../utils/helper";
import { useState, useRef, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { SearchIcon, TrashIcon } from "@govtechmy/myds-react/icon";

function SearchHistory({ history }) {
  

    return (
        <>
            <SectionHeader text="Search History" />
            <ol className="list-decimal pl-5">
                {
                    history.map((history, index) => (
                        <HistoryItem key={`history_item_${index}`} history={history} />
                    ))
                }
            </ol>
        </>
    );
}
  
export default SearchHistory;
  

function HistoryItem({ history }) {

    const { deleteFromHistory, search } = useContext(WeatherContext);

    return (
        <li className="border-b-gray border-b-2 text-left w-full m-4 font-arial text-2xl p-2 flex justify-between">
            <div>{history.name}</div>
            <div className="flex flex-row justify-between gap-8">
                {formatTimestampToDateTime(history.datetime)}
                <div onClick={()=>search(history.name)} className="rounded-full border-2 border-[#fff] p-2 bg-white hover:bg-gray-300 cursor-pointer">
                    <SearchIcon className="w-6 h-6" />
                </div>
                <div onClick={()=>deleteFromHistory(history)} className="rounded-full border-2 border-[#fff] p-2 bg-white hover:bg-gray-300 cursor-pointer">
                    <TrashIcon className="w-6 h-6" />
                </div>
            </div>
        </li>
    )
}