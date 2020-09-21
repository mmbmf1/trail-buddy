import geocodeLocation from '../../../utils/geocodeLocation'
import formatParams from '../../../utils/formatParams'
// import formatWeatherParams from '../../../utils/formatWeatherParams'

export default async function trails(req, res) {
  const { location } = req.query
  //geocode location input by user

  const { position } = await geocodeLocation(location)

  const { latitude, longitude } = position.coords

  //put these in .env
  const trailKey = process.env.TRAIL_KEY
  console.log('KEY', trailKey)
  const trailURL = 'https://www.hikingproject.com/data/get-trails'

  const params = {
    lat: latitude,
    lon: longitude,
    maxDistance: 50,
    maxResults: 5,
    key: trailKey,
  }

  const queryString = await formatParams(params)

  const tURL = trailURL + '?' + queryString

  const trailRes = await fetch(tURL)

  const trailData = await trailRes.json()

  return res.status(200).send({ trailData })
}
