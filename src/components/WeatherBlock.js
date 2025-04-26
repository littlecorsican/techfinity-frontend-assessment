


function WeatherBlock({ 
    location,
    description,
    temperature,
    humidity,
    time,
    cloudCondition
}) {
  

    return (
        <div className="p-6 rounded-lg max-w-sm">
            <div className="text-gray-700 text-sm">{location}</div>
            <div className="text-3xl font-bold text-black mb-4">{cloudCondition}</div>

            <div className="space-y-2 text-gray-800">
                <div className="flex">
                <span className="w-28 font-semibold">Description:</span>
                <span>{description || "no description"}</span>
                </div>
                <div className="flex">
                <span className="w-28 font-semibold">Temperature:</span>
                <span> {temperature || "0" }</span>
                </div>
                <div className="flex">
                <span className="w-28 font-semibold">Humidity:</span>
                <span> {humidity || 0} </span>
                </div>
                <div className="flex">
                <span className="w-28 font-semibold">Time:</span>
                <span> {time || "12:00 am"} </span>
                </div>
            </div>
        </div>
    );
}

export default WeatherBlock;
