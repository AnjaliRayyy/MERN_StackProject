import React from 'react'
// import { NavLink } from 'react-router-dom
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div className='h-16 bg-slate-950 text-lg text-violet-600 flex justify-around items-center'>
      <div className="logo-brand text-2xl font-semibold">RayTechz</div>
      <nav>
        {/* ------------------Home------------------  */}
        <ul className='flex '>
          <li className='mr-8'><NavLink to="/" 
          className={({ isActive }) => 
            isActive 
              ? "text-slate-100 underline decoration-violet-600 underline-offset-6 font-semibold" 
              : "text-violet-600 hover:text-slate-100"
          }
        >
          Home
        </NavLink></li>

        {/* ------------------About------------------  */}
          <li className='mr-8'>
          <NavLink to="/about" 
          className={({ isActive }) => 
            isActive 
              ? "text-slate-100 underline decoration-violet-600 underline-offset-6 font-semibold" 
              : "text-violet-600 hover:text-slate-100"
          }
        >
          About
        </NavLink></li>

        {/* ------------------Contact------------------  */}
          <li className='mr-8'><NavLink to="/contact" 
          className={({ isActive }) => 
            isActive 
              ? "text-slate-100 underline decoration-violet-600 underline-offset-6 font-semibold" 
              : "text-violet-600 hover:text-slate-100"
          }
        >
          Contact
        </NavLink></li>

        {/* ------------------Login------------------  */}
          <li className='mr-8'><NavLink to="/login" 
          className={({ isActive }) => 
            isActive 
              ? "text-slate-100 underline decoration-violet-600 underline-offset-6 font-semibold" 
              : "text-violet-600 hover:text-slate-100"
          }
        >
          Login
        </NavLink></li>

        {/* ------------------Register------------------  */}
          <li className='mr-8'><NavLink to="/register" 
          className={({ isActive }) => 
            isActive 
              ? "text-slate-100 underline decoration-violet-600 underline-offset-6 font-semibold" 
              : "text-violet-600 hover:text-slate-100"
          }
        >
          Register
        </NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
