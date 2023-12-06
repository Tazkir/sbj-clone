import { fetchWeatherApi } from 'openmeteo';
import { WeatherIcons } from './WeatherIcons';

export default async function Weather() {
  const params = {
    latitude: 3.0688, // Bandar Baru Sri Petaling
    longitude: 101.6897,
    current: ['temperature_2m', 'is_day', 'weather_code'],
    timezone: 'auto',
    forecast_days: 1,
  };
  const url = 'https://api.open-meteo.com/v1/forecast';
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();

  const current = response.current()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      isDay: current.variables(1)!.value(),
      weatherCode: current.variables(2)!.value(),
    },
  };

  const weatherCode = weatherData.current.weatherCode;
  const weatherIcon = WeatherIcons({ code: weatherCode.toString() });

  return (
    <div className="flex justify-center items-center gap-1 text-sm">
      <h1 className="px-2 py-1 font-semibold rounded-full bg-foreground text-background shadow-md">
        Weather: {weatherIcon}
      </h1>
      <p className="px-2 py-1 font-semibold rounded-full bg-foreground text-background shadow-md">
        {weatherData.current.temperature2m.toFixed(0)} °C
      </p>
    </div>
  );
}
