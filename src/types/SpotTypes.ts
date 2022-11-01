export type ItemSpotType = {
  addresses: {
    id: string
    label: string
    lat: number
    lng: number
  }[]
  categorias: { id: number; label: string }[]
  descricao_t: string
  dicas_t: string
  estruturas: {
    icone: string
    label: string
  }[]
  formas_pagamento: []
  gratuito: number
  hoario_funcionamento: []
  id: number
  images: {
    id: number

    src: string
  }
}
