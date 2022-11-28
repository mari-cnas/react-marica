import { AddressType } from './AddressType'
import { CategoryType } from './CategoryType'

export type RestaurantType = {
  id: number
  nome: string
  capa: string
  lat: number
  lng: number
  categorias: CategoryType[]
  enderecos: AddressType[]
}
