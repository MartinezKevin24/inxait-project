import { addaptedCities, addaptedDepartmets } from "adapters/geoAdapters";

export const getDepartments = async () => {
  const dataDepartments = await fetch("https://api-colombia.com/api/v1/Department", {cache: "no-store"});
  return addaptedDepartmets(await dataDepartments.json());
}

export const getCities = async (idCity: number) => {
  const dataCities = await fetch(`https://api-colombia.com/api/v1/Department/${idCity}/cities`, {cache: "no-store"});
  return addaptedCities(await dataCities.json());
}