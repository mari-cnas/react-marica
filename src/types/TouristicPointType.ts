import { AddressType } from './AddressType'
import { CategoryType } from './CategoryType'

export type TouristicPointType = {
  id: number
  nome: string
  capa: string
  lat: number
  lng: number
  categorias: CategoryType[]
  enderecos: AddressType[]
}
