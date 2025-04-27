import { formatTimestampToDateTime } from "../utils/helper";


function WeatherBlock({ 
    location,
    description,
    temperature,
    humidity,
    time,
    cloudCondition
}) {
  

    return (
        <div className="flex flex-col gap-2 relative">
            <img src="sun.png" className="absolute w-[157px] top-[-100px] md:w-[300px] h-auto right-[0px] md:top-[-150px]" />
            <div className="text-left text-black text-base md:!text-2xl">Today's Weather</div>
            {/* Show these in desktop mode */}
            <div className="md:block sm:hidden show-this-in-desktop">
                <div className="text-left text-[7rem] text-[#6C40B5] font-bold">
                    {temperature || 26}°
                </div>
                <div className="text-left">
                    H: L:
                </div>
                <div className="flex flex-row justify-between gap-6 text-[#666666] ">
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
            <div className="md:hidden sm:flex show-this-in-mobile flex-row gap-2">
                <div className="flex-1">
                    <div className="text-left text-6xl text-[#6C40B5] font-bold">
                        {temperature || 26}°
                    </div>
                    <div className="text-left">
                        H: L:
                    </div>
                    <div className="font-bold text-left text-[#666666]">
                        {location || "Johor, MY"}
                    </div>
                </div>
                <div className="flex-1 flex flex-col text-xs justify-end gap-2 text-right text-[#666666] ">
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
