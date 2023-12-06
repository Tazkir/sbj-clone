interface Code {
  code: string | number;
}

export const WeatherIcons = ({ code }: Code) => {
  // Create a mapping between weather codes and icons
  const weatherIcons: { [key: string]: string } = {
    0: 'Clear sky 🌤️',
    1: 'Mainly clear ⛅',
    2: 'Partly cloudy 🌥️',
    3: 'Overcast ☁️',
    45: 'Fog 🌫️',
    48: 'Fog and depositing rime fog 🌫️',
    51: 'Drizzle: Light',
    53: 'Drizzle: Moderate',
    55: 'Drizzle: Dense Intensity',
    56: 'Freezing Drizzle: Light',
    57: 'Freezing Drizzle: Dense Intensity',
    61: 'Rain: Slight',
    63: 'Rain: Moderate',
    65: 'Rain:Heavy Intensity',
    66: 'Freezing Rain: Light',
    67: 'Freezing Rain: Heavy Intensity',
    71: 'Snow fall: Slight',
    73: 'Snow fall: Moderate',
    75: 'Snow fall: Heavy Intensity',
    77: 'Snow grains',
    80: 'Rain showers: Slight 🌧️',
    81: 'Rain showers: Moderate',
    82: 'Rain showers: Violent',
    85: 'Snow showers slight',
    86: 'Snow showers heavy',
    95: 'Thunderstorm: Slight or moderate',
    96: 'Thunderstorm with slight',
    99: 'Thunderstorm with heavy hail',
  };

  // Return the icon based on the code, or a default icon if not found
  return weatherIcons[code] || '❓'; // Default icon for unknown code
};
