import { FiMail, FiHome, FiCode } from 'react-icons/fi'
import { BsPerson } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navigation = () => {
  return (
    <>
      <nav className="z-10 hidden h-20 w-full items-center justify-evenly sm:fixed sm:top-0 sm:flex sm:bg-black sm:text-xl lg:text-2xl">
        <Link
          to="home"
          activeClass="text-shadow-active"
          smooth={true}
          duration={500}
          spy={true}
          className="cursor-pointer font-display text-white"
        >
          Home
        </Link>

        <Link
          to="about"
          activeClass="text-shadow-active"
          smooth={true}
          duration={500}
          spy={true}
          className="cursor-pointer font-display text-white"
        >
          About-Me
        </Link>
        <Link
          to="contact"
          activeClass="text-shadow-active"
          smooth={true}
          duration={500}
          spy={true}
          className="cursor-pointer font-display text-white"
        >
          Contact
        </Link>
      </nav>

      <nav className="fixed top-0 z-10 flex h-16 w-full items-center justify-evenly bg-black sm:hidden">
        <Link to="home" smooth={true} duration={300} className="cursor-pointer">
          <FiHome color="white" />
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={300}
          className="cursor-pointer"
        >
          <BsPerson color="white" />
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={300}
          className="cursor-pointer"
        >
          <FiMail color="white" />
        </Link>
        {/* <ul className="flex h-20 w-full items-center justify-evenly">
          <li>
            <a href="#home">
              
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
        </ul> */}
      </nav>
    </>
  )
}

export default Navigation
