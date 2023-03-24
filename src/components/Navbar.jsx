import React, {useState} from 'react'
import Logo from '../assets/react.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
          <img src={Logo} alt="Logo Img" style={{width:'50px'}} />
        </div>

        {/* Menu */}
          <ul className='hidden md:flex'>
            <li> Home</li>
            <li> About</li>
            <li> Skills</li>
            <li> Work</li>
            <li> Contac</li>
          </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          <FaBars/>
        </div>

        {/* Mobile Menu */}
          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
            <li className='menuMobile'> Home</li>
            <li className='menuMobile'> About</li>
            <li className='menuMobile'> Skills</li>
            <li className='menuMobile'> Work</li>
            <li className='menuMobile'> Contac</li>
          </ul>
      

        {/* Social Icons */}
        <div className='hidden'>
        </div>
  
    </div>

  )
}

export default Navbar