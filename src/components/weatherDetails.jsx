import {useForecast} from "../hooks/forecast";


export function Details({ city }) {
    const { forecast, loading } = useForecast(city)

    if (loading && !forecast) return null
    return (

        <>
            <div className="flex flex-col max-w-114 rounded-3xl border-gray-200 h-full shadow-md pb-10 pr-5 gap-2
            md:w-114 ">
                <h2 className="text-xl p-5 ">
                   Weather Details
                </h2>
                <div className="flex flex-col w-screen gap-3 mx-5 text-sm ">
                    <p>
                        Pressure
                    </p>
                    <p className="text-sm text-red-500">
                        {forecast?.list?.wind_speed}
                    </p>
                </div>
                <div className="flex flex-col w-screen gap-3 mx-5 text-sm ">

                <p>
                        Visibility
                    </p>
                    <p>

                    </p>
                </div>
                <div className="flex flex-col w-screen gap-3 mx-5 text-sm ">

                <p>
                        Wind Speed
                </p>
                    <p>

                    </p>
                </div>
                <div className="flex flex-col w-screen gap-3 mx-5 text-sm ">

                <p>
                        Humidity
                    </p>
                    <p>

                    </p>
                </div>
                    <div className="flex flex-col w-screen gap-3 mx-5 text-sm ">

                    <p>

                        Sunrise
                    </p>
                    <p>

                    </p>
                    </div>
                    <div className="flex flex-col w-screen gap-3 mx-5 text-sm ">

                    <p>
                        Sunset
                    </p>
                    <p>

                    </p>
                </div>

                <div className="flex flex-col w-screen gap-3 mx-5 text-sm ">

                <h6>
                        UV Index
                    </h6>
                </div>








            </div>

        </>
    )
}