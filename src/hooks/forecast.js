import {useState,useEffect} from "react";
import {fetchForecast} from "../services/api.js";

export function useForecast(city) {
    const [forecast, setForecast] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        fetchForecast(city)
            .then(data => {
                console.log(data)
                setForecast(data);
                setLoading(false);
            })
    },[city])
    return {forecast, loading}
}