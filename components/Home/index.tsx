import { Element } from 'react-scroll'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <Element name="home">
      <motion.main
        id="home"
        className="mt-24 flex  h-full w-full flex-col items-center justify-center lg:h-screen"
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <div className=" text-center font-display text-3xl text-white sm:text-6xl lg:text-8xl">
            Hello!
          </div>
          <h1 className="mb-3 text-center font-display text-2xl text-white sm:text-4xl lg:text-7xl">
            I am Felopater,
          </h1>
          <h2 className="mb-5 text-center font-display text-lg text-white sm:text-2xl lg:text-5xl">
            A self-taught front-end web developer.
          </h2>
          <h4 className="hidden w-auto text-center font-display text-base text-white sm:block sm:text-xl lg:text-4xl">
            I build websites that focus on great user experience and interface.
          </h4>
        </div>
        <img src="/me3.png" width="300" className="lg:hidden" />
      </motion.main>
    </Element>
  )
}

export default Home
