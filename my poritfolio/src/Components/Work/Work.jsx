import React from 'react'
import { projects } from '../../constants'

const Work = () => {
  return (
    <saction 
    id='work'
    className='py-24 pd-24 px-[12vw] md:px-[17vw] lg:px-[20vw] font-sans relative'
    >
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>
          PROJECTS
        </h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lssg font-semibold'>A showcase of the projects I have worked on, hightlighting my skills and experiecnce in various technologies</p>
      </div>
    </saction>
  )
}

export default Work
