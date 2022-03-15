import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaJs,
  FaFigma,
  FaNpm,
  FaSass,
  FaTerminal,
  FaGithub,
  FaChrome,
  FaWordpress,
  FaShopify,
  FaBootstrap,
} from 'react-icons/fa'
import { GrGraphQl } from 'react-icons/gr'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiReact,
  SiClickup,
  SiEslint,
  SiFirebase,
  SiMarkdown,
  SiNextdotjs,
  SiPrettier,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiGit,
} from 'react-icons/si'
import { DiGit } from 'react-icons/di'
import { AiFillApi } from 'react-icons/ai'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <>
      <Element
        name="about"
        className="w-screen flex-col items-center justify-center px-5 pt-20 sm:hidden  "
      >
        <p className=" rounded-xl border-4 border-black bg-white bg-opacity-90 p-4 text-center font-display text-black sm:pl-4 sm:text-left sm:text-xl ">
          I am Felopater Melika. A front-end web developer specializing in
          React.js <FaReact className="inline" />. I am a self-learner and
          self-motivated person. I taught myself front-end web development while
          I was in highschool and soon I will start my computer science degree.
          I know how to use my skills to solve problems. I am a person who loves
          learning and is always willing to learn new skills to do the work
          needed. I am currently looking for a job in the field of web
          development. I am also currently learning backend development(node.js)
          to become a full-stack(MERN) developer. I always get excited about
          learning new languages and coding related topics. I am a person who is
          always eager to learn new things and improve my skills. I am also the
          type of person who can work perfectly in a team and alone. I am also
          friendly and easy to communicate with :).
        </p>
        <div className="mt-6 grid grid-cols-2 content-center justify-items-center gap-8 rounded-xl bg-white bg-opacity-90 p-4 align-middle ">
          <SiHtml5 size="5em" color="black" />
          <SiCss3 size="5em" color="black" />
          <SiSass size="5em" color="black" />
          <SiJavascript size="5em" color="black" />
          <SiTypescript size="5em" color="black" />
          <SiReact size="5em" color="black" />
          <SiNextdotjs size="5em" color="black" />
          <SiGit size="5em" color="black" />
        </div>
      </Element>
      <Element
        name="about"
        className="hidden h-screen pt-20 sm:flex sm:items-center sm:justify-center sm:px-10 lg:px-20"
      >
        <article className="space-y-5 ">
          <div>
            <div className="flex  items-center justify-center gap-8  lg:pt-8">
              <p className=" rounded-xl border-4 border-black bg-white bg-opacity-90 p-4 text-center font-display text-black sm:pl-4 sm:text-left sm:text-xl ">
                I am Felopater Melika. A front-end web developer specializing in
                React.js <FaReact className="inline" />. I am a self-learner and
                self-motivated person. I taught myself front-end web development
                while I was in highschool and soon I will start my computer
                science degree. I know how to use my skills to solve problems. I
                am a person who loves learning and is always willing to learn
                new skills to do the work needed. I am currently looking for a
                job in the field of web development. I am also currently
                learning backend development(node.js) to become a
                full-stack(MERN) developer. I always get excited about learning
                new languages and coding related topics. I am a person who is
                always eager to learn new things and improve my skills. I am
                also the type of person who can work perfectly in a team and
                alone. I am also friendly and easy to communicate with :).
              </p>
              <img src="/me3.png" width="300" className="sm:hidden lg:block" />
            </div>
            <div className="mt-6 flex w-full flex-row items-center justify-evenly rounded-xl bg-white bg-opacity-90 p-4 align-middle ">
              <SiHtml5 size="3em" color="black" />
              <SiCss3 size="3em" color="black" />
              <SiSass size="3em" color="black" />
              <SiJavascript size="3em" color="black" />
              <SiTypescript size="3em" color="black" />
              <SiReact size="3em" color="black" />
              <SiRedux size="3em" color="black" />
              <SiNextdotjs size="3em" color="black" />
              <SiGit size="3em" color="black" />
            </div>
          </div>
        </article>
      </Element>
    </>
  )
}

export default About
