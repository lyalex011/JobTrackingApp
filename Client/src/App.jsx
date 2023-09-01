import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './copmonents/Header'
import './App.css'
import axios from "axios";
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import Index from './pages/Index';
import InterviewIndex from './pages/InterviewIndex'
import EditAll from './pages/EditAll';

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
let loggedIn_id = user.id

  return (
    <>
    <BrowserRouter>
    <div >
        <Header username={loggedIn} setUser={setUser}/>
        <Routes>
           <Route path="/" element={<Welcome/>}/> 
          <Route path="/dash" element={<Dashboard user={loggedIn_id}/>}/>
          <Route path="/new" element={<New user={loggedIn_id}/>}/>
          <Route path="/index/:authorId" element={<Index user={loggedIn_id}/>}/>

          <Route path="/interview/:authorId" element={<InterviewIndex user={loggedIn_id}/>}/>

          <Route path="/edit/:authorId/:id" element={<EditAll setUser={setUser}/>}/>
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/register" element={<Register setUser={setUser}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
