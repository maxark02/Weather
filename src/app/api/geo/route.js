export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const city = searchParams.get('city')

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.WEATHER_API_KEY}`

    const response = await fetch(url)
    const data = await response.json()

    return Response.json(data)
}

