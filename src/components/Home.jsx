import React from 'react'
import {HiArrowNarrowRight} from  'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#0a192f]'>

        {/* Conteiner */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#0BD0F8]'>
          Hi, my name is
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> 
          João Beyer 
        </h1>
        <h2 className='text-4xl sm:text-7x1 font-bold text-[#8892b0] '>
          I´m a Full Stack Web Developer 
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I´m a developer specializing in building (and occasionally designing) excepicional digital experiences.
          Currently, I´m focussed on building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white  group border-2 px-6 py-3 flex items-center hover:bg-[#0BD0F8]'> 
            View Work 
            <span className=' group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-6'/>
            </span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home