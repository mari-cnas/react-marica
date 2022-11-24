import { CategoryType } from './CategoryType'

export type AddressType = {
  id: number
  lat: number
  lng: number
  label: string
}

export type PageType = {
  id: number
  nome: string
  capa: string
  lat: number
  lng: number
  categorias: CategoryType[]
  enderecos: AddressType[]
}
