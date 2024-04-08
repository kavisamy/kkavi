import React from 'react'
import {NavLink } from 'react-router-dom'
import './Navbar.css'
import {useAuth} from './Auth'

const Navbar = () => {
    const auth=useAuth()
  return (
    <div>
      <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Admin'>Admin</NavLink>
        <NavLink to='/User'>User</NavLink>
        
        {!auth.User && <NavLink to="/login">Login</NavLink>}
        {!auth.User && <NavLink to="/signup">Signup</NavLink>}

      </nav>
    </div>
  )
}
export default Navbar