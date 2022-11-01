export type HotelType = {
  id: string
  nome: string
  capa: string
  lat: string
  lng: string
  categorias: {
    id: string
    label: string
  }[]
  enderecos: {
    id: string
    lat: string
    lng: string
    label: string
  }[]
}
