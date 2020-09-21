import React from 'react'

const Location = (props) => {
  return (
    <div>
      <section id="trail-results" class="hidden">
        <h2>Search Results</h2>
        <ul id="js-trail-results-list"></ul>
        <button type="submit" id="home-button">
          Return to Search
        </button>
      </section>
    </div>
  )
}

export default Location
