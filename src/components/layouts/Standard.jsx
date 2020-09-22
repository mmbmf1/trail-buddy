import React from 'react'

const StandardLayout = (props) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="">{props.children}</div>
      </main>
    </div>
  )
}

export default StandardLayout
