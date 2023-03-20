import { CategoryType } from './CategoryType'

export type HotelType = {
  id: number
  nome: string
  capa: string
  lat: number
  lng: number
  categorias: CategoryType[]
  enderecos: {
    id: number
    lat: number
    lng: number
    label: string
  }[]
}
