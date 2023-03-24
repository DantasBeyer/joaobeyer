import React from 'react'
import Logo from '../assets/react.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] 
                    flex justify-between 
                    items-center px-4 
                    bg-[#0a192f]
                    text-gray-300'>
        <div>
          <img src={Logo} alt="Logo Img" style={{width:'50px'}} />
        </div>

        {/* Menu */}
        <div>
          <ul className='flex'>
            <li> Home</li>
            <li> About</li>
            <li> Skills</li>
            <li> Work</li>
            <li> Contac</li>
          </ul>
        </div>

        {/* Hamburger */}
        <div className='hidden'>
          <FaBars/>
        </div>

        {/* Mobile Menu */}
        <div className='hidden'>
          <ul>
            <li> Home</li>
            <li> About</li>
            <li> Skills</li>
            <li> Work</li>
            <li> Contac</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className='hidden'>
        </div>
  
    </div>

  )
}

export default Navbar