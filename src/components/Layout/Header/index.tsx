import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {

  const routes = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Participa",
      link: "/"
    }
  ]

  return (
    <nav className='bg-black py-2 w-full grid grid-cols-3 '>
      <ul className='flex flex-row gap-4'>
        {
          routes.map((route, i)=>(
            <li key={i} className='bg-white group relative flex items-center justify-center h-fit '>
              <Link href={route.link} className='w-full bg-red-700 h-full px-5 py-4 after:block after:content-[""] after:absolute after:left-0 after:w-full after:bg-white after:h-1 after:bottom-0 after:group-hover:bg-red-600'>{route.name}</Link>
            </li>
          ))
        }
      </ul>
      <div className='flex justify-center'>
        <Image src={'/bmw.png'} width={80} height={80} alt='BMW logo'/>
      </div>
    </nav>
  )
}
