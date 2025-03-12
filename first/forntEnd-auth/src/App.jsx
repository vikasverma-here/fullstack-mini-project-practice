import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'; 
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
