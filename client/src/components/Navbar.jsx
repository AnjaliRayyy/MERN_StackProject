import React from 'react'
// import { NavLink } from 'react-router-dom
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div className='h-16 bg-slate-950 text-lg text-purple-700 flex justify-around items-center'>
      <div className="logo-brand">RayTechz</div>
      <nav>
        <ul className='flex '>
          <li className='mr-8'><NavLink to='/'>Home</NavLink></li>

          <li className='mr-8'>
          <NavLink to="/about" 
          className={({ isActive }) => 
            isActive 
              ? "text-purple-700 underline font-semibold" 
              : "text-gray-700 hover:text-purple-500"
          }
        >
          About
        </NavLink></li>
          <li className='mr-8'><NavLink to='/contact'>Contact</NavLink></li>
          <li className='mr-8'><NavLink to='/login'>Login</NavLink></li>
          <li className='mr-8'><NavLink to='/register'>Register</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
