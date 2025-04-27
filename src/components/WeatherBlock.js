import { formatTimestampToDateTime } from "../utils/helper";
import { useTheme } from "@govtechmy/myds-react/hooks";
import { themes } from "../utils/theme";
import { cn } from "../utils/helper";

function WeatherBlock({ 
    location,
    description,
    temperature,
    humidity,
    time,
    cloudCondition
}) {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col gap-2 relative">
            <img src="sun.png" className="absolute w-[157px] top-[-100px] md:w-[300px] h-auto right-[0px] md:top-[-150px]" />
            <div
                className={cn(
                    "text-left text-base md:text-2xl",
                    theme === "dark" ? themes.dark.textColor : themes.light.textColor
                )}
                >Today's Weather</div>
            {/* Show these in desktop mode */}
            <div className="md:block sm:hidden show-this-in-desktop">
                <div
                    className={cn(
                        "text-left text-[7rem] font-bold",
                        theme === "dark" ? themes.dark.textColor : themes.light.textColorPurple
                    )}
                >
                    {temperature || 26}°
                </div>
                <div className="text-left">
                    H: L:
                </div>
                <div
                    className={cn(
                        "flex flex-row justify-between gap-6",
                        theme === "dark" ? themes.dark.textColor : themes.light.textColorDarkGray
                    )}
                >
                    <div className="font-bold">
                        {location || "Johor, MY"}
                    </div>
                    <div className="">
                        {formatTimestampToDateTime(time) || "01-09-2022 09:41am"}
                    </div>
                    <div className="">
                        Humidity: {humidity || 58}%
                    </div>
                    <div className="">
                        {cloudCondition > 0 ? `Cloud` : "No Cloud"}
                    </div>
                </div>
            </div>
            {/* show this in mobile */}
            <div className="md:hidden sm:flex show-this-in-mobile">
                <div className="flex-1">
                    <div
                        className={cn(
                            "text-left text-6xl font-bold",
                            theme === "dark" ? themes.dark.textColor : themes.light.textColorPurple
                        )}
                    >
                        {temperature || 26}°
                    </div>
                    <div className="text-left">
                        H: L:
                    </div>
                    <div
                        className={cn(
                            "font-bold text-left",
                            theme === "dark" ? themes.dark.textColor : themes.light.textColorDarkGray
                        )}
                    >
                        {location || "Johor, MY"}
                    </div>
                </div>
                <div
                    className={cn(
                        "flex-1 flex flex-col text-xs justify-end gap-2 text-right",
                        theme === "dark" ? themes.dark.textColor : themes.light.textColorDarkGray
                    )}
                >
                    <div className="">
                        {cloudCondition > 0 ? `Cloud` : "No Cloud"}
                    </div>
                    <div className="">
                        Humidity: {humidity || 58}%
                    </div>
                    <div className="">
                        {formatTimestampToDateTime(time) || "01-09-2022 09:41am"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherBlock;
