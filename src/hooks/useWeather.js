import { useState, useEffect } from 'react'
import {fetchWeather} from "../services/api.js";
export function useWeather(city) {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const load = async () => {
            setLoading(true)
            const data = await fetchWeather(city)
            setWeather(data)
            setLoading(false)
        }
        load()
    }, [city])
    return { weather, loading }
}