import React from 'react'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center 
    justify-center gap-10 md:gap-20 py-20 ">
    <div className='w-full md:w-6/12 '>
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
            I am a software engineer with experience in building web applications using JavaScript and Node.js.
            Hi there! I am a software engineer specializing in building web applications with JavaScript and Node.

        </p>
        <a href="mailto:dkshah624@gmail.com"
        className='block mt-3 text-md md:text-lg font-serif
        text-gray-700 dark:text-gray-300 underline mb-3
        hover:text-indigo-600 dark:hover:text-indigo-500 '>mailto:dkshah624@gmail.com</a>
    </div>
 <img src={"https://avatars.githubusercontent.com/u/135329193?s=400&u=d027043ba35207ee996192f843bfe31487ca7bd8&v=4"} alt="Dk" className='w-full md:w-6/12 rounded-lg hover:rounded-full ' />
    </div>
  )
}

export default About