"use client"
import { useField } from 'formik'
import React from 'react'

interface FormFieldProps{
  name: string,
  placeholder: string
}

export default function FormField({name, placeholder}: FormFieldProps) {

  const [field] = useField(name)

  return (
    <label htmlFor={name} className='relative group w-full'>
      <span className={"absolute -top-3 left-2 px-2 text-sm bg-black text-gray"}>
        {placeholder}
      </span>
      <select 
        {...field}
        id={name}
        name={name}
        defaultValue={"CC"}
        className='bg-transparent bg-red text-white border-[1px] border-gray-400 w-full outline-0 ring-0 px-4 h-14 rounded-lg'>
        <option value="CC" className='text-black'>Cedula de ciudadania</option>
        <option value="PS" className='text-black'>Pasaporte</option>
      </select>
    </label>
    
  )
}
