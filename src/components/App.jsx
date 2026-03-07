'use client'

import { useState } from 'react'
import { Search } from './Search'
import { Weather } from './Weather'
import { Hourly } from './Hourly'
import {Weekly} from "./Weekly";
import {c} from "react/compiler-runtime";

export function App() {
    const [city, setCity] = useState('seoul')

    return (
        <main>
            <Search onSearch={setCity} />
            <Weather city={city} />
            <Hourly city={city} />
            <Weekly city={city} />


        </main>
    )
}