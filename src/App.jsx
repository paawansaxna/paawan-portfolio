import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Splinetext from './sections/Splinetext'
import MaskRevealSection from './sections/MaskRevealSection'
import { SparklesCore } from './components/SparklesCore'
import SparkleBg from './sections/SparkleBg'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Contact from './sections/Contact'
import { Footer } from './sections/Footer'


const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <SparkleBg/>
      <Hero/>
      <About/>
      <MaskRevealSection/>
      <Projects/>
      <Experiences/>
      <Contact/>
      <Footer/>
      {/* {projects} */}
      {/* {experience} */}
      {/* {testimonial} */}
      {/* {contact} */}
      {/* {footer} */}
    </div>
  )
}

export default App