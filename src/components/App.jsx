'use client'

import { useState } from 'react'
import { Search } from './Search'
import { Weather } from './Weather'
import { Hourly } from './Hourly'
import {Weekly} from "./Weekly";
import {Details} from "./weatherDetails";

export function App() {
    const [city, setCity] = useState('seoul')

    return (
        <main className="w-max-340 pb-10 mx-auto">
            <Search onSearch={setCity} />

            <div className="flex flex-col  md:flex-row md:items-start">
                <div className="flex flex-col order-1 md:order-1">
                    <Weather city={city} />
                    <Hourly city={city} />
                    <Weekly city={city} />
                </div>

                <div className="order-2 md:order-2 md:w-114 lg:flex-row md:mr-5 ">
                    <Details city={city} />
                </div>
            </div>
        </main>
    )
}