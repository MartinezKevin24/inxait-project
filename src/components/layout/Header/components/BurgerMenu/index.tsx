"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { PageRoutes } from 'constants/PageRoutes'

export default function BurgerMenu() {

  const [openMenu, setOpenMenu] = useState(false)

  const routes = [
    {
      name: "Inicio",
      link: PageRoutes.index
    },
    {
      name: "Siguenos",
      link: "https://www.instagram.com/bmw.colombia/"
    },
    {
      name: "Registrate",
      link: PageRoutes.registration
    }
  ]

  return (
    <div className='flex md:hidden px-6 items-center justify-end'>
      <div className='relative' onClick={()=>setOpenMenu(!openMenu)}>
        <span className='icon-menu text-3xl'/>
      </div>
      {
        openMenu ?
        <div className='absolute bg-slate-800 w-full top-[66px] left-0 z-50'>
          <ul className='gap-5 items-center'>
            {routes.map((route, i)=>(
              <li key={i} className='group relative flex items-center justify-center h-full ' onClick={()=>setOpenMenu(false)}>
                <Link href={route.link} className='w-full text-white font-bold text-xl px-5 py-4 h-full after:block after:content-[""] after:absolute after:left-0 after:w-0 after:bg-blue after:h-1 after:bottom-0 after:group-hover:w-full after:transition-all after:duration-700 capitalize'>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        :
        null
      }
    </div>
  )
}
