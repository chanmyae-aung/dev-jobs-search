import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import ForgotPassword from './pages/ForgotPassword'
import VerifyEmail from './pages/VerifyEmail'
import ResetPassword from './pages/ResetPassword'
import ResendCode from './pages/ResendCode'
import Detail from './components/Detail'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/verify-email' element={<VerifyEmail/>}/>
        <Route path='/reset' element={<ResetPassword/>}/>
        <Route path='/resend' element={<ResendCode/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </div>
  )
}
