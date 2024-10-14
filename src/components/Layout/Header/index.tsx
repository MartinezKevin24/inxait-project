import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {

  const routes = [
    {
      name: "Inicio",
      link: "/"
    },
    {
      name: "Siguenos",
      link: "https://www.instagram.com/bmw.colombia/"
    }
  ]

  return (
    <nav className='bg-transparent w-full flex justify-center fixed z-50'>
      <div className='container grid grid-cols-3 border-b-[1px] '>
        <div className='flex md:hidden'>
          
        </div>
        <ul className='hidden flex-row gap-5 items-center md:flex'>
          {
            routes.map((route, i)=>(
              <li key={i} className='group relative flex items-center justify-center h-full py-4'>
                <Link href={route.link} className='w-full text-white font-bold text-xl px-5 py-4 h-full after:block after:content-[""] after:absolute after:left-0 after:w-0 after:bg-blue after:h-1 after:bottom-0 after:group-hover:w-full after:transition-all after:duration-700 capitalize'>{route.name}</Link>
              </li>
            ))
          }
        </ul>
        <div className='flex justify-center'>
          <Image src={'/images/bmw_logo.svg'} width={80} height={80} alt='BMW logo'/>
        </div>
      </div>
    </nav>
  )
}
