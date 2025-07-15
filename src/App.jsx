import * as React from 'react'
import Button from '@mui/material/Button'
import NavBar from './components/NavBar'

export default function App() {

  return (
    <>
      <section id='home' 
      className="h-[400px] 
      bg-gray-400 
      bg-no-repeat 
      bg-center
      bg-cover">
        <header>
          <NavBar/>
        </header>
        <h1>Hero section</h1>
      </section>
      <section id='explore' className="h-[400px]">
        <h1>Destinations section</h1>
      </section>
      <section id='travel' className="h-[400px]">
        <h1>Special offer section</h1>
      </section>
      <section id='blog' className="h-[400px]">
        <h1>Blog section</h1>
      </section>
      <section id='pricing' className="h-[400px]">
        <h1>Trip planners section</h1>
      </section>
      <section className="h-[400px]">
        <h1>Gallery section</h1>
      </section>
      <section className="h-[400px]">
        <h1>Destinations section</h1>
      </section>
      <footer>
        <h1>footer</h1>
      </footer>
    </>
  )
}