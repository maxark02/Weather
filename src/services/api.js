export async function fetchWeather(city) {
    const response = await fetch(`/api/weather?city=${city}`)
    const data = await response.json()
    return data
}

export async function fetchForecast(city) {
    const response = await fetch(`/api/forecast?city=${city}`)
    const data = await response.json();
    return data
}