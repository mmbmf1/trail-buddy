import React from 'react'
// import Weather from '../components/Weather'

const Trails = (props) => {
  const { trails, setSearchedTrails } = props
  console.log('USE THESE Trails', trails.data[0])

  const handleClick = () => {
    setSearchedTrails(null)
  }
  return (
    <div class="relative bg-gray-50 pt-4 pb-10 px-4 sm:px-6 lg:pt-10 lg:pb-10 lg:px-8">
      <div className="flex mb-8">
        <span class="relative z-0 inline-flex  align-middle">
          <button
            type="button"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md bg-gray-50 text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Previous"
            onClick={() => handleClick()}
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </span>
        <p className="mt-1.5 align-middle text-gray-500">Back</p>
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Search Results
          </h2>
        </div>
        <div class="mt-6 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                src={`${trails.data[0].imgMedium}`}
                alt=""
              />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-indigo-600">
                  <a href="#" class="hover:underline">
                    {trails.data[0].location}
                  </a>
                </p>
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  {trails.data[0].name}
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  {trails.data[0].summary}
                </p>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <img
                      class="h-10 w-10 rounded-full"
                      src={`icons/${trails.data[0].weather[0].weather.icon}.png`}
                      alt=""
                    />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm leading-5 font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      {trails.data[0].weather[0].weather.description}
                    </a>
                  </p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time datetime="2020-03-16">
                      {new Date(
                        trails.data[0].weather[0].datetime
                      ).toLocaleDateString()}
                    </time>
                    <span class="mx-1">&middot;</span>
                    <span>
                      {Math.round(
                        (trails.data[0].weather[0].temp * 9) / 5 + 32
                      )}
                      &deg; F
                    </span>
                  </div>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <img
                      class="h-10 w-10 rounded-full"
                      src={`icons/${trails.data[0].weather[1].weather.icon}.png`}
                      alt=""
                    />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm leading-5 font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      {trails.data[0].weather[1].weather.description}
                    </a>
                  </p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time datetime="2020-03-16">
                      {new Date(
                        trails.data[0].weather[1].datetime
                      ).toLocaleDateString()}
                    </time>
                    <span class="mx-1">&middot;</span>
                    <span>
                      {Math.round(
                        (trails.data[0].weather[1].temp * 9) / 5 + 32
                      )}
                      &deg; F
                    </span>
                  </div>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <img
                      class="h-10 w-10 rounded-full"
                      src={`icons/${trails.data[0].weather[2].weather.icon}.png`}
                      alt=""
                    />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm leading-5 font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      {trails.data[0].weather[2].weather.description}
                    </a>
                  </p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time datetime="2020-03-16">
                      {new Date(
                        trails.data[0].weather[2].datetime
                      ).toLocaleDateString()}
                    </time>
                    <span class="mx-1">&middot;</span>
                    <span>
                      {Math.round(
                        (trails.data[0].weather[2].temp * 9) / 5 + 32
                      )}
                      &deg; F
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt=""
              />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-indigo-600">
                  <a href="#" class="hover:underline">
                    Video
                  </a>
                </p>
                <a href="#" class="block">
                  <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    How to use search engine optimization to drive sales
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asperiores porro quaerat doloribus, eveniet
                    dolore. Adipisci tempora aut inventore optio animi., tempore
                    temporibus quo laudantium.
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm leading-5 font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      Brenna Goyette
                    </a>
                  </p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time datetime="2020-03-16">Mar 16, 2020</time>
                    <span class="mx-1">&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt=""
              />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-indigo-600">
                  <a href="#" class="hover:underline">
                    {' '}
                    Case Study
                  </a>
                </p>
                <a href="#" class="block">
                  <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Improve your customer experience
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint harum rerum voluptatem quo recusandae magni placeat
                    saepe molestiae, sed excepturi cumque corporis perferendis
                    hic.
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm leading-5 font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      Daniela Metz
                    </a>
                  </p>
                  <div class="flex text-sm leading-5 text-gray-500">
                    <time datetime="2020-03-16">Mar 16, 2020</time>
                    <span class="mx-1">&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Trails
