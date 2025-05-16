import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Footer from  './Components/Footer/Footer';
import Eiducation from './Components/Eiducation/Eiducation';
import Skills from './Components/Skills/Skills';
import Work from "./Components/Work/Work";
import BlurBlob from './BlurBlob';
import './App.css'

const App = () => {
  

  return (
    <div className="bg-[#050414]"> 

    <BlurBlob position={{ top: '34%', left: '20%'}} size= {{ width: '30%', height: '40%' }}></BlurBlob>

     <div className='absolute inset-0 bg-[linear-gradient(to_right,#4141412e_1px,transparent_1px),linear-gradient(to_bottom,#4141412e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%)]'>

    </div>
    <div className='relative pt-20'>
      
      <Navbar />
      <About />
      <Contact />
      <Skills />
      <Footer />
      <Eiducation />
      <Experience />
      <Work />

    </div>
    </div>


      
    
  )
}

export default App
