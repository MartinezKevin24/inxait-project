import { addaptedCities, addaptedDepartmets } from "adapters/geoAdapters";

export const getDepartments = async () => {
  const dataDepartments = await fetch("https://api-colombia.com/api/v1/Department");
  return addaptedDepartmets(await dataDepartments.json());
}

export const getCities = async (idCity: number) => {
  const dataCities = await fetch(`https://api-colombia.com/api/v1/Department/${idCity}/cities`);
  return addaptedCities(await dataCities.json());
}