import React from 'react'

const Fallback = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-[#e2ecf2]">
      <div className="text-center">
        <h1 className="text-lg font-semibold text-gray-700 animate-pulse">Loading...</h1>
      </div>
    </div>
  )
}

export default Fallback