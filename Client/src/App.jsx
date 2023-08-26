import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './copmonents/Header'
import './App.css'
import Hero from './copmonents/Hero'
import Welcome from './pages/Welcome';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <div >
        <Header/>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
        </Routes>
      </div>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
