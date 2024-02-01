import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col bg-slate-800
   text-center text-gray-300 rounded-t-lg  '>
        <a href="#hero" className='block text-xl md:text-2xl '>Dk Shah</a>
        <a href="Mailto:dkshah634@gmail.com"
        className='font-serif text-sm md:text-md
        hover:text-indigo-500  '>dkshah634@gmail.com</a>
        <p className='text-xs font-sans mt-2 text-gray-500 '>
            Dk Shah@{new  Date().getFullYear()} All rights reserved. 
            <span role="img" aria-label="love"></span>
        </p>
    </div>
  )
}

export default Footer