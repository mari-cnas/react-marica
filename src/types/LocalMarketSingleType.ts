import { AddressType } from './AddressType'
import { CategoryType } from './CategoryType'

export type LocalMarketSingleType = {
  item: {
    id: string
    nome: string
    email: string
    site: string
    is_delivery: boolean
    descricao_t: string
    addresses: AddressType[]
    images: {
      id: string
      legenda: {
        pt_BR: string | null
      }[]
      ordem: string
      src: string
    }[]
    horario_funcionamento: {
      label: string
      is24: boolean
      horario: {
        abre: string
        fecha: string
      }
    }[]
    phones: {
      id: string
      nome: string
      whatsapp: boolean
      ordem: string
      number: string
    }[]
    categorias: CategoryType[]
    estruturas: {
      icone: string
      label: string
    }[]
    formas_pagamento: {
      icone: string
      label: string
    }[]
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
    panoramas: []
  }
  statusCode: string
}
