"use client"
import React from 'react'
import { useField } from 'formik'
import FormError from '../FormError'
import Link from 'next/link';

export default function HabeasDataField() {

  const [field, meta] = useField("habeas_data");

  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={field.name}>
        <input 
          {...field}
          type='checkbox' 
          id='habeas_data' 
          name='habeas_data' 
          className='mr-2'/>
        <span>Autorizo el tratamiento de mis datos de acuerdo con la finalidad establecida en la <Link target='_blank' href={"https://www.minjusticia.gov.co/ministerio/Documents/SIG/_pol%C3%ADtica%20de%20tratamiento%20y%20protecci%C3%B3n%20datos%20personales.pdf"} className='text-blue-600 underline'>política de protección de datos personales.</Link></span>
      </label>
      {meta.touched && meta.error ? <FormError name={field.name} /> : null}
    </div>
  )
}
