import clsx from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}


export function formatTimestampToTime(timestamp) {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const hoursStr = hours < 10 ? '0' + hours : hours;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    return `${hoursStr}:${minutesStr} ${ampm}`;
}


export function formatTimestampToDateTime(timestamp) {
    const date = new Date(timestamp);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const dayStr = day < 10 ? '0' + day : day;
    const monthStr = month < 10 ? '0' + month : month;
    const hoursStr = hours < 10 ? '0' + hours : hours;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    return `${dayStr}-${monthStr}-${year} ${hoursStr}:${minutesStr}${ampm}`;
}


export function extractDailyMinMaxTemperatures(data) {
  if (!data?.daily || data.daily.length === 0) {
    return { min: null, max: null };
  }

  let minTemp = Infinity;
  let maxTemp = -Infinity;

  data.daily.forEach(day => {
    if (day.temp?.min !== undefined) {
      minTemp = Math.min(minTemp, day.temp.min);
    }
    if (day.temp?.max !== undefined) {
      maxTemp = Math.max(maxTemp, day.temp.max);
    }
  });

  return { min: minTemp, max: maxTemp };
}
