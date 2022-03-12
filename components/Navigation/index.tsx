import React from 'react'
import { FiMail, FiHome, FiCode } from 'react-icons/fi'
import { BsPerson } from 'react-icons/bs'

const Navigation = () => {
  return (
    <>
      <nav className="z-10 hidden h-20 w-full items-center justify-evenly sm:sticky sm:top-0 sm:flex sm:bg-black sm:text-xl lg:text-2xl">
        <a href="#home" className="text-white">
          Home
        </a>
        <a href="#projects" className="text-white">
          Projects
        </a>
        <a href="#about" className="text-white">
          About
        </a>
        <a href="#contact" className="text-white">
          Contact
        </a>
      </nav>

      <nav className="sticky top-0 z-10 bg-black sm:hidden">
        <ul className=" flex h-20 w-full items-center justify-evenly ">
          <li>
            <a href="#home">
              <FiHome color="white" />
            </a>
          </li>
          <li>
            <a href="#projects">
              <FiCode color="white" />
            </a>
          </li>
          <li>
            <a href="#about">
              <BsPerson color="white" />
            </a>
          </li>
          <li>
            <a href="#contact">
              <FiMail color="white" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
