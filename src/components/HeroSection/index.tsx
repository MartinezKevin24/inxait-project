import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
  return (
    <div className='h-screen w-screen overflow-hidden relative flex items-center justify-start'>
      <div className='after:opacity-35 h-screen bg-red-800 after:w-screen relatve after:h-full after:absolute after:block after:bg-black after:top-0 after:content-[""] z-0 '>
        <video src={'/videos/hero_video.mp4'} className='absolute grayscale w-screen h-screen object-cover' autoPlay loop muted preload="none"/>
      </div>
      <div className='absolute z-50 text-white w-full flex justify-center px-4'>
        <div className='container flex flex-col gap-12'>
          <div className='max-w-[500px] flex flex-col gap-6'>
            <h1 className='text-white text-6xl font-bold leading-[70px]'>¡Es tu momento de ganar con <span className='bg-blue px-2'>BMW!</span></h1>
            <h2 className='leading-[28px] text-lg'>Solo necesitas registrarte para obtener tu código y participar en el sorteo especial de BMW para Bogotá. ¡No te lo pierdas!</h2>
          </div>
          <div className='bg-blue-ligth text-black font-black text-2xl uppercase hover:bg-blue hover:cursor-pointer hover:text-white w-full flex justify-center md:w-fit'>
            <Link href={"/registration"} className='py-4 px-8'>
              Participa ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
