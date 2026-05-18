import { useEffect, useState } from "react";

export default function useGetApi(cityName) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // fetching data from the API
    const CITY_NAME = cityName || "tbilisi";
    const APIkey = import.meta.env.VITE_WEATHER_API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APIkey}`;

    // fetching data from the API
    useEffect(() => {
        const getWeather = async () => {
            try {
                setLoading(false);
                const response = await fetch(URL);
                const data = await response.json();
                setData(data);
            } catch (err) {
                console.log(err);
            }
        };

        getWeather();
    }, []);

    const error = data?.cod === "404" ? data?.message : null;

    return { data, loading, error };
}