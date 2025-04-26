export async function getWeatherByLatLong({ 
    lat,
    lon,
    apiKey,
    baseUrl,
    exclude = '',
    units = 'metric',
    lang = 'en'
}) {

  return {
    "lat": 33.44,
    "lon": -94.04,
    "timezone": "America/Chicago",
    "timezone_offset": -18000,
    "current": {
      "dt": 1745684875,
      "sunrise": 1745667160,
      "sunset": 1745715291,
      "temp": 301.19,
      "feels_like": 302.33,
      "pressure": 1019,
      "humidity": 57,
      "dew_point": 291.88,
      "uvi": 4.27,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 3.6,
      "wind_deg": 120,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ]
    },
    "minutely": [
      {
        "dt": 1745684880,
        "precipitation": 0
      },
      {
        "dt": 1745684940,
        "precipitation": 0
      },
      {
        "dt": 1745685000,
        "precipitation": 0
      },
      {
        "dt": 1745685060,
        "precipitation": 0
      },
      {
        "dt": 1745685120,
        "precipitation": 0
      },
      {
        "dt": 1745685180,
        "precipitation": 0
      },
      {
        "dt": 1745685240,
        "precipitation": 0
      },
      {
        "dt": 1745685300,
        "precipitation": 0
      },
      {
        "dt": 1745685360,
        "precipitation": 0
      },
      {
        "dt": 1745685420,
        "precipitation": 0
      },
      {
        "dt": 1745685480,
        "precipitation": 0
      },
      {
        "dt": 1745685540,
        "precipitation": 0
      },
      {
        "dt": 1745685600,
        "precipitation": 0
      },
      {
        "dt": 1745685660,
        "precipitation": 0
      },
      {
        "dt": 1745685720,
        "precipitation": 0
      },
      {
        "dt": 1745685780,
        "precipitation": 0
      },
      {
        "dt": 1745685840,
        "precipitation": 0
      },
      {
        "dt": 1745685900,
        "precipitation": 0
      },
      {
        "dt": 1745685960,
        "precipitation": 0
      },
      {
        "dt": 1745686020,
        "precipitation": 0
      },
      {
        "dt": 1745686080,
        "precipitation": 0
      },
      {
        "dt": 1745686140,
        "precipitation": 0
      },
      {
        "dt": 1745686200,
        "precipitation": 0
      },
      {
        "dt": 1745686260,
        "precipitation": 0
      },
      {
        "dt": 1745686320,
        "precipitation": 0
      },
      {
        "dt": 1745686380,
        "precipitation": 0
      },
      {
        "dt": 1745686440,
        "precipitation": 0
      },
      {
        "dt": 1745686500,
        "precipitation": 0
      },
      {
        "dt": 1745686560,
        "precipitation": 0
      },
      {
        "dt": 1745686620,
        "precipitation": 0
      },
      {
        "dt": 1745686680,
        "precipitation": 0
      },
      {
        "dt": 1745686740,
        "precipitation": 0
      },
      {
        "dt": 1745686800,
        "precipitation": 0
      },
      {
        "dt": 1745686860,
        "precipitation": 0
      },
      {
        "dt": 1745686920,
        "precipitation": 0
      },
      {
        "dt": 1745686980,
        "precipitation": 0
      },
      {
        "dt": 1745687040,
        "precipitation": 0
      },
      {
        "dt": 1745687100,
        "precipitation": 0
      },
      {
        "dt": 1745687160,
        "precipitation": 0
      },
      {
        "dt": 1745687220,
        "precipitation": 0
      },
      {
        "dt": 1745687280,
        "precipitation": 0
      },
      {
        "dt": 1745687340,
        "precipitation": 0
      },
      {
        "dt": 1745687400,
        "precipitation": 0
      },
      {
        "dt": 1745687460,
        "precipitation": 0
      },
      {
        "dt": 1745687520,
        "precipitation": 0
      },
      {
        "dt": 1745687580,
        "precipitation": 0
      },
      {
        "dt": 1745687640,
        "precipitation": 0
      },
      {
        "dt": 1745687700,
        "precipitation": 0
      },
      {
        "dt": 1745687760,
        "precipitation": 0
      },
      {
        "dt": 1745687820,
        "precipitation": 0
      },
      {
        "dt": 1745687880,
        "precipitation": 0
      },
      {
        "dt": 1745687940,
        "precipitation": 0
      },
      {
        "dt": 1745688000,
        "precipitation": 0
      },
      {
        "dt": 1745688060,
        "precipitation": 0
      },
      {
        "dt": 1745688120,
        "precipitation": 0
      },
      {
        "dt": 1745688180,
        "precipitation": 0
      },
      {
        "dt": 1745688240,
        "precipitation": 0
      },
      {
        "dt": 1745688300,
        "precipitation": 0
      },
      {
        "dt": 1745688360,
        "precipitation": 0
      },
      {
        "dt": 1745688420,
        "precipitation": 0
      }
    ],
    "hourly": [
      {
        "dt": 1745683200,
        "temp": 301.19,
        "feels_like": 302.33,
        "pressure": 1019,
        "humidity": 57,
        "dew_point": 291.88,
        "uvi": 4.27,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.44,
        "wind_deg": 91,
        "wind_gust": 3.14,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0.15
      },
      {
        "dt": 1745686800,
        "temp": 300.57,
        "feels_like": 301.69,
        "pressure": 1019,
        "humidity": 59,
        "dew_point": 291.85,
        "uvi": 7.52,
        "clouds": 20,
        "visibility": 10000,
        "wind_speed": 2.75,
        "wind_deg": 107,
        "wind_gust": 3.41,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0.1
      },
      {
        "dt": 1745690400,
        "temp": 300.13,
        "feels_like": 301.28,
        "pressure": 1019,
        "humidity": 61,
        "dew_point": 291.97,
        "uvi": 7.53,
        "clouds": 40,
        "visibility": 10000,
        "wind_speed": 2.83,
        "wind_deg": 121,
        "wind_gust": 3.42,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0.1
      },
      {
        "dt": 1745694000,
        "temp": 300.3,
        "feels_like": 301.5,
        "pressure": 1018,
        "humidity": 61,
        "dew_point": 292.13,
        "uvi": 6.46,
        "clouds": 60,
        "visibility": 10000,
        "wind_speed": 3.15,
        "wind_deg": 131,
        "wind_gust": 3.71,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.54
      },
      {
        "dt": 1745697600,
        "temp": 300.18,
        "feels_like": 301.27,
        "pressure": 1017,
        "humidity": 60,
        "dew_point": 291.75,
        "uvi": 6.24,
        "clouds": 80,
        "visibility": 10000,
        "wind_speed": 3.3,
        "wind_deg": 136,
        "wind_gust": 4.05,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.4,
        "rain": {
          "1h": 0.1
        }
      },
      {
        "dt": 1745701200,
        "temp": 300.09,
        "feels_like": 301.23,
        "pressure": 1016,
        "humidity": 61,
        "dew_point": 292.52,
        "uvi": 3.38,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.21,
        "wind_deg": 147,
        "wind_gust": 4.31,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.66
      },
      {
        "dt": 1745704800,
        "temp": 299.98,
        "feels_like": 301.72,
        "pressure": 1016,
        "humidity": 70,
        "dew_point": 293.96,
        "uvi": 1.84,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.78,
        "wind_deg": 145,
        "wind_gust": 2.8,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.5
      },
      {
        "dt": 1745708400,
        "temp": 298.8,
        "feels_like": 299.27,
        "pressure": 1016,
        "humidity": 71,
        "dew_point": 293.75,
        "uvi": 0.98,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.84,
        "wind_deg": 133,
        "wind_gust": 2.05,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.17
      },
      {
        "dt": 1745712000,
        "temp": 297.93,
        "feels_like": 298.4,
        "pressure": 1016,
        "humidity": 74,
        "dew_point": 292.96,
        "uvi": 0.19,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.32,
        "wind_deg": 115,
        "wind_gust": 2.15,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.22
      },
      {
        "dt": 1745715600,
        "temp": 296.12,
        "feels_like": 296.4,
        "pressure": 1016,
        "humidity": 74,
        "dew_point": 292.15,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.21,
        "wind_deg": 93,
        "wind_gust": 2.08,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.07
      },
      {
        "dt": 1745719200,
        "temp": 294.73,
        "feels_like": 295.24,
        "pressure": 1017,
        "humidity": 88,
        "dew_point": 292.11,
        "uvi": 0,
        "clouds": 100,
        "visibility": 8209,
        "wind_speed": 1.98,
        "wind_deg": 108,
        "wind_gust": 2.85,
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
          }
        ],
        "pop": 1,
        "rain": {
          "1h": 1.34
        }
      },
      {
        "dt": 1745722800,
        "temp": 293.58,
        "feels_like": 294.08,
        "pressure": 1018,
        "humidity": 92,
        "dew_point": 292.12,
        "uvi": 0,
        "clouds": 100,
        "visibility": 8525,
        "wind_speed": 1.97,
        "wind_deg": 135,
        "wind_gust": 2.32,
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
          }
        ],
        "pop": 1,
        "rain": {
          "1h": 2.26
        }
      },
      {
        "dt": 1745726400,
        "temp": 292.98,
        "feels_like": 293.47,
        "pressure": 1018,
        "humidity": 94,
        "dew_point": 291.73,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.45,
        "wind_deg": 89,
        "wind_gust": 1.68,
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
          }
        ],
        "pop": 1,
        "rain": {
          "1h": 1.6
        }
      },
      {
        "dt": 1745730000,
        "temp": 292.43,
        "feels_like": 292.95,
        "pressure": 1018,
        "humidity": 97,
        "dew_point": 291.67,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.7,
        "wind_deg": 71,
        "wind_gust": 5.6,
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
          }
        ],
        "pop": 1,
        "rain": {
          "1h": 1.04
        }
      },
      {
        "dt": 1745733600,
        "temp": 292.13,
        "feels_like": 292.64,
        "pressure": 1018,
        "humidity": 98,
        "dew_point": 291.69,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.68,
        "wind_deg": 93,
        "wind_gust": 5.64,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 1,
        "rain": {
          "1h": 0.25
        }
      },
      {
        "dt": 1745737200,
        "temp": 291.62,
        "feels_like": 292.08,
        "pressure": 1018,
        "humidity": 98,
        "dew_point": 291.36,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.67,
        "wind_deg": 101,
        "wind_gust": 5.27,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.29
      },
      {
        "dt": 1745740800,
        "temp": 291.24,
        "feels_like": 291.69,
        "pressure": 1017,
        "humidity": 99,
        "dew_point": 291.01,
        "uvi": 0,
        "clouds": 70,
        "visibility": 10000,
        "wind_speed": 2.99,
        "wind_deg": 88,
        "wind_gust": 5.89,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 0.87,
        "rain": {
          "1h": 0.33
        }
      },
      {
        "dt": 1745744400,
        "temp": 291.08,
        "feels_like": 291.51,
        "pressure": 1018,
        "humidity": 99,
        "dew_point": 290.94,
        "uvi": 0,
        "clouds": 60,
        "visibility": 10000,
        "wind_speed": 2.63,
        "wind_deg": 84,
        "wind_gust": 5.21,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.62
      },
      {
        "dt": 1745748000,
        "temp": 291.05,
        "feels_like": 291.48,
        "pressure": 1018,
        "humidity": 99,
        "dew_point": 290.96,
        "uvi": 0,
        "clouds": 70,
        "visibility": 6106,
        "wind_speed": 2.67,
        "wind_deg": 89,
        "wind_gust": 5.2,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.38
      },
      {
        "dt": 1745751600,
        "temp": 291.01,
        "feels_like": 291.44,
        "pressure": 1018,
        "humidity": 99,
        "dew_point": 290.96,
        "uvi": 0,
        "clouds": 75,
        "visibility": 5995,
        "wind_speed": 2.51,
        "wind_deg": 86,
        "wind_gust": 4.73,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.16
      },
      {
        "dt": 1745755200,
        "temp": 291.1,
        "feels_like": 291.54,
        "pressure": 1019,
        "humidity": 99,
        "dew_point": 291.02,
        "uvi": 0,
        "clouds": 74,
        "visibility": 5594,
        "wind_speed": 2.61,
        "wind_deg": 84,
        "wind_gust": 4.71,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.02
      },
      {
        "dt": 1745758800,
        "temp": 292.23,
        "feels_like": 292.73,
        "pressure": 1019,
        "humidity": 97,
        "dew_point": 291.82,
        "uvi": 0.37,
        "clouds": 63,
        "visibility": 8521,
        "wind_speed": 2.78,
        "wind_deg": 96,
        "wind_gust": 3.9,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745762400,
        "temp": 293.64,
        "feels_like": 294.17,
        "pressure": 1019,
        "humidity": 93,
        "dew_point": 292.45,
        "uvi": 1.39,
        "clouds": 62,
        "visibility": 10000,
        "wind_speed": 2.54,
        "wind_deg": 117,
        "wind_gust": 3.31,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745766000,
        "temp": 295.68,
        "feels_like": 296.13,
        "pressure": 1019,
        "humidity": 82,
        "dew_point": 292.48,
        "uvi": 3.01,
        "clouds": 59,
        "visibility": 10000,
        "wind_speed": 2.36,
        "wind_deg": 149,
        "wind_gust": 3.69,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745769600,
        "temp": 298.03,
        "feels_like": 298.32,
        "pressure": 1019,
        "humidity": 67,
        "dew_point": 291.64,
        "uvi": 6.01,
        "clouds": 50,
        "visibility": 10000,
        "wind_speed": 2.34,
        "wind_deg": 154,
        "wind_gust": 3.51,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745773200,
        "temp": 299.7,
        "feels_like": 299.7,
        "pressure": 1018,
        "humidity": 57,
        "dew_point": 290.71,
        "uvi": 8.9,
        "clouds": 42,
        "visibility": 10000,
        "wind_speed": 2.8,
        "wind_deg": 157,
        "wind_gust": 4.1,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745776800,
        "temp": 300.69,
        "feels_like": 301.26,
        "pressure": 1018,
        "humidity": 52,
        "dew_point": 289.91,
        "uvi": 10.25,
        "clouds": 34,
        "visibility": 10000,
        "wind_speed": 3.47,
        "wind_deg": 166,
        "wind_gust": 4.91,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745780400,
        "temp": 301.64,
        "feels_like": 301.87,
        "pressure": 1017,
        "humidity": 47,
        "dew_point": 289.35,
        "uvi": 10.08,
        "clouds": 1,
        "visibility": 10000,
        "wind_speed": 3.13,
        "wind_deg": 154,
        "wind_gust": 4.63,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745784000,
        "temp": 302.28,
        "feels_like": 302.5,
        "pressure": 1016,
        "humidity": 46,
        "dew_point": 289.45,
        "uvi": 8.37,
        "clouds": 4,
        "visibility": 10000,
        "wind_speed": 3.33,
        "wind_deg": 141,
        "wind_gust": 4.9,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745787600,
        "temp": 302.54,
        "feels_like": 302.82,
        "pressure": 1016,
        "humidity": 46,
        "dew_point": 289.84,
        "uvi": 5.82,
        "clouds": 3,
        "visibility": 10000,
        "wind_speed": 3.77,
        "wind_deg": 135,
        "wind_gust": 5.11,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745791200,
        "temp": 302,
        "feels_like": 303.24,
        "pressure": 1015,
        "humidity": 55,
        "dew_point": 292.03,
        "uvi": 3.24,
        "clouds": 4,
        "visibility": 10000,
        "wind_speed": 4.19,
        "wind_deg": 124,
        "wind_gust": 5.01,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745794800,
        "temp": 300.58,
        "feels_like": 301.97,
        "pressure": 1015,
        "humidity": 62,
        "dew_point": 292.71,
        "uvi": 1.31,
        "clouds": 5,
        "visibility": 10000,
        "wind_speed": 4.12,
        "wind_deg": 121,
        "wind_gust": 6.85,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745798400,
        "temp": 298.44,
        "feels_like": 298.85,
        "pressure": 1015,
        "humidity": 70,
        "dew_point": 292.66,
        "uvi": 0.33,
        "clouds": 5,
        "visibility": 10000,
        "wind_speed": 3.39,
        "wind_deg": 130,
        "wind_gust": 7.73,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745802000,
        "temp": 296.44,
        "feels_like": 296.57,
        "pressure": 1016,
        "humidity": 67,
        "dew_point": 290.03,
        "uvi": 0,
        "clouds": 2,
        "visibility": 10000,
        "wind_speed": 3.07,
        "wind_deg": 160,
        "wind_gust": 4.65,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745805600,
        "temp": 295.87,
        "feels_like": 295.84,
        "pressure": 1016,
        "humidity": 63,
        "dew_point": 288.64,
        "uvi": 0,
        "clouds": 2,
        "visibility": 10000,
        "wind_speed": 2.8,
        "wind_deg": 159,
        "wind_gust": 2.94,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745809200,
        "temp": 294.81,
        "feels_like": 294.73,
        "pressure": 1016,
        "humidity": 65,
        "dew_point": 288.08,
        "uvi": 0,
        "clouds": 16,
        "visibility": 10000,
        "wind_speed": 2.73,
        "wind_deg": 128,
        "wind_gust": 2.59,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745812800,
        "temp": 293.89,
        "feels_like": 293.9,
        "pressure": 1016,
        "humidity": 72,
        "dew_point": 288.83,
        "uvi": 0,
        "clouds": 37,
        "visibility": 10000,
        "wind_speed": 3.01,
        "wind_deg": 113,
        "wind_gust": 4.3,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745816400,
        "temp": 293.37,
        "feels_like": 293.48,
        "pressure": 1016,
        "humidity": 78,
        "dew_point": 289.54,
        "uvi": 0,
        "clouds": 50,
        "visibility": 10000,
        "wind_speed": 3.37,
        "wind_deg": 136,
        "wind_gust": 7.38,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745820000,
        "temp": 292.97,
        "feels_like": 292.99,
        "pressure": 1016,
        "humidity": 76,
        "dew_point": 288.69,
        "uvi": 0,
        "clouds": 44,
        "visibility": 10000,
        "wind_speed": 3.46,
        "wind_deg": 148,
        "wind_gust": 9.39,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745823600,
        "temp": 292.73,
        "feels_like": 292.73,
        "pressure": 1016,
        "humidity": 76,
        "dew_point": 288.44,
        "uvi": 0,
        "clouds": 9,
        "visibility": 10000,
        "wind_speed": 3.33,
        "wind_deg": 164,
        "wind_gust": 9,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745827200,
        "temp": 292.09,
        "feels_like": 292.18,
        "pressure": 1017,
        "humidity": 82,
        "dew_point": 289.14,
        "uvi": 0,
        "clouds": 16,
        "visibility": 10000,
        "wind_speed": 3.17,
        "wind_deg": 195,
        "wind_gust": 10.7,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745830800,
        "temp": 291.85,
        "feels_like": 292.1,
        "pressure": 1017,
        "humidity": 89,
        "dew_point": 290.02,
        "uvi": 0,
        "clouds": 19,
        "visibility": 10000,
        "wind_speed": 2.96,
        "wind_deg": 201,
        "wind_gust": 9.9,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745834400,
        "temp": 291.67,
        "feels_like": 292.01,
        "pressure": 1017,
        "humidity": 93,
        "dew_point": 290.58,
        "uvi": 0,
        "clouds": 38,
        "visibility": 10000,
        "wind_speed": 2.87,
        "wind_deg": 185,
        "wind_gust": 8.08,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745838000,
        "temp": 291.37,
        "feels_like": 291.75,
        "pressure": 1017,
        "humidity": 96,
        "dew_point": 290.68,
        "uvi": 0,
        "clouds": 52,
        "visibility": 10000,
        "wind_speed": 2.74,
        "wind_deg": 173,
        "wind_gust": 6.59,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745841600,
        "temp": 291.44,
        "feels_like": 291.83,
        "pressure": 1018,
        "humidity": 96,
        "dew_point": 290.97,
        "uvi": 0,
        "clouds": 60,
        "visibility": 10000,
        "wind_speed": 3.12,
        "wind_deg": 173,
        "wind_gust": 9.87,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745845200,
        "temp": 292.85,
        "feels_like": 293.28,
        "pressure": 1018,
        "humidity": 92,
        "dew_point": 291.6,
        "uvi": 0.52,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.69,
        "wind_deg": 175,
        "wind_gust": 10.83,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745848800,
        "temp": 294.74,
        "feels_like": 295.15,
        "pressure": 1018,
        "humidity": 84,
        "dew_point": 292.04,
        "uvi": 1.71,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.27,
        "wind_deg": 188,
        "wind_gust": 8.9,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1745852400,
        "temp": 297.14,
        "feels_like": 297.5,
        "pressure": 1018,
        "humidity": 73,
        "dew_point": 292.08,
        "uvi": 3.8,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.09,
        "wind_deg": 183,
        "wind_gust": 7.21,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      }
    ],
    "daily": [
      {
        "dt": 1745690400,
        "sunrise": 1745667160,
        "sunset": 1745715291,
        "moonrise": 1745663760,
        "moonset": 1745711880,
        "moon_phase": 0.96,
        "summary": "Expect a day of partly cloudy with rain",
        "temp": {
          "day": 300.13,
          "min": 291.57,
          "max": 301.19,
          "night": 292.98,
          "eve": 297.93,
          "morn": 293.88
        },
        "feels_like": {
          "day": 301.28,
          "night": 293.47,
          "eve": 298.4,
          "morn": 294.28
        },
        "pressure": 1019,
        "humidity": 61,
        "dew_point": 291.97,
        "wind_speed": 3.3,
        "wind_deg": 136,
        "wind_gust": 4.31,
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "clouds": 40,
        "pop": 1,
        "rain": 5.62,
        "uvi": 7.53
      },
      {
        "dt": 1745776800,
        "sunrise": 1745753496,
        "sunset": 1745801737,
        "moonrise": 1745752200,
        "moonset": 1745802780,
        "moon_phase": 0,
        "summary": "Expect a day of partly cloudy with rain",
        "temp": {
          "day": 300.69,
          "min": 291.01,
          "max": 302.54,
          "night": 293.89,
          "eve": 298.44,
          "morn": 291.1
        },
        "feels_like": {
          "day": 301.26,
          "night": 293.9,
          "eve": 298.85,
          "morn": 291.54
        },
        "pressure": 1018,
        "humidity": 52,
        "dew_point": 289.91,
        "wind_speed": 4.19,
        "wind_deg": 124,
        "wind_gust": 7.73,
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "clouds": 34,
        "pop": 1,
        "rain": 1.62,
        "uvi": 10.25
      },
      {
        "dt": 1745863200,
        "sunrise": 1745839834,
        "sunset": 1745888183,
        "moonrise": 1745840940,
        "moonset": 1745893860,
        "moon_phase": 0.04,
        "summary": "Expect a day of partly cloudy with clear spells",
        "temp": {
          "day": 301.6,
          "min": 291.37,
          "max": 302.39,
          "night": 295.51,
          "eve": 297.86,
          "morn": 291.44
        },
        "feels_like": {
          "day": 302.02,
          "night": 295.68,
          "eve": 298.08,
          "morn": 291.83
        },
        "pressure": 1016,
        "humidity": 49,
        "dew_point": 289.93,
        "wind_speed": 5.88,
        "wind_deg": 165,
        "wind_gust": 10.83,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": 100,
        "pop": 0,
        "uvi": 9.35
      },
      {
        "dt": 1745949600,
        "sunrise": 1745926173,
        "sunset": 1745974629,
        "moonrise": 1745930160,
        "moonset": 1745984760,
        "moon_phase": 0.08,
        "summary": "There will be partly cloudy today",
        "temp": {
          "day": 300.73,
          "min": 290.41,
          "max": 302.43,
          "night": 297.89,
          "eve": 299.32,
          "morn": 290.41
        },
        "feels_like": {
          "day": 301.64,
          "night": 297.91,
          "eve": 299.32,
          "morn": 290.72
        },
        "pressure": 1016,
        "humidity": 56,
        "dew_point": 291.29,
        "wind_speed": 5.78,
        "wind_deg": 164,
        "wind_gust": 12.18,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": 83,
        "pop": 0,
        "uvi": 10.16
      },
      {
        "dt": 1746036000,
        "sunrise": 1746012512,
        "sunset": 1746061076,
        "moonrise": 1746019800,
        "moonset": 1746075300,
        "moon_phase": 0.11,
        "summary": "You can expect partly cloudy in the morning, with rain in the afternoon",
        "temp": {
          "day": 299.16,
          "min": 291.77,
          "max": 300.2,
          "night": 292.52,
          "eve": 297.43,
          "morn": 291.77
        },
        "feels_like": {
          "day": 299.16,
          "night": 292.99,
          "eve": 297.74,
          "morn": 292.19
        },
        "pressure": 1012,
        "humidity": 66,
        "dew_point": 292.29,
        "wind_speed": 7.51,
        "wind_deg": 178,
        "wind_gust": 14.46,
        "weather": [
          {
            "id": 502,
            "main": "Rain",
            "description": "heavy intensity rain",
            "icon": "10d"
          }
        ],
        "clouds": 99,
        "pop": 1,
        "rain": 13.97,
        "uvi": 11
      },
      {
        "dt": 1746122400,
        "sunrise": 1746098853,
        "sunset": 1746147522,
        "moonrise": 1746109980,
        "moonset": 0,
        "moon_phase": 0.15,
        "summary": "Expect a day of partly cloudy with rain",
        "temp": {
          "day": 298.59,
          "min": 290.63,
          "max": 301.7,
          "night": 292.88,
          "eve": 298.54,
          "morn": 290.63
        },
        "feels_like": {
          "day": 299.07,
          "night": 292.97,
          "eve": 298.96,
          "morn": 290.97
        },
        "pressure": 1012,
        "humidity": 72,
        "dew_point": 293.13,
        "wind_speed": 4.35,
        "wind_deg": 248,
        "wind_gust": 12.14,
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "clouds": 95,
        "pop": 1,
        "rain": 13.28,
        "uvi": 11
      },
      {
        "dt": 1746208800,
        "sunrise": 1746185195,
        "sunset": 1746233969,
        "moonrise": 1746200400,
        "moonset": 1746165240,
        "moon_phase": 0.19,
        "summary": "There will be rain until morning, then partly cloudy",
        "temp": {
          "day": 299,
          "min": 288.77,
          "max": 300.32,
          "night": 292.28,
          "eve": 297.58,
          "morn": 288.77
        },
        "feels_like": {
          "day": 299.05,
          "night": 291.87,
          "eve": 297.85,
          "morn": 288.69
        },
        "pressure": 1015,
        "humidity": 54,
        "dew_point": 289.08,
        "wind_speed": 3.99,
        "wind_deg": 67,
        "wind_gust": 5.71,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 68,
        "pop": 0.59,
        "rain": 0.51,
        "uvi": 11
      },
      {
        "dt": 1746295200,
        "sunrise": 1746271538,
        "sunset": 1746320415,
        "moonrise": 1746290880,
        "moonset": 1746254580,
        "moon_phase": 0.22,
        "summary": "Expect a day of partly cloudy with rain",
        "temp": {
          "day": 293.27,
          "min": 287.17,
          "max": 293.39,
          "night": 290.56,
          "eve": 291.68,
          "morn": 287.17
        },
        "feels_like": {
          "day": 293.3,
          "night": 290.47,
          "eve": 291.76,
          "morn": 286.66
        },
        "pressure": 1015,
        "humidity": 75,
        "dew_point": 288.67,
        "wind_speed": 3.73,
        "wind_deg": 129,
        "wind_gust": 9.63,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 91,
        "pop": 0.29,
        "rain": 0.57,
        "uvi": 11
      }
    ]
  }

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
  