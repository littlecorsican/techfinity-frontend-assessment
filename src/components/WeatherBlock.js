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
            <img src="sun.png" className="absolute w-[300px] h-auto right-[0px] top-[-150px]" />
            <div className="text-left text-black text-2xl">Today's Weather</div>
            <div className="text-left text-[7rem] text-[#6C40B5] font-bold">
                {temperature || 26}°
            </div>
            <div className="text-left">
                H: L:
            </div>
            <div className="flex flex-row justify-between gap-8 text-[#666666]">
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
    );
}

export default WeatherBlock;
