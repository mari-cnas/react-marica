import { AddressType } from './AddressType'
import { CategoryType } from './CategoryType'

export type TouristicPointType = {
  id: string
  nome: string
  capa: string
  lat: string
  lng: string
  categorias: CategoryType[]
  enderecos: AddressType[]
}
