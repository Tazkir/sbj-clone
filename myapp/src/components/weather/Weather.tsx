import { fetchWeatherApi } from 'openmeteo';
import { WeatherIcons } from './WeatherIcons';

export default async function Weather() {
  const params = {
    latitude: 3.0333,
    longitude: 101.7167,
    current: ['is_day', 'weather_code'],
    hourly: 'precipitation',
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
  const hourly = response.hourly()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      isDay: current.variables(0)!.value(),
      weatherCode: current.variables(1)!.value(),
    },
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      precipitation: hourly.variables(0)!.valuesArray()!,
    },
  };

  // // `weatherData` now contains a simple structure with arrays for datetime and weather data
  //   for (let i = 0; i < weatherData.hourly.time.length; i++) {
  //     console.log(
  //       weatherData.hourly.time[i].toISOString(),
  //       weatherData.hourly.precipitation[i]
  //     );
  //   }

  const weatherCode = weatherData.current.weatherCode;
  const weatherIcon = WeatherIcons({ code: weatherCode.toString() });

  return (
    <div className="flex justify-center items-center gap-3">
      <h1>{weatherIcon}</h1>
    </div>
  );
}
