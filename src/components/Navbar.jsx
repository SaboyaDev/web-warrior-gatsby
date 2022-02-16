import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <nav>
      <Link className='logo' to='/'>
        Web Warrior
      </Link>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Portfolio</Link>
      </div>
    </nav>
  )
}

export default Navbar
