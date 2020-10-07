import formatParams from '../utils/formatParams'

export default async function getTrails(latitude, longitude) {
  const trailKey = process.env.TRAIL_KEY
  const trailURL = 'https://www.hikingproject.com/data/get-trails'

  const params = {
    lat: latitude,
    lon: longitude,
    maxDistance: 25,
    maxResults: 5,
    key: trailKey,
  }

  const queryString = await formatParams(params)

  const tURL = trailURL + '?' + queryString

  const trailRes = await fetch(tURL)

  const { trails } = await trailRes.json()

  return { trails: trails }
}
