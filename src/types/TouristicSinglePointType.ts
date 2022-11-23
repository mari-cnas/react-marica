import { AddressType } from './AddressType'
import { CategoryType } from './CategoryType'

export type TouristicSinglePointType = {
  item: {
    id: string
    nome: string
    email: string
    site: string
    gratuito: number
    descricao_t: string
    dicas_t: string
    addresses: AddressType[]
    images: {
      id: string
      legenda: {
        pt_BR: string | null
      }[]
      ordem: string
      src: string
    }[]
    horario_funcionamento: []
    phones: {
      id: string
      nome: string
      whatsapp: string
      ordem: string
      number: string
    }[]
    categorias: CategoryType[]
    estruturas: {
      icone: string
      label: string
    }[]
    formas_pagamento: []
    redes: {
      nome: string
      icone: string
      url: string
      user: string
    }[]
    restricoes: {
      icone: string
      label: string
    }[]
    viajantes: {
      label: string
    }[]
    panoramas: []
  }
  statusCode: string
}
