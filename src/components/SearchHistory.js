import {formatTimestampToDateTime} from "../utils/helper";
import { useState, useRef, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { SearchIcon, TrashIcon } from "@govtechmy/myds-react/icon";
import { useTheme } from "@govtechmy/myds-react/hooks";
import {themes} from "../utils/theme";
import { cn } from "../utils/helper";


function SearchHistory({ history }) {
  
    const { theme } = useTheme();

    return (
        <>
             <div className="text-left p-4">
                <span
                    className={cn(
                        "text-xs md:text-xl",
                        theme === "dark" ? themes.dark.textColor : themes.light.textColor
                    )}
                >Search History</span>
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
    const { theme } = useTheme();
  
    return (
        <li
            className={cn(
                "rounded-[16px] backdrop-blur-[20px] text-left w-full font-arial py-6 sm:text-sm md:!text-lg px-4 mb-4",
                theme === "dark" ? `${themes.dark.textColor} ${themes.dark.semiTransparentBg}` : `${themes.light.textColor} ${themes.light.semiTransparentBg}`
            )}
        >
            {/* show these when in desktop mode */}
            <div className="hidden md:flex justify-between items-center ">
                <div className="flex-1 text-inherit">
                    {historyItem?.name}
                </div>
                <div className="flex flex-1 flex-row justify-end gap-4 items-center flex-shrink-0 text-inherit">
                    <span
                        className={cn(
                            theme === "dark"
                            ? themes.dark.semiTransparentTextColor
                            : themes.light.textColor
                        )}
                    >
                        {formatTimestampToDateTime(historyItem?.datetime)}
                    </span>
                    <div
                        onClick={() => search(historyItem?.name)}
                        className={cn(
                            "rounded-full border-2 p-2 hover:bg-gray-300 cursor-pointer shadow-md",
                            theme === "dark" ? `${themes.dark.transparentBg} ${themes.dark.semiTransparentTextColor} ${themes.dark.semiTransparentBorderColor}` : `${themes.light.backgroundWhite} ${themes.light.textColorDarkGray} border-none`
                        )}
                    >
                        <SearchIcon className="w-6 h-6" />
                    </div>
                    <div
                        onClick={() => deleteFromHistory(historyItem?.id)}
                        className={cn(
                            "rounded-full border-2 p-2 hover:bg-gray-300 cursor-pointer shadow-md",
                            theme === "dark" ? `${themes.dark.transparentBg} ${themes.dark.semiTransparentTextColor} ${themes.dark.semiTransparentBorderColor}` : `${themes.light.backgroundWhite} ${themes.light.textColorDarkGray} border-none`
                        )}
                    >
                        <TrashIcon className="w-6 h-6" />
                    </div>
                </div>
            </div>
            {/* Show these when in mobile mode */}
            <div className="md:hidden flex justify-between items-center ">
                <div className="flex-1 text-inherit block flex flex-col justify-between text-left items-center">
                    <div className="w-full">{historyItem?.name}</div>
                    <div
                        className={cn(
                            "text-xs w-full",
                            theme === "dark"
                            ? themes.dark.semiTransparentTextColor
                            : themes.light.textColor
                        )}
                    >
                        {formatTimestampToDateTime(historyItem?.datetime)}
                    </div>
                </div>
                <div className="flex flex-1 flex-row justify-end gap-2 md:gap-4 items-center flex-shrink-0 text-inherit">
                    <div
                        onClick={() => search(historyItem?.name)}
                        className={cn(
                            "rounded-full border-2 p-2 hover:bg-gray-300 cursor-pointer shadow-md",
                            theme === "dark"
                            ? `${themes.dark.transparentBg} ${themes.dark.semiTransparentTextColor} ${themes.dark.semiTransparentBorderColor}`
                            : `${themes.light.backgroundWhite} ${themes.light.textColorDarkGray} border-none`
                        )}
                        >
                        <SearchIcon className="w-6 h-6" />
                    </div>
                    <div
                        onClick={() => deleteFromHistory(historyItem?.id)}
                        className={cn(
                            "rounded-full border-2 p-2 hover:bg-gray-300 cursor-pointer shadow-md",
                            theme === "dark"
                            ? `${themes.dark.transparentBg} ${themes.dark.semiTransparentTextColor} ${themes.dark.semiTransparentBorderColor}`
                            : `${themes.light.backgroundWhite} ${themes.light.textColorDarkGray} border-none`
                        )}
                        >
                            <TrashIcon className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </li>
      
    )
  }
  