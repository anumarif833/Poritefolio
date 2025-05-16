import React from 'react'
import propTypes from 'prop-types'
const BlurBlob = ({ position, size}) => {
    // Destructure position and size
    const { top, left } = position
    const { width, height } = size
  return (
    <div className='abselute'
        style={{
            top: top,
            left: left,
            width: width,
            height: height,
            transform: "transtate(-50%, -50%)",
        }}
      >

        <div className="w-ull h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob">

        </div>
    </div>
  )
}

// Defind prop types


export default BlurBlob;
