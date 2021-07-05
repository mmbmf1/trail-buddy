import React, { useState } from 'react'
import Head from 'next/head'
import Trails from '../components/Trails'
import baseUrl from '../constants/baseUrl'

const Search = (props) => {
  const { baseUrl } = props

  const [searchValue, setSearchValue] = useState(null)
  const [searchError, setSearchError] = useState(null)
  const [searchedTrails, setSearchedTrails] = useState(null)
  const [loading, setLoading] = useState(null)

  const handleSearchSubmit = async (e, searchValue) => {
    setLoading(true)
    e.preventDefault()
    setSearchValue(null)
    setSearchError(null)

    try {
      const response = await fetch(`${baseUrl}/api/trails/${searchValue}`)

      if (!response.ok) {
        setSearchError('Trails not found for that location, please try again')
        return
      }

      const trails = await response.json()
      setSearchedTrails(trails)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setSearchError('Uh oh, something went wrong. Please try again')
      setLoading(false)
    }
  }

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
        {!searchedTrails && !loading ? (
          <div className="h-screen w-screen mr-0 bg-gray-700 py-48">
            <form
              className="text-center"
              onSubmit={(e) => handleSearchSubmit(e, searchValue)}
            >
              <div>
                <label
                  for="email"
                  class="block py-2 text-xl font-medium leading-5 text-white"
                >
                  Find Trails Near You
                </label>
                <div class="flex mt-1 relative  justify-center">
                  <input
                    id="search"
                    type="text"
                    class="form-input block w-1/2 sm:text-sm sm:leading-5 rounded-md shadow-sm"
                    placeholder="Enter a city, state or zip code"
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <button
                    type="button"
                    class="inline-flex items-center mx-2 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150"
                    onClick={(e) => handleSearchSubmit(e, searchValue)}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
            {searchError ? (
              <div className="text-red-700">
                <h1>{searchError}</h1>
              </div>
            ) : null}
          </div>
        ) : (
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Trails
                trails={searchedTrails}
                setSearchedTrails={setSearchedTrails}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  return {
    props: {
      baseUrl: baseUrl,
    },
  }
}
