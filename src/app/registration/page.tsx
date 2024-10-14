import React from 'react'
import RegistrationForm from 'components/forms/RegistrationForm'
import { getDepartments } from 'services/geoRequest';

export default async function RegistrationPage() {

  const departments = await getDepartments();

  return (
    <main className='flex justify-center my-12 relative'>
      <div className='container flex justify-center items-center flex-col px-4 gap-10'>
        <h1 className='text-3xl leading-[38px] font-bold uppercase text-center'>Registrate <br/> para participar</h1>
        <RegistrationForm departments={departments}/>
      </div>
    </main>
  )
}
