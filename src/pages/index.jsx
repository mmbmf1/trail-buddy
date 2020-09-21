import Head from 'next/head'
import baseUrl from '../constants/baseUrl'

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Trail Buddy</title>
        <link rel="icon" href="/sign.ico" />
        <meta property="og:title" content="Trail Buddy" />
        <meta
          property="og:image"
          content="https://github.com/mmbmf1/api-hack/blob/master/images/landing_page.jpg?raw=true"
        />
        <meta property="og:description" content="Trail Buddy" />
        <meta property="og:url" content="https://mmbmf1.github.io/api-hack/" />
      </Head>

      <div>
        <h1>Find Trails Near You</h1>
        {/* move this to a component */}
        <form action="#" class="js-form">
          <input
            type="text"
            name="trail-search"
            id="js-trail-search"
            placeholder="Enter a city, state or zip"
          />
          <input type="submit" value="search" id="location-search" />
        </form>
        {/* use logic to display search results */}
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const { req, res } = context
  console.log(req, res)

  try {
    const trailRes = await fetch(`${baseUrl}/api/trails`)
    const weatherRes = await fetch(`${baseUrl}/api/weather`)

    const trails = await trailRes.json()
    const weather = await weatherRes.json()

    console.log(trails, weather)
  } catch (err) {
    console.log('Error', err)
  }
}
