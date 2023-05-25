import React from 'react'
import myImage from "../logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto bg-green-200 flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href = "/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src={myImage} alt="" width={50}/>
        <span className="ml-3 text-xl">WeatherNow</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link to = "/" className="mr-5 hover:text-gray-900">Home</Link>
        <Link to = "/about" className="mr-5 hover:text-gray-900">About</Link>
        <Link to = "/contact" className="mr-5 hover:text-gray-900">Contact</Link>
        <a href = "https://www.weatherstack.com" className="mr-5 hover:text-gray-900">API</a>
      </nav>
    </div>
  </header>
  )
}

export default Navbar
