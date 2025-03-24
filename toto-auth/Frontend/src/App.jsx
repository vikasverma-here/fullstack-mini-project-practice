import React from 'react'
import Home from './pages/Home'
import Completed from './pages/Completed'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Task from './pages/Task'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Add from './pages/Add'
import SignUpForm from './pages/SignUp'
import LoginPage from './pages/LoginPage'
import { ToastContainer, toast } from "react-toastify";
import Edit from './pages/Edit'
const App = () => {
  return (
    <>
    
   <Navbar/>
    <div>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/completed" element={<Completed />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edit" element={<Edit/>} />
      <Route path="/tasks" element={<Task/>} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route path="/SignUp" element={<SignUpForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/task" element={<Task />} />
    </Routes>
    
    <ToastContainer />

    </div>
    
    
</>
  )
}

export default App
