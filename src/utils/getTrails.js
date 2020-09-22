import formatParams from '../utils/formatParams'

export default async function getTrails(latitude, longitude) {
  console.log('LATLNG', latitude, longitude)

  const trailKey = process.env.TRAIL_KEY
  const trailURL = 'https://www.hikingproject.com/data/get-trails'

  const params = {
    lat: latitude,
    lon: longitude,
    maxDistance: 10,
    maxResults: 2,
    key: trailKey,
  }

  const queryString = await formatParams(params)

  const tURL = trailURL + '?' + queryString

  const trailRes = await fetch(tURL)

  const { trails } = await trailRes.json()

  return { trails: trails }
}
