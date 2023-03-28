import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center  items-center p-4'>
        <form method='POST'  action="https://getform.io/f/87e0d40c-6bf4-4e53-af53-d4464e682258" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4  border-[#0BD0F8]  text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> // Submit the form below or shoot me an Email - dantasbeyer@outlook.com</p>
            </div>
                <input className=' bg-cyan-100 p-2' type='text' placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-cyan-100' type='email' placeholder='Email' name='email' />
                <textarea  name='message' className='bg-cyan-100 p-2' cols="30" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-[#0BD0F8] hover:border-[#0BD0F8] px-4 py-3 my-8 mx-auto flex items-center'>Let´s Collaborate</button>
        </form>
    </div>
  )
}

export default Contact