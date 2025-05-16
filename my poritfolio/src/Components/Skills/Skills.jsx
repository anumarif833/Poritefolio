import React from 'react'
import { SkillsInfo } from '../../constants'

const Skills = () => {
  return (
    <section
    
      id='skills'
      className='py-24 md:px-[7vw] lg:px-[15vw] font-sans bg-gradient-to-br from-[#1f1c2c] to-[#928dab] clip-path-custom...'
    >
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl sm:text-5xl font-extrabold text-white tracking-wide'>SKILLS</h2>
        <div className='w-20 h-1 bg-[#8245ec] mx-auto mt-4'></div>
        <p className='text-gray-300 mt-4 text-lg max-w-2xl mx-auto font-medium'>
          A collection of my technical skills and tools honed through projects and real-world experience.
        </p>
      </div>

      {/* Skill Categories */}
      <div className='flex flex-wrap gap-8 justify-center'>
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className='bg-[#181818]/70 backdrop-blur-md border border-gray-700 rounded-2xl w-full sm:w-[48%] lg:w-[40%] px-6 py-8 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.5)] transition-all duration-300'
          >
            <h3 className='text-2xl font-semibold text-center text-gray-200 mb-6'>
              {category.title}
            </h3>

            {/* Skills Grid */}
            <ul className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className='flex flex-col items-center text-center bg-gray-800 border border-gray-700 rounded-xl py-3 px-2 hover:bg-gray-700 transition duration-300'
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className='w-8 h-8 mb-1 object-contain'
                  />
                  <span className='text-sm text-gray-300'>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills