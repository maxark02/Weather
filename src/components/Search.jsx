'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchGeo } from "../services/api"

export function Search({ onSearch }) {
    const [city, setCity] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [inputValue, setInputValue] = useState('')  // локальный state для input


    useEffect(() => {
        const load = async () => {
            if (city.length < 2) {
                setSuggestions([])
                return
            }
            const data = await fetchGeo(city)
            setSuggestions(data)
        }
        load()
    }, [city])

    const handleSearch = () => {
        if (inputValue.length < 2)
            return onSearch(inputValue)
        setSuggestions([])
    }

    return (
        <div className="flex items-center justify-center h-24 w-full md:w-max-300">

            {/* обёртка с relative чтобы список позиционировался под input */}
            <div className="relative w-screen md:w-320 mx-5">
                <input
                    type="text"
                    placeholder="Search location..."
                    className="border border-gray-200 bg-white rounded-full w-full text-black pl-5 h-12"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch()
                    }}
                />

                {/* выпадающий список */}
                {suggestions.length > 0 && (
                    <div className="absolute top-14 left-0 w-full bg-white shadow-md rounded-lg z-10">
                        {suggestions.map((item, index) => (
                            <p key={index}
                               className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                               onClick={() => {
                                   onSearch(item.name)
                                   setCity(item.name)
                                   setSuggestions([])
                               }}>
                                {item.name}, {item.country}
                            </p>
                        ))}
                    </div>
                )}
            </div>

            <button
                className="absolute right-8 w-9 rounded-full md:right-16"
                onClick={handleSearch}
            >
                <Image src="/assets/search.png" width={30} height={30} alt=""/>
            </button>
        </div>
    )
}