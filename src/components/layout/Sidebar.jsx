import React from 'react'
import { buttonVariants } from '../ui/button'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Home, LayoutDashboard } from 'lucide-react'

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className="bg-white dark:bg-gray-800 shadow-inner w-64 h-[100%]">
      <nav>
        <ul className='flex flex-col p-5 gap-5 justify-end'>
          <li>
            <NavLink 
              to="/" 
              className={({isActive}) =>
                `${buttonVariants({variant:"outline", justify:"start"})} w-full gap-2 py-5 ${isActive ? 'bg-gray-200 dark:bg-gray-700' : 'dark:bg-transparent'}`
              }
            >
              <Home/> Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard" 
              className={({isActive}) =>
                `${buttonVariants({variant:"outline", justify:"start"})} w-full gap-2 py-5 ${isActive ? 'bg-gray-200 dark:bg-gray-700' : 'dark:bg-transparent'}`
              }
            >
              <LayoutDashboard/> Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
