import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './asset/Home'
// import About from './asset/About'
// import Contact from './asset/Contact'
// import Login from './asset/Login'
// import Userdata from './asset/Userdata'
// import Nav from './asset/Nav'
// import 'bootstrap/dist/css/bootstrap.css'


import { Triangle } from 'react-loader-spinner'

const Home = React.lazy(() => import("./asset/Home"))
const About = React.lazy(() => import("./asset/About"))
const Contact = React.lazy(() => import("./asset/Contact"))
const Nav = React.lazy(() => import("./asset/Nav"))
const Login = React.lazy(() => import("./asset/Login"))
const Userdata = React.lazy(() => import("./asset/Userdata"))

const App = () => {
  return (
    <>
    <Suspense fallback={
      <div className='d-flex justify-content-center align-item-center' style={{ marginTop: "10%" }}>
        <Triangle/>
      </div>
      }>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/userdata' element={<Userdata />} />
      </Routes>
      <div className='mt-5'>
        <h2>Footer</h2>
      </div>
    </BrowserRouter>
    </Suspense>
    </>
  )
}

export default App
