"use client"
import React, { useState } from 'react'
import FormField from 'components/fields/FormField'
import { Form, Formik } from 'formik'
import SelectField from 'components/fields/SelectField'
import { Department } from 'models/geoModels/department'
import GeoField from 'components/fields/GeoField'
import { getCities } from 'services/geoRequest'
import { City } from 'models/geoModels/city'
import { User } from 'models/user/user'
import * as Yup from 'yup'
import userState from 'atoms/userState'
import { useSetRecoilState } from 'recoil'
import { useRouter } from 'next/navigation'
import { PageRoutes } from 'constants/PageRoutes'
import HabeasDataField from 'components/fields/HabeasDataField'

export interface RegistratinFormProps{
  departments: Department[] | null
}

export default function RegistratinForm({departments}: RegistratinFormProps) {

  const validationSchema = Yup.object().shape({
    names: Yup.string()
      .required('El nombre es obligatorio')
      .min(2, 'El nombre debe tener al menos 2 caracteres'),
    last_names: Yup.string()
      .required('El apellido es obligatorio')
      .min(2, 'El apellido debe tener al menos 2 caracteres'),
    type_id: Yup.string()
      .required('El tipo de identificación es obligatorio'),
    id: Yup.string()
      .required('La identificación es obligatoria')
      .matches(/^[0-9]+$/, 'La identificación solo debe contener números')
      .min(5, 'La identificación debe tener al menos 5 dígitos'),
    department: Yup.string()
      .required('El departamento es obligatorio'),
    city: Yup.string()
      .required('La ciudad es obligatoria'),
    mobile: Yup.string()
      .required('El número de móvil es obligatorio')
      .matches(/^[0-9]+$/, 'El número de móvil solo debe contener números')
      .min(10, 'El número de móvil debe tener al menos 10 dígitos'),
    email: Yup.string()
      .required('El correo electrónico es obligatorio')
      .email('El formato del correo electrónico es inválido'),
    habeas_data: Yup.boolean()
      .oneOf([true], 'La autorización de datos personales es obligatoria'),
  });
  const { push } = useRouter()
  const [cities, setCities] = useState<City[] | null>(null);
  const setUser = useSetRecoilState(userState)

  const initalValues = {
    names: "",
    last_names: "",
    type_id: "CC",
    id: "",
    department: "",
    city: "",
    mobile: "",
    email: "",
    code: "",
    habeas_data: false
  }

  const handleSubmit = (values: User) =>{

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let newCode = '';

    for (let i = 0; i < 8; i++) {
      newCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    const city = cities?.find((city)=>city.id === parseInt(values?.city))?.name;
    const department = departments?.find((department)=>department.id === parseInt(values?.department))?.name

    setUser({
      ...values,
      department: department ?? values.department,
      city: city ?? values.city,
      code: newCode,
    })

    push(PageRoutes.registration_complete);
  }

  const handleChange = async (e: React.ChangeEvent<HTMLFormElement>) => {
    if(e.target.name === "department"){
      const cities = await getCities(e.target.value)
      setCities(cities)
    }
  }

  return (
    <Formik 
      initialValues={initalValues} 
      validationSchema={validationSchema} 
      onSubmit={handleSubmit}>
      {({})=>(
        <Form className='max-w-[800px] w-full gap-5 flex flex-col md:py-0 pb-9' onChange={handleChange}>
          <div className='grid md:grid-cols-2 gap-5 grid-cols-1'>
            <FormField name='names' placeholder='Nombres'/>
            <FormField name='last_names' placeholder='Apellidos'/>
          </div>
          <SelectField name='type_id' placeholder='Tipo de identificación'/>
          <FormField name='id' placeholder='Numero de identifiación'/>
          <div className='grid md:grid-cols-2 gap-5 grid-cols-1'>
            <GeoField name='department' placeholder='Departamento' options={departments}/>
            <GeoField name='city' placeholder='Ciudad' options={cities}/>
          </div>
          <FormField name='mobile' placeholder='Numero de celular'/>
          <FormField name='email' placeholder='Email'/>
          <HabeasDataField/>
          <button className='bg-blue py-4 text-xl uppercase font-bold hover:bg-blue-ligth rounded-md md:block hidden' type='submit'>
            Registrarse
          </button>
          <div className='w-full bg-black fixed bottom-0 left-0 p-4'>
            <button className='bg-blue w-full py-2 text-lg uppercase font-bold hover:bg-blue-ligth rounded-md md:hidden block' type='submit'>
              Registrarse
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
