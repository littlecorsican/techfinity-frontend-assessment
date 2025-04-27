import { forwardRef } from "react";

const FloatingLabelInput = forwardRef(({ label, value}, ref) => {
  return (
    <div className="relative w-full">
        <input
            type="text"
            value={value}
            className="block w-full px-2.5 h-[60px] text-black bg-white/20 rounded-lg border-none focus:border-none focus:outline-none text-lg"
            placeholder={label}
            ref={ref}
        />
            <label
                className={`absolute text-md text-gray-500 scale-75 top-0 z-10 left-0`}
            >
            {label}
        </label>
    </div>
  );
});

FloatingLabelInput.displayName = 'FloatingLabelInput';

export default FloatingLabelInput;
