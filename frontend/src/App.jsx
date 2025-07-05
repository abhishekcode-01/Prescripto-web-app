import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import MyAppointments from './Pages/MyAppointments'
import MyProfile from './Pages/MyProfile'
import Appointments from './Pages/Appointments'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Contact/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality'/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/myappointment' element={<MyAppointments/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
      </Routes>
    </div>
  )
}

export default App
