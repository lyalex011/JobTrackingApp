import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './copmonents/Header'
import './App.css'
import axios from "axios";
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)


  async function getUser(token) {
    try {
      const response = await axios.get('/api/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUser(response.data)
    } catch(err) {
      console.log(err)
      localStorage.removeItem("token")
    }
    setIsLoading(false)
}

  useEffect(() => {
      
    let token = localStorage.getItem("token")

    if (token) {
        getUser(token)
    } else {
        setIsLoading(false)
    }
    
}, [])

let loggedIn = user.firstName

  return (
    <>
    <BrowserRouter>
    <div >
        <Header username={loggedIn} setUser={setUser}/>
        <Routes>
           <Route path="/" element={<Welcome/>}/> 
          <Route path="/dash" element={<Dashboard/>}/>
          
          
          
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/register" element={<Register setUser={setUser}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
