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
import Wishlist from './pages/Wishlist';
import NewWishlistItem from './pages/NewWishlistItem';
import Footer from './copmonents/Footer.jsx'
import Archive from './pages/Archive';

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
    <div className='flex flex-col justify-between h-screen' >
        <Header username={loggedIn} setUser={setUser}/>
        <Routes>
           <Route path="/" element={<Welcome/>}/> 
          <Route path="/dash" element={<Dashboard user={loggedIn_id}/>}/>
          <Route path="/new" element={<New user={loggedIn_id}/>}/>
          <Route path="/additem" element={<NewWishlistItem user={loggedIn_id}/>}/>
          <Route path="/index/:authorId" element={<Index user={loggedIn_id}/>}/>
          <Route path="/wishlist/:authorId" element={<Wishlist />}/>
          <Route path="/interview/:authorId" element={<InterviewIndex />}/>
          <Route path="/archive/:authorId" element={<Archive user={loggedIn_id}/>}/>

          <Route path="/edit/:authorId/:id" element={<EditAll setUser={setUser}/>}/>
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/register" element={<Register setUser={setUser}/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
