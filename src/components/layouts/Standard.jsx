import React from 'react'

const StandardLayout = (props) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-7xl m-2 sm:mx-auto sm:px-6 lg:px-8">
          {props.children}
        </div>
      </main>
    </div>
  )
}

export default StandardLayout
