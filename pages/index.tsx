import type { NextPage } from 'next'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../components/Home'
import Navigation from '../components/Navigation'
// import Projects from '../components/Projects'

const Main: NextPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Home />
      {/* <Projects /> */}
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Main
