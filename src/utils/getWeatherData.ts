import transformWeatherData from "./calculations";

const getWeatherData = async(context: { handleChange: (key: string, value: unknown ) => void; data: { unit: string; }; }, latitude: string | number, longitude: string | number) => {
    context.handleChange('isFetchingWeatherData', true);
    let weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,is_day,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation`;
    if (context.data.unit === 'imperial') {
        weatherURL += `&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;
    }
    
    try {
        const weatherResponse = await fetch(weatherURL);
        const weatherResult = await weatherResponse.json();
        if (!weatherResponse.ok) {
            throw new Error('Failed to get weather data');
        }
        console.log(weatherResult);
        context.handleChange('isValidLocation', true);

        const { currentForecast, dailyForecast, hourlyForecast } = transformWeatherData(weatherResult);
        console.log('Current Forecast:', currentForecast);
        console.log('Daily Forecast:', dailyForecast);
        console.log('Hourly Forecast:', hourlyForecast);

        // Update context state with fetched weather data
        context.handleChange('weatherData', [currentForecast, dailyForecast, hourlyForecast]);
    } catch (error) {
        console.log(error);
        context.handleChange('isValidLocation', false);
        context.handleChange('isServerWorking', false);
    } finally {
        context.handleChange('isFetchingWeatherData', false);
    }
};

export default getWeatherData;