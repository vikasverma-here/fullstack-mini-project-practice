import React, { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import EmployeeForm from './component/EmployeeForm'
import EmployeeRecord from './component/EmployeeRecord'
import Edit from './component/Edit'
import { ToastContainer} from 'react-toastify';
const App = () => {
  const [id, setid] = useState("dfdfd")
  return (
    <div>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/employees' element={<EmployeeForm/>}></Route>
          <Route path={`/edit/:${id}`}  element={<Edit id={id} setid={setid} />}></Route>
          <Route path='/allemployee' element={<EmployeeRecord id={id} setid={setid}/>}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <ToastContainer />
    </div>
  )
}

export default App
