export default async function formatWeatherParams(weatherParams) {
  const queryItems = Object.keys(weatherParams).map(
    (key) =>
      `${encodeURIComponent(key)}=${encodeURIComponent(weatherParams[key])}`
  )
  return queryItems.join('&')
}
