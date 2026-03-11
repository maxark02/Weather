'use client'

import {useForecast} from "../hooks/forecast";
import { useWeather } from "../hooks/useWeather";


export function Details({ city }) {
    const { forecast, loading } = useForecast(city)
    const { weather } = useWeather(city)

    if (loading && !forecast) return null

    const formatTime = (unix) => {
        return new Date(unix * 1000).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (

        <>
            <div className="flex flex-col flex-nowrap w-[90%] mx-auto   rounded-3xl border border-gray-200 h-full shadow-md pb-1 gap-4
                    md:w-full
                ">
                <h2 className="text-xl p-5 ">
                   Weather Details
                </h2>
                <div className="flex flex-row text-sm justify-between px-4  ">
                    <p>
                        Pressure
                    </p>
                    <p className="text-sm fade-in">
                        {forecast?.list?.[0]?.main?.pressure}
                    </p>
                </div>
                <div className="flex flex-row text-sm justify-between px-4 ">

                <p>
                        Visibility
                    </p>
                    <p className="text-sm fade-in">
                        {forecast?.list?.[0]?.visibility / 1000} km

                    </p>
                </div>
                <div className="flex flex-row text-sm justify-between px-4  ">

                <p>
                        Wind Speed
                </p>
                    <p className="text-sm fade-in">
                        {forecast?.list?.[0]?.wind?.speed} m/s

                    </p>
                </div>
                <div className="flex flex-row text-sm justify-between px-4  ">

                <p>
                        Humidity
                    </p>
                    <p className="text-sm fade-in">
                        {forecast?.list?.[0]?.main?.humidity}%

                    </p>
                </div>
                    <div className="flex flex-row text-sm justify-between px-4  ">

                    <p>

                        Sunrise
                    </p>
                        <p className="text-sm fade-in">
                        {formatTime(weather?.sys?.sunrise)}


                    </p>
                    </div>
                    <div className="flex flex-row text-sm justify-between px-4 ">

                    <p>
                        Sunset
                    </p>
                        <p className="text-sm fade-in">
                        {formatTime(weather?.sys?.sunset)}

                    </p>
                </div>

                <div className="flex flex-row text-sm justify-between px-4 ">


                </div>








            </div>

        </>
    )
}