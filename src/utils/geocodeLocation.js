import formatParams from './formatParams'

export default async function geocodeLocation(location) {
  console.log('location', location)

  //put these in .env
  const geoKey = process.env.GEO_KEY
  const geoURL = 'https://www.mapquestapi.com/geocoding/v1/address'

  const geoParams = {
    key: geoKey,
    location: location,
  }

  const geoString = await formatParams(geoParams)
  const geocodeURL = geoURL + '?' + geoString

  try {
    const geoRes = await fetch(geocodeURL)

    // if (!geoRes.ok) {
    //   console.log('status not ok')
    //   geoRes.status(404).end()
    // }

    const position = await geoRes.json()

    return {
      position: {
        coords: {
          latitude: position.results[0].locations[0].displayLatLng.lat,
          longitude: position.results[0].locations[0].displayLatLng.lng,
        },
      },
    }
  } catch (error) {
    console.log(error)
  }
}
