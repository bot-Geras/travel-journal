import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Separate from './components/Separate'
import data from "/data"
console.log(data)

export default function App() {
  const journal = data.map(item => {
    return (
      <Separate
       {...item} />
    )

  })
  return (
    <div>
      <Navbar />
      <section className='card--list'>
        {journal}
      </section>
      
    </div>
    
  )
}

