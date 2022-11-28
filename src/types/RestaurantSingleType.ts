import { AddressType } from './AddressType'
import { CategoryType } from './CategoryType'

export type RestaurantSingleType = {
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
      whatsapp: string
      ordem: string
      number: string
    }[]
    faixa_preco: number
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
    cozinhas: {
      label: string
    }[]
    refeicoes: {
      label: string
    }[]
    panoramas: []
  }
  statusCode: string
}
