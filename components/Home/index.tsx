import React from 'react'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <main id="home" className="bg-galaxy-4 bg-cover">
      <div className="pt-48">
        <div className="mb-2 text-center font-display text-3xl text-white sm:text-6xl lg:text-9xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Hello!').pauseFor(2500).start()
            }}
          />
        </div>
        <h1 className="mb-3 text-center font-display text-2xl text-white sm:text-4xl lg:text-7xl">
          I am Felopater,
        </h1>
        <h2 className="mb-5 text-center font-display text-lg text-white sm:text-2xl lg:text-5xl">
          A self-taught front-end web developer.
        </h2>
        <h4 className="hidden w-auto text-center font-display text-base text-white sm:block sm:text-xl lg:text-4xl">
          I build websites that focus on great user experience and interface
          that attracts customers and grows your business.
        </h4>
      </div>
    </main>
  )
}

export default Home
