import { City } from "models/geoModels/city";
import { CityEndpoint } from "models/geoModels/cityEndpoint";
import { Department } from "models/geoModels/department";
import { DepartmentEndpoint } from "models/geoModels/departmentEndpoint";

export const addaptedDepartmets = (departments: DepartmentEndpoint[]): Department[] => {
  const departmentsFormatted = departments.map((department)=>({
    id: department.id,
    name: department.name
  }))
  return departmentsFormatted
}

export const addaptedCities = (cities: CityEndpoint[]): City[] => {
  const citiesFormatted = cities.map((city)=>({
    id: city.id,
    name: city.name
  }))
  return citiesFormatted
}