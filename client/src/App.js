import React from 'react';
import FirstSection from './Components/FirstSection';
import About from './Components/About';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {

  return (
    <div className=' h-screen w-screen overflow-x-hidden'>

      <section className=''>
        <FirstSection />
      </section>

      <div className='bg-white h-[10px]'></div>

      <section className=''>
        <About />
      </section>

      <div className='bg-white h-[1px]'></div>

      <section className=''>
        <Skill />
      </section>

      <section className=''>
        <Project />
      </section>

      <section className=''>
        <Contact />
      </section>

    </div>
  );
}

export default App;