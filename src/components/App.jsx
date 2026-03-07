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
        <main className="max-w-340">

            <Search onSearch={setCity} />
            <div className="flex flex-row w-full md:flex-row">
                <Weather city={city} />
                <Details city={city} />

            </div>
            <Hourly city={city} />
            <Weekly city={city} />


        </main>
    )
}