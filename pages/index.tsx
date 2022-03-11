import type { NextPage } from 'next'
// import Contact from '../components/Contact'
// import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Home'
import Navigation from '../components/Navigation'
// import Projects from '../components/Projects'

const Main: NextPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Hero />
      {/* <Projects />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default Main
