export async function getLatLongByName({
    name,
    apiKey,
    baseUrl
}) {
  // throw new Error(`HTTP error! Status:`); # uncomment this line to simulate error

    const url = `${baseUrl}/geo/1.0/direct?q=${encodeURIComponent(name)}&limit=1&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon, name, country } = data[0];
        return { lat, lon, name, country };
      } else {
        throw new Error('No location found');
      }
    } catch (error) {
      console.error('Error', error);
      throw error;
    }
}