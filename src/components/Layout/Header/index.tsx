import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PageRoutes } from 'constants/PageRoutes'

export default function Header() {

  const routes = [
    {
      name: "Inicio",
      link: PageRoutes.index
    },
    {
      name: "Siguenos",
      link: "https://www.instagram.com/bmw.colombia/"
    }
  ]

  return (
    <nav className='bg-transparent w-full flex justify-center sticky z-50'>
      <div className='container grid grid-cols-3 border-b-[1px] '>
        <div className='flex md:hidden'>
          options
        </div>
        <ul className='hidden flex-row gap-5 items-center md:flex'>
          {routes.map((route, i)=>(
            <li key={i} className='group relative flex items-center justify-center h-full py-6'>
              <Link href={route.link} className='w-full text-white font-bold text-xl px-5 py-4 h-full after:block after:content-[""] after:absolute after:left-0 after:w-0 after:bg-blue after:h-1 after:bottom-0 after:group-hover:w-full after:transition-all after:duration-700 capitalize'>{route.name}</Link>
            </li>
          ))}
        </ul>
        <div className='flex justify-center'>
          <Image src={'/images/bmw_logo.svg'} width={80} height={80} alt='BMW logo'/>
        </div>
        <Link href={PageRoutes.registration} className='flex items-center justify-end'>
          <div className='md:block hidden'>
            <div className='font-bold text-lg text-black w-[200px] flex justify-center uppercase relative group hover:cursor-pointer bg-white px-6 py-2 overflow-hidden'>
              <span className='block transform transition-all duration-700 group-hover:w-full w-0 h-full absolute bg-blue top-0 left-0 z-0'/>
              <span className='z-10 text-black ease-in-out group-hover:text-white transition-colors delay-200'>REGISTRATE</span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  )
}
