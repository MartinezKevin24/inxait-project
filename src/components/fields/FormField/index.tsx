"use client"
import React from 'react'
import classNames from 'classnames'
import { useField } from 'formik'
import FormError from '../FormError'

interface FormFieldProps{
  name: string,
  placeholder: string
}

export default function FormField({name, placeholder}: FormFieldProps) {

  const [field, meta] = useField(name);

  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={name} className='relative group w-full'>
        <span className={classNames(['left-4 group-focus-within:-top-3 group-focus-within:text-sm group-focus-within:px-2 group-focus-within:text-gray group-focus-within:bg-black',
          {"-top-3 px-2 bg-black text-gray text-sm": field.value !== ""},
          {"text-gray-400 top-4": field.value == ""},
          "ease-out transition-all duration-200 absolute"
        ])}
        >
          {placeholder}
        </span>
        <input
          {...field}
          id={name}
          name={name}
          type='text'
          className='bg-transparent bg-red text-white border-[1px] border-gray-400 w-full outline-0 ring-0 px-4 h-14 rounded-lg'
        />
      </label>
      {meta.touched && meta.error ? <FormError name={field.name} /> : null}
    </div>
  )
}
