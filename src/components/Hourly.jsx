'use client'

import Image from 'next/image'
import { useForecast} from "../hooks/forecast";


export function Hourly({city}) {

    const { forecast, loading } = useForecast(city);

    if (loading && !forecast) {
        return null
    }

    return (
        <>
            <div className="flex flex-col mx-5 h-45 rounded-3xl border-gray-200 mt-5 shadow-md
            md:w-200 md:ml-11">
                <h2 className=" text-xl p-5 ">
                    Hourly forecast
                </h2>

                <div className="flex flex-rowflex-wrap  mx-5 justify-start text-sm  text-center overflow-x-auto   ">
                    <div className="flex flex-row flex-nowrap gap-6  ">
                        {forecast?.list?.slice(0, 20).map((item, index) => (
                            <div key={index} className="flex flex-col items-center fade-in ">
                                <p>{item.dt_txt.slice(11, 16)}</p>
                                <div className="flex flex-col items-center w-10 ">


                                    <Image src="/assets/cloud.png"
                                           alt=""
                                           width={30}
                                           height={30}
                                           className=""
                                    />

                                </div>

                                <div className="w-10  text-center ">
                                    {Math.round(item.main.temp)}°
                                </div>
                            </div>
                        ))}
                    </div>


                </div>

                <div className="">

                </div>
            </div>
        </>
    )
}