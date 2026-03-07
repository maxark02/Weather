'use client'

import Image from 'next/image'

export function Weekly() {
    return (

        <>
            <div className="flex flex-col mx-5  rounded-3xl border-gray-200 mt-5 shadow-md pb-10
            md:w-180 md:ml-11">
                <h2 className="text-xl p-5">
                    7-Day Forecast
                </h2>
                <div className="flex flex-col mx-5 h-full rounded-3xl gap-5">
                    <h3 className="w-full ">mon</h3>
                    <h3 className="w-full ">tue</h3>
                    <h3 className="w-full ">wed</h3>
                    <h3 className="w-full ">thu</h3>
                    <h3 className="w-full ">fri</h3>
                    <h3 className="w-full ">sat</h3>
                    <h3 className="w-full ">sun</h3>

                </div>

            </div>
        </>
    )
}