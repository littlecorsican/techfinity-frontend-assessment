import { forwardRef } from "react";
import { useTheme } from "@govtechmy/myds-react/hooks";
import { cn } from "../../utils/helper";
import { themes } from "../../utils/theme";

const FloatingLabelInput = forwardRef(({ label, value, onKeyDown}, ref) => {

    const { theme } = useTheme();

  return (
    <div className="relative w-full">
        <input
            type="text"
            value={value}
            className={cn(
                "block w-full px-2.5 h-[60px] bg-white/20 rounded-lg border-none focus:border-none focus:outline-none text-lg",
                theme === "dark" ? themes.dark.textColor : themes.light.textColor
            )}
            placeholder={label}
            ref={ref}
            onKeyDown={onKeyDown}
        />
            <label
                className={cn("absolute text-md text-gray-500 scale-75 top-0 z-10 left-0", theme === "dark" ? "text-white/40" : "text-black/40" )}
            >
            {label}
        </label>
    </div>
  );
});

FloatingLabelInput.displayName = 'FloatingLabelInput';

export default FloatingLabelInput;
