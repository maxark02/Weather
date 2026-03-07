export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const city = searchParams.get('city')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`

    const response = await fetch(url)
    const data = await response.json()

    if (!response.ok) {
        return Response.json({error: "City not found"}, { status: 404 })
    }

    return Response.json(data)
}

