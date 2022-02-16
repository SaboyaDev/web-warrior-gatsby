import React from 'react'
import Navbar from './Navbar'
import '../styles/globals.css'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      {children}
      <footer>
        <p>&copy; {`${new Date().getFullYear()} - SaboyaDev LLC`}</p>
      </footer>
    </div>
  )
}

export default Layout
