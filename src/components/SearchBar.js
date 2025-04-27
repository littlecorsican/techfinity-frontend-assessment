import {formatTimestampToDateTime} from "../utils/helper";
import { useState, useRef, useContext } from 'react';
import FloatingLabelInput from "./Shared/FloatingLabel";
import { SearchIcon } from "@govtechmy/myds-react/icon";
import { WeatherContext } from '../context/WeatherContext';
import { useTheme } from "@govtechmy/myds-react/hooks";
import {themes} from "../utils/theme";
import { cn } from "../utils/helper";

function SearchBar() {
    const { setShowNoResult, search } = useContext(WeatherContext);
    const searchInputRef = useRef(null);
    const { theme } = useTheme();

    const handleSearch = async () => {
        try {
            setShowNoResult(false);
            const inputValue = searchInputRef.current.value;
            if (!inputValue) return;
            search(inputValue);
        } catch (error) {
            console.error('Error, ', error);
            setShowNoResult(true);
        }
    }
  
    return (
        <div className="max-w-[360px] md:max-w-[700px] h-[60px] mx-auto flex flex-row items-center justify-between gap-4">
            <div className="rounded-lg border-none shadow-md flex-1">
                <FloatingLabelInput 
                    label="Country" 
                    ref={searchInputRef}
                />
            </div>
            <div className="bg-[#6C40B5] w-[60px] h-[60px] rounded flex flex-row items-center justify-center cursor-pointer" onClick={handleSearch}>
                <SearchIcon className={cn("w-[34px] h-[34px]",
                theme === "dark" ? themes.dark.textColor: themes.light.textColor)} />
            </div>
        </div>
    );
}
  
export default SearchBar;
  
