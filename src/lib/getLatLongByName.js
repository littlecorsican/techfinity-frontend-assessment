export async function getLatLongByName({
    name,
    apiKey,
    baseUrl
}) {
    return {
          "name": "Ipoh",
          "local_names": {
              "th": "อีโปะฮ์",
              "bn": "ইপোহ",
              "ja": "イポー",
              "ur": "ایپو",
              "zh": "怡保",
              "fa": "ایپوه",
              "my": "အီပိုးမြို့",
              "ml": "ഇപ്പോഹ്",
              "ta": "ஈப்போ",
              "es": "Ipoh",
              "ko": "이포",
              "he": "איפוה",
              "hi": "इपोह",
              "en": "Ipoh",
              "ar": "إيبوه",
              "ms": "Ipoh",
              "ru": "Ипох"
          },
          "lat": 4.5986817,
          "lon": 101.0900236,
          "country": "MY",
          "state": "Perak"
      }
  


    const url = `${baseUrl}/geo/1.0/direct?q=${encodeURIComponent(name)}&limit=1&appid=${apiKey}`;
    console.log(url);
  
    try {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        return { lat, lon };
      } else {
        throw new Error('No location found');
      }
    } catch (error) {
      console.error('Error', error);
      throw error;
    }
}