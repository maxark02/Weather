'use client'

import Image from 'next/image'
import { useForecast } from '../hooks/forecast.js'

export function Weekly({ city }) {
    const getDayName = (dateStr) => {
        const date = new Date(dateStr)  // маленькая n в new
        return date.toLocaleDateString('en-US', { weekday: 'short' })
    }

    const { forecast, loading } = useForecast(city)

    if (loading && !forecast) return null

    return (

        <>
            <div className="flex flex-col mx-5  rounded-3xl border-gray-200 mt-5 shadow-md pb-10 h-full
            md:w-200 md:ml-11">
                <h2 className="text-xl p-5">
                    7-Day Forecast
                </h2>
                <div className="flex flex-col mx-5 h-full rounded-3xl gap-5">
                    {forecast?.list
                        ?.filter(item => item.dt_txt.includes('12:00:00')).map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <p>{getDayName(item.dt_txt)}</p>
                            <p>{Math.round(item.main.temp)}°</p>

                        </div>

                        ) )}
                </div>

            </div>
        </>
    )
}