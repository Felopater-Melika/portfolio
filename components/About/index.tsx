import React from 'react'
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
} from 'react-icons/si'
import { DiGit } from 'react-icons/di'
import { AiFillApi } from 'react-icons/ai'
import Image from 'next/image'

const About = () => {
  return (
    <>
      {/* <h1 className="text-white">Hi! My name is Felopater Melika.</h1>
      <p className="text-white">
      I am a front-end developer specializing in React.js
      </p>
      <p className="text-white">
      I taught myself how to code while being at high school
      </p>
      <p className="text-white">
      I can build functional application with beautiful user experience and
        with minimum bugs
        </p>
        <p className="text-white">
        I am skilled at building E-commerce, blogs, and most basic type of
        websites
        </p>
        <p className="text-white">
        I am looking to become a full-stack web developer and a data scientist
        </p>
        <p className="text-white">
        I am currently looking for a job in the field of web development
      </p>
      <p className="text-white">
      I am self-driven and motivated to learn new things and improve my skills
        in the field of web development and data science
      </p> */}

      <article
        id="about"
        className="space-y-5 bg-galaxy-3 px-5 pt-20 sm:pb-16 lg:h-full lg:px-20 "
      >
        <div className=" space-y-2">
          <h1 className=" text-center font-display text-xl text-white sm:text-3xl lg:text-5xl ">
            Who am I?
          </h1>
          <div className="sm:grid sm:columns-2 sm:grid-cols-2 lg:pt-8">
            <p className="text-center font-display text-white sm:pl-4 sm:text-left sm:text-xl  lg:text-2xl">
              I am Felopater Melika. A front-end web developer specializing in
              React.js <FaReact className="inline" />, based in Tennessee, USA.
              I am a self-learner and self-motivated person; I was able to teach
              myself how to code while having high grades at school. I know how
              to use my skills to solve problems. I am a person who is always
              willing to learn new skills to do the work needed. I am currently
              looking for a job in the field of web development and currently
              learning backend development(node.js).
            </p>
            <div className=" z-0 text-center sm:text-right">
              <Image src={'/me.png'} width={'300'} height={'350'} />
            </div>
          </div>
        </div>

        <div className="space-y-3 pb-3 lg:pt-10">
          <h1 className="text-center font-display text-xl text-white sm:text-3xl lg:text-5xl">
            What can I do?
          </h1>
          <p className="text-center font-display text-white sm:text-xl lg:text-2xl">
            I can build beautiful websites written in clean and efficient code.
            I can learn anything on my own and require little help. I also can
            and love working with teams on the job as I believe working as a
            team brings success.
          </p>
        </div>

        <div className="hidden grid-cols-3 content-center  pt-10  lg:grid">
          <div className="text-center">
            <h1 className="mb-3 text-2xl text-white">My hard skills are:</h1>
            <ul className="space-y-1">
              <li className="text-lg text-white">
                HTML5 <FaHtml5 className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                CSS3 <FaCss3 className="inline" color="white" />
              </li>{' '}
              <li className="text-lg text-white">
                SASS <FaSass className="inline" color="white" />
              </li>{' '}
              <li className="text-lg text-white">
                Styled components
                <SiStyledcomponents className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Tailwindcss <SiTailwindcss className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Bootstrap <FaBootstrap className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Javascript <FaJs className="inline" color="white" />
              </li>{' '}
              <li className="text-lg text-white">
                Typescript <SiTypescript className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                React.js <FaReact className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Redux <SiRedux className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Next.js <SiNextdotjs className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                GraghQL <GrGraphQl className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                REST APIs <AiFillApi className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Firebase <SiFirebase className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Markdown <SiMarkdown className="inline" color="white" />
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h1 className="text-2xl text-white"> My tools are:</h1>
            <ul className="space-y-1">
              <li className="text-lg text-white">
                Visual studio code
                <SiVisualstudiocode className="inline" color="white" />
              </li>{' '}
              <li className="text-lg text-white">
                Chrome dev tools <FaChrome className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Git <DiGit className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Github <FaGithub className="inline" color="white" />
              </li>{' '}
              <li className="text-lg text-white">
                NPM <FaNpm className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Terminal <FaTerminal className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Figma <FaFigma className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Clickup <SiClickup className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Eslint <SiEslint className="inline" color="white" />
              </li>{' '}
              <li className="text-lg text-white">
                Prettier <SiPrettier className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Shopify <FaShopify className="inline" color="white" />
              </li>
              <li className="text-lg text-white">
                Wordpress <FaWordpress className="inline" color="white" />
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h1 className="text-2xl text-white"> My soft skills are:</h1>
            <ul className="space-y-1">
              <li className="text-lg text-white">Problem solving</li>
              <li className="text-lg text-white">Research</li>
              <li className="text-lg text-white">Critical thinking</li>
              <li className="text-lg text-white">Time management</li>
              <li className="text-lg text-white">Emotional Intelligence</li>
              <li className="text-lg text-white">Teamwork</li>
              <li className="text-lg text-white">Communication</li>
              <li className="text-lg text-white">Agile</li>
              <li className="text-lg text-white">Project management</li>
              <li className="text-lg text-white">
                User interface/User experience design
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  )
}

export default About
