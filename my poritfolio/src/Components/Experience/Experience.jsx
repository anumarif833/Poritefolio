import React from 'react';
import { experiences } from '../../constants';

const Experience = () => {
  return (
    <section 
      id='experience'
      className='py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient'
    >
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>Experience</h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className='relative'>
        {/* Vertical Line */}
        <div className='absolute sm:left-1/2 left-4 sm:transform sm:-translate-x-1/2 w-1 bg-white h-full'></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row items-center mb-16 relative z-10 ${
              index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
            }`}
          >
            {/* Timeline Circle */}
            <div className='absolute sm:left-1/2 left-4 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:h-16 rounded-full flex justify-center items-center z-20'>
              <img
                src={experience.img}
                alt={experience.company}
                className='w-full h-full object-cover rounded-full'
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md mt-16 sm:mt-0 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md 
              shadow-[0_0_20px_1px_rgba(130,130,130,0.5)] 
              ${index % 2 === 0 ? 'sm:ml-12' : 'sm:mr-12'} 
              transform transition-transform duration-300 hover:scale-105`}
            >
              <h3 className='text-xl font-bold text-white'>{experience.role}</h3>
              <p className='text-purple-400 font-semibold text-sm'>{experience.company}</p>
              <p className='text-gray-300 mt-2 text-sm'>{experience.date}</p>

              {/* Description as bullet points */}
              <ul className='list-disc list-inside text-gray-400 mt-4 space-y-2 text-sm'>
                {experience.desc.split('. ').map((item, i) => (
                  item.trim().length > 0 && <li key={i}>{item.trim()}.</li>
                ))}
              </ul>

              {/* Skills Logos & Names inside paragraph section */}
              <div className='flex flex-wrap mt-6 gap-4'>
                {experience.skills.map((skill, i) => (
                  <div
                    key={i}
                    className='flex items-center space-x-2 bg-purple-900 bg-opacity-30 px-3 py-1 rounded-lg border border-purple-500 shadow-sm'
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className='w-6 h-6 object-contain'
                    />
                    <span className='text-purple-400 font-semibold text-sm'>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
