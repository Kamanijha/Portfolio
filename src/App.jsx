import React from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import ThemeToggle from './components/Theme'
import { Toaster } from 'react-hot-toast'
import CursorTracker from './components/Animation'
import AnimatedSection from './components/AnimatedSection'
function App() {
  return (
    <>
      <div className='relative min-h-screen bg-white text-black dark:bg-black dark:text-white'>
        <CursorTracker />
        <Navbar />
        <div className="absolute top-16 right-4 ">
          <ThemeToggle />
        </div>
        <div className='pt-20 '>
          <Home />
          
          <About />
          
          <Project />
          
          <Contact />
          <AnimatedSection/>
        </div>
      </div>
      <Toaster />
    </>
  )
}

export default App
