import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const About = () => {
  
  return (
    <>
    <Navbar/>
      <div className='flex shadow-xl m-5 rounded-2xl gap-15'>
        <div>
          <img src="/src/assets/react.svg" className='h-[340px]  w-[500px] my-15 pic' alt="" />
        </div>
        <div className='h-[400px] w-[500px] text-center my-12 p-4 rounded-2xl division shadow-blue-400 shadow-xl'>
          <h1 className='text-blue-700 font-bold text-5xl my-9'>This is a React Based Ecommerce app</h1>
          <p>React is frontend used for the web development. React is one of the most used frontend
            technology in the present times. Many developers use react as the main frontend
            liberary of the javascript.</p>
        </div>
      </div>
    </>
  )
}

export default About
