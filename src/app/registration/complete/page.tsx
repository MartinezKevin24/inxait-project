"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import userState from 'atoms/userState'
import { useRouter } from 'next/navigation'
import { PageRoutes } from 'constants/PageRoutes'

export default function CompletePage() {

  const { push } = useRouter()
  const user = useRecoilValue(userState)

  useEffect(()=>{
    if(!user)
      push(PageRoutes.registration)
  },[])

  if(!user){
    return(
      <div></div>
    )
  }

  return (
    <div className='flex justify-center items-center my-10'>
      <div className='flex justify-center items-center flex-col gap-14'>
        <h1 className='text-4xl font-black text-center max-w-[600px] leading-[48px]'>!TU NUEVO CUPÓN DE PARTICIPACIÓN¡</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-32 gap-12'>
          <div className='flex justify-center items-center md:order-2'>
            <div className='absolute max-w-[700px] h-[300px] overflow-hidden'>
              <Image src={"/images/confetti.gif"} width={700} height={300} alt='Ticket'/>
            </div>
            <div className='z-20 relative flex items-center justify-center'>
              <Image src={"/images/ticket-color.svg"} width={300} height={300} alt='Ticket'/>
              <h1 className='uppercase absolute z-40 text-3xl font-black text-white'>
                {user?.code}
              </h1>
            </div>
          </div>
          <section className=' flex flex-col gap-4 order-1'>
            <h2 className='text-xl font-bold'>Datos del participante</h2>
            <ul className='flex flex-col gap-1'>
              <li className='flex flex-row gap-4'><span className='font-bold'>Nombres:</span> <span>{user.names}</span></li>
              <li className='flex flex-row gap-4'><span className='font-bold'>Apellidos:</span> <span>{user.last_names}</span></li>
              <li className='flex flex-row gap-4'><span className='font-bold'>Tipo de ID:</span> <span>{user.type_id}</span></li>
              <li className='flex flex-row gap-4'><span className='font-bold'>ID:</span> <span>{user.id}</span></li>
              <li className='flex flex-row gap-4'><span className='font-bold'>Departamento:</span> <span>{user.department}</span></li>
              <li className='flex flex-row gap-4'><span className='font-bold'>Ciudad:</span> <span>{user.city}</span></li>
              <li className='flex flex-row gap-4'><span className='font-bold'>Móvil:</span> <span>{user.mobile}</span></li>
              <li className='flex flex-row gap-4'><span className='font-bold'>Email:</span> <span>{user.email}</span></li>
              <li className='flex flex-row gap-4'><span className='font-bold'>Código:</span> <span className='uppercase'>{user.code}</span></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
