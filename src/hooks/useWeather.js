import { useState, useEffect } from 'react'
import {fetchWeather} from "../services/api.js";

export function useWeather(city) {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetchWeather(city)
            .then(data => {
                setWeather(data)
                setLoading(false)
            })
    }, [city])

    return { weather, loading }
}