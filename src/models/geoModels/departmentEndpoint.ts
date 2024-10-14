export interface DepartmentEndpoint {
  id: number
  name: string
  description: string
  cityCapitalId: number
  municipalities: number
  surface: number
  population: number
  phonePrefix: string
  countryId: number
  cityCapital: CityCapital
  country: unknown
  cities: unknown
  regionId: number
  region: unknown
  naturalAreas: unknown
  maps: unknown
  indigenousReservations: unknown
  airports: unknown
}

export interface CityCapital {
  id: number
  name: string
  description: string
  surface: number
  population: number
  postalCode: string
  departmentId: number
  department: unknown
  touristAttractions: unknown
  presidents: unknown
  indigenousReservations: unknown
  airports: unknown
  radios: unknown
}
