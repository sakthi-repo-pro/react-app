import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div align="center"  className='mt-3'>
        <nav>
        <div className="btn-group" role="group" aria-label="Basic example">
            <a className="btn btn-primary" href="/">Home</a>
            <a className="btn btn-primary" href="/about">About</a>
            <a className="btn btn-primary" href="/blog">Blog</a>
            <a className="btn btn-primary" href="/contact">Contact</a>
        </div>
            
        </nav>
    </div>
  )
}
