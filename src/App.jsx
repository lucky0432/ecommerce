import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
import AdminLogIn from './AdminLogIn'
import AdminDashBoard from './components/AdminDashBoard'
import BackEndDataCRUD from './components/BackEndDataCRUD'
import UserSign from './components/UserSign'
import UserLogin from './components/UserLogin'
import About from './components/About'
import CartData from './components/CartData'
import SelectedData from './SelectedData'

function App() {
  

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route path='/admin/sign' element={<Admin/>} />
        <Route path='/admin/login' element={<AdminLogIn/>} />
        <Route path='/admin/dashboard' element={<AdminDashBoard/>} />
        <Route path='/admin/CRUD' element={<BackEndDataCRUD/>} />
        <Route path='/user/sign' element={<UserSign/>} />
        <Route path='/user/login' element={<UserLogin/>} />
        <Route path='/data' element={<CartData/>} />
        <Route path='/userdata' element={<SelectedData/>} />
      </Routes>
    </>
  )
}

export default App
