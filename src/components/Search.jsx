'use client'
import { useState } from 'react'
import Image from 'next/image'

export function Search({ onSearch }) {
    const [city, setCity] = useState('')

    const handleSearch = () => {
        onSearch(city)
    }



    return (
        <>
            <div className="flex items-center justify-center h-24
            md:w-330 mx-auto
           ">
                <input
                    type="text"
                    placeholder="Search location..."
                    className="border border-gray-200 bg-white rounded-full w-104 text-black m-5 pl-5 md:w-full h-12"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch()
                    }}
                />
                <button
                    className="absolute right-8 w-9 rounded-full
                    md:right-16
                    "
                    onClick={handleSearch}
                >
                    <Image src="/assets/search.png" width={30} height={30} alt=""/>
                </button>
            </div>
        </>
    )
}