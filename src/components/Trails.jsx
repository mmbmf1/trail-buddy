import React from 'react'
import Weather from '../components/Weather'

const Location = (props) => {
  return (
    <div>
      <section id="trail-results" class="hidden">
        <h2>Search Results</h2>
        <button type="submit" id="home-button">
          Return to Search
        </button>
      </section>
    </div>
  )
}

export default Location
