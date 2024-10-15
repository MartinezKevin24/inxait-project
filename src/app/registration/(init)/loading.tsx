import React from 'react'

export default function Loading() {
  return (
    <main className='flex justify-center my-12 relative'>
      <div className='container flex justify-center items-center flex-col px-4 gap-10'>
        <h1 className='text-3xl leading-[38px] font-bold uppercase text-center'>Registrate <br/> para participar</h1>
        <div className='max-w-[800px] w-full gap-5 flex flex-col md:py-0 pb-9'>
          <div className='grid md:grid-cols-2 gap-5 grid-cols-1'>
            <div className='w-full h-[50px] bg-gray-300 animate-pulse rounded-md'/>
            <div className='w-full h-[50px] bg-gray-300 animate-pulse rounded-md'/>
          </div>
          <div className='w-full h-[50px] bg-gray-300 animate-pulse rounded-md'/>
          <div className='w-full h-[50px] bg-gray-300 animate-pulse rounded-md'/>
          <div className='grid md:grid-cols-2 gap-5 grid-cols-1'>
            <div className='w-full h-[50px] bg-gray-300 animate-pulse rounded-md'/>
            <div className='w-full h-[50px] bg-gray-300 animate-pulse rounded-md'/>
          </div>
            <div className='w-full h-[50px] bg-gray-300 animate-pulse rounded-md'/>
            <div className='w-full h-[50px] bg-gray-300 animate-pulse rounded-md'/>
          <button disabled className='bg-blue py-4 text-xl uppercase font-bold hover:bg-blue-ligth rounded-md md:block hidden' type='submit'>
            Registrarse
          </button>
          <div className='w-full bg-black fixed bottom-0 left-0 p-4'>
            <button disabled className='bg-blue w-full py-2 text-lg uppercase font-bold hover:bg-blue-ligth rounded-md md:hidden block' type='submit'>
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
