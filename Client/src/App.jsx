import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './copmonents/Header'
import './App.css'
import Hero from './copmonents/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <Header/>
        <Hero/>
      </div>
      
    </>
  )
}

export default App
