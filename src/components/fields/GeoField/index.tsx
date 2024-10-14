"use client"
import { useField } from 'formik'
import React from 'react'

interface FormFieldProps{
  name: string,
  placeholder: string,
  options?: {
    id: number,
    name: string
  }[]
}

export default function FormField({name, placeholder, options}: FormFieldProps) {

  const [field] = useField(name)

  if(!options){
    return(
    <label htmlFor={name} className='relative group w-full'>
      <span className={"absolute top-4 left-2 px-2 bg-black text-gray"}>
        {placeholder}
      </span>
      <select 
        disabled
        name={name}
        className='bg-gray-900 bg-red text-white border-[1px] border-gray-400 w-full outline-0 ring-0 px-4 h-14 rounded-lg'>
      </select>
    </label>
    )
  }

  return (
    <label htmlFor={name} className='relative group w-full'>
      <span className={"absolute -top-3 left-2 px-2 text-sm bg-black text-gray"}>
        {placeholder}
      </span>
      <select 
        {...field}
        id={name}
        name={name}
        className='bg-transparent bg-red text-white border-[1px] border-gray-400 w-full outline-0 ring-0 px-4 h-14 rounded-lg'>
        <option value={""} className='text-black'>-- Selecciona un Departamento --</option>
        {options?.map((option, i)=>(<option key={i} value={option?.id} className='text-black'>{option?.name}</option>))}
      </select>
    </label>
  )
}
