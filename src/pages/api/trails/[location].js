import geocodeLocation from '../../../utils/geocodeLocation'
import getTrails from '../../../utils/getTrails'
import formatWeatherParams from '../../../utils/formatWeatherParams'

export default async function trails(req, res) {
  const { location } = req.query

  //geocode location input by user
  const { position } = await geocodeLocation(location)

  const { latitude, longitude } = position.coords

  const { trails } = await getTrails(latitude, longitude)

  console.log('TRAILS', trails)

  if (trails.length === 0) {
    return res.status(404).send({ error: 'No trails found for this location' })
  }

  let data = []

  for (let i = 0; i < trails.length; i++) {
    const weatherKey = process.env.WEATHER_KEY
    const weatherURL = 'https://api.weatherbit.io/v2.0/forecast/daily'

    const weatherParams = {
      lat: trails[i].latitude,
      lon: trails[i].longitude,
      days: 3,
      key: weatherKey,
    }

    const weatherString = await formatWeatherParams(weatherParams)
    const wURL = weatherURL + '?' + weatherString

    const weatherTrails = await fetch(wURL)
      .then((response) => response.json())
      .then(function returnWeather(weatherResponse) {
        data.push({ ...trails[i], weather: weatherResponse.data[0] })
      })
  }

  return res.status(200).send({ data })
}
