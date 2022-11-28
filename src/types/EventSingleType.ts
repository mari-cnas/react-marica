import { AddressType } from './AddressType'
import { CategoryType } from './CategoryType'

export type EventSingleType = {
  item: {
    id: string
    nome: string
    email: string
    site: string
    gratuito: number
    url_ingresso: string
    datahora_inicio_f: string
    datahora_fim_f: string
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
