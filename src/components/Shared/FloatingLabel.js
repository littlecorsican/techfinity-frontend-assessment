import { useState } from "react";

function FloatingLabelInput({ label, value, onChange }) {

  return (
    <div className="relative w-full">
        <input
            type="text"
            value={value}
            onChange={onChange}
            className="block w-full px-2.5 h-[60px] text-black bg-white/20 rounded-lg border-none focus:border-none focus:outline-none text-lg"
            placeholder={label}
        />
            <label
                className={`absolute text-md text-gray-500 scale-75 top-0 z-10 left-0`}
            >
            {label}
        </label>
    </div>
  );
}

export default FloatingLabelInput;
