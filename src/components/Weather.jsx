'use client'

import { useWeather } from '../hooks/useWeather.js'
import Image from 'next/image.js';



export function Weather( { city }) {
    const { weather, forecast, loading } = useWeather(city)

    if (loading && !weather) return <p className="flex justify-center m-auto mt-70 ">Loading...</p>

    if (weather.error) return <p className="flex h-screen items-center justify-center ">City not found</p>


    return (
        <>
    <div className="flex items-center flex-wrap pb-3 mx-5 h-90 border border-gray-200 rounded-3xl
    shadow-md flex-direction-column
    md:w-180 md:ml-11
    ">
    <div className="flex items-center justify-center w-full h-20  pt-10 m-0 text-3xl font-bold">
        <h2 className="text-center fade-in">{weather?.name}</h2>
    </div>
    <div className="flex h-35  w-full justify-center items-center gap-0 fade-in ">

        <Image src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
               alt="" width={100} height={100} className="w-30 h-30 " />

        <div className=" text-center fade-in ">
            <h3 className="text-6xl font-bold">{Math.round(weather?.main?.temp)}°</h3>
            <h4 className="text-sm m-0 text-black ">{weather?.weather?.[0]?.description}</h4>
        </div>
    </div>

        <div className=" flex justify-evenly w-80 pt-10 mx-auto  border-t border-gray-200
                        sm:w-4/5 ">

            <div className="flex items-center flex-col w-30 h-20  m-0 text-3xl  ">
                <Image src="/assets/windy.png" alt="" width={100} height={100} className="w-8" />
                <p className="text-xs ">Wind</p>
                <p className="text-xs fade-in">10 km/h</p>
            </div>

            <div className="flex items-center flex-col w-30 h-20  m-0 text-3xl  ">

                <Image src="/assets/humidity.png" alt="" width={100} height={100} className="w-8" />
                <p className="text-xs">Humidity</p>
                <p className="text-xs fade-in">{weather?.main?.humidity}%</p>
            </div>
            <div className="flex items-center flex-col w-30 h-20  m-0 text-3xl  ">
                <Image src="/assets/cloud.png" alt=""  width={100} height={100} className="w-8 " />
                <p className="text-xs" >Feels like </p>
                <p className="text-xs fade-in">{Math.round(weather?.main?.feels_like)}°</p>

            </div>
        </div>



    </div>
        </>
    )
}