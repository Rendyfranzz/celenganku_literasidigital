import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='bg-gray-700 dark:bg-midnight items-center overflow-hidden w-screen sticky top-0 justify-center pt-4 '>
    <div className=' font-popin text-black dark:text-white text-bold md:text-xl'>
        <ul className='flex flex-row justify-center items-center space-x-6 font-bold'>
            <li>
                <NavLink to='/' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>
                    Berlangsung
                </NavLink>
            </li>
            <li>
                <NavLink to='/tercapai' className={({ isActive }) => isActive ? "text-cyan-500" : ""}>
                    Selesai
                </NavLink>

            </li>
        </ul>
    </div>
</nav>
  )
}
