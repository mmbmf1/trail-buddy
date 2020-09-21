import Head from 'next/head'

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
      </div>
    </div>
  )
}

export default Home
