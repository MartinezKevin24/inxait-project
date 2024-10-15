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
      <div>
        
      </div>
    )
  }

  return (
    <div className='flex justify-center items-center my-10'>
      <div className='max-w-[600px] flex justify-center items-center flex-col gap-8'>
        <h1 className='text-4xl font-black text-center'>!TU NUEVO CUPÓN DE PARTICIPACIÓN¡</h1>
        <div className='flex justify-center items-center'>
          <div className='absolute max-w-[900px] h-[400px] overflow-hidden'>
            <Image src={"/images/confetti.gif"} width={900} height={300} alt='Ticket'/>
          </div>
          <div className='z-20 relative flex items-center justify-center'>
            <Image src={"/images/ticket-color.svg"} width={300} height={300} alt='Ticket'/>
            <h1 className='uppercase absolute z-40 text-3xl font-black text-white'>
              {user?.code}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
