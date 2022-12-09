import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import App from './App'
import Home from './Home'
import Blog from "./Blog"
import Contact from "./Contact" 
// import Routing from "./Routing.js"
import NavBar from './NavBar'
export default function Routing() {
  return (
    <div>
        <BrowserRouter>
        <Routes/>
       
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
