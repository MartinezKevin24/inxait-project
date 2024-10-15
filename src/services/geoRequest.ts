import { addaptedCities, addaptedDepartmets } from "adapters/geoAdapters";

export const getDepartments = async () => {
  try{
    const dataDepartments = await fetch("https://api-colombia.com/api/v1/Department");
    return addaptedDepartmets(await dataDepartments.json());
  }catch(e){
    console.log(e)
    return null
  }
}

export const getCities = async (idCity: number) => {
  try{
    const dataCities = await fetch(`https://api-colombia.com/api/v1/Department/${idCity}/cities`);
    return addaptedCities(await dataCities.json());
  }catch(e){
    console.log(e)
    return null
  }
}