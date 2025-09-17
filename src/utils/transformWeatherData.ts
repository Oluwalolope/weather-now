// ==== Types ====

interface CurrentData {
  time: string;
  temperature_2m: number;
  apparent_temperature: number;
  precipitation: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
}

interface DailyData {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
}

interface HourlyData {
  time: string[];
  weather_code: number[]
  temperature_2m: number[];
}

interface WeatherApiResponse {
  current: CurrentData;
  daily: DailyData;
  hourly: HourlyData;
}

// Output types
interface CurrentForecast {
  forecast: string;
  day: string;
  maxTemperature: number;
  apparentTemperature: number;
  precipitation: number;
  windSpeed: number;
  humidity: number;
}

interface DailyForecast {
  forecast: string;
  day: string;
  max: number;
  min: number;
}

interface HourlyForecast {
  forecast: string;
  time: string;
  temperature: number;
}

// ==== Helper: Map WMO codes → forecast ====
const getForecastFromWMO = (code: number): string => {
  if (code === 0) return "Sunny";
  if ([1, 2, 3].includes(code)) return "Partly Cloudy";
  if ([45, 48].includes(code)) return "Fog";
  if (code >= 51 && code <= 57) return "Drizzle";
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return "Rain";
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return "Snow";
  if (code >= 95 && code <= 99) return "Storm";
  return "Overcast";
};

// ==== Transformer Function ====
const transformWeatherData = (data: WeatherApiResponse): {
  currentForecast: CurrentForecast;
  dailyForecast: DailyForecast[];
  hourlyForecast: HourlyForecast[];
} => {
  // === CURRENT FORECAST ===
  const todayIndex = 0;
  const currentDate = new Date(data.current.time);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric"
  };

  const currentForecast: CurrentForecast = {
    forecast: getForecastFromWMO(data.daily.weather_code[todayIndex]),
    day: currentDate.toLocaleDateString("en-US", options),
    maxTemperature: Math.round(data.current.temperature_2m),
    apparentTemperature: Math.round(data.current.apparent_temperature),
    precipitation: Math.round(data.current.precipitation),
    windSpeed: Math.round(data.current.wind_speed_10m),
    humidity: Math.round(data.current.relative_humidity_2m)
  };

  // === DAILY FORECAST ===
  const dailyForecast: DailyForecast[] = data.daily.time.map((dateStr, i) => {
    const d = new Date(dateStr);
    const day = d.toLocaleDateString("en-US", { weekday: "short" });

    return {
      forecast: getForecastFromWMO(data.daily.weather_code[i]),
      day,
      max: Math.round(data.daily.temperature_2m_max[i]),
      min: Math.round(data.daily.temperature_2m_min[i])
    };
  });

  // === HOURLY FORECAST  ===

  const formatHour = (iso: string): string =>
  new Date(iso).toLocaleTimeString("en-US", { hour: "numeric", hour12: true });

  const hourlyForecast: HourlyForecast[] = data.hourly.time.slice(0, 168).map((time, i) => ({
    forecast: getForecastFromWMO(data.hourly.weather_code[i]), // fallback since no hourly weather_code
    time: formatHour(time),
    temperature: Math.round(data.hourly.temperature_2m[i]),
    day: new Date(time).toLocaleDateString("en-US", { weekday: "long" })
  }));

  return { currentForecast, dailyForecast, hourlyForecast };
}

export default transformWeatherData;