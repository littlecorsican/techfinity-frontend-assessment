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
    let month = date.getMonth() + 1; // Month is zero-indexed
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
