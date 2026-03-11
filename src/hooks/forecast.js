import {useState,useEffect} from "react";
import {fetchForecast} from "../services/api.js";

export function useForecast(city) {
    const [forecast, setForecast] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const load = async () => {
            setLoading(true);        // ок — внутри функции
            try {
                const data = await fetchForecast(city);
                setForecast(data);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [city]);
    return {forecast, loading}
}