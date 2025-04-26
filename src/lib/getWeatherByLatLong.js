export async function getWeatherByLatLong({ 
    lat,
    lon,
    apiKey,
    baseUrl,
    exclude = '',
    units = 'metric',
    lang = 'en'
}) {
    try {
      const url = `${baseUrl}/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&lang=${lang}&appid=${apiKey}`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error, ', error);
      throw error;
    }
  }
  