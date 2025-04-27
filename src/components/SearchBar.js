import {formatTimestampToDateTime} from "../utils/helper";
import { useState, useRef, useContext } from 'react';
import FloatingLabelInput from "./Shared/FloatingLabel";
import { SearchIcon } from "@govtechmy/myds-react/icon";

function SearchBar({ history }) {
  
    const searchInputRef = useRef("");
    return (
        <div className="max-w-[700px] h-[60px] mx-auto flex flex-row items-center justify-between gap-4">
            <div className="rounded-lg border-none shadow-md flex-1">
                <FloatingLabelInput label="Country" />
            </div>
            <div className="bg-[#6C40B5] w-[60px] h-[60px] rounded flex flex-row items-center justify-center">
                <SearchIcon className="text-white w-[34px] h-[34px]" />
            </div>
        </div>
    );
}
  
export default SearchBar;
  
