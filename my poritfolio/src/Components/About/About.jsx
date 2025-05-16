import React from 'react'
import { FaCheckDouble } from 'react-icons/fa';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileleImage from '../../assets/images (8).jpeg'


const About = () => {
  return (
    <section
    id='about'
    className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
          Hi, I am
          </h1>
        {/* Name */}
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
          Anum Arif
        </h2>
        {/* Skills heading with typing effect */}

        <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
          <span className='text-white'>
            I am a
            </span>
         <ReactTypingEffect
         text={[
          'Fullstack Developer',
          'App Developer',
          'UI/UX Designer',
          'Coder',
         ]}
         speed={100}
         eraseSpeed={50}
         typingDelay={500}
         eraseDelay={2000}
         cursorRenderer={(cursor) => (
          <span className='text-[#8245ec]'>{cursor}</span>
         )}
         >
         </ReactTypingEffect>
        </h3>
        {/* About me paragraph */}
        <a className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
      I am a  full-stack Developer with over 2 years of experience in 
      building scalable web application. skilled in both front-end and
      back-end developer, I specialize in the MAN Stack and other
      modern technologies to create seamless user experiences and
      efficient solutions. <br></br>
        </a>
        {/* Resume Button */}
        <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ226ZoRUCQYfJV2tA5gnD8emqHZldraiLguws"
        target='_blank'
        rel='noopenet noreferr'
        className='inline-block text-white py-3 px-8 rounded-full mt-5 ext-lg font-bolo transition duration-300 transform hover:scale-105'
        style={{
          background: 'linear-gradient(90deg, #8245ec, #a855f7)',
          boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
        }}
        >
          
          DOWNLOAD CV
      
        </a>
        </div>

        {/* Right Side */}
        <div className='md:w-1/3 flax justify-center md:justify-end'>
          <Tilt
          className='w-48 h-48 sm:h-64 md:w-[20rem] md:h-[20rem] border-rounded-full'
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={2000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          >

        <img
        src={profileleImage} 
        alt='Anum Arif'
        className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0,5)]"
         
        />
      </Tilt>
        </div>

      </div>

    </section>
  );
};

export default About;
