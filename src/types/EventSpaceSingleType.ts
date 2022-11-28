import { AddressType } from './AddressType'
import { CategoryType } from './CategoryType'

export type EventSpaceSingleType = {
  item: {
    id: string
    nome: string
    email: string
    site: string
    buffet: boolean
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
    equipamentos: {
      id: number
      label: string
      total: number
    }[]
    espacos: {
      id: number
      espaco_id: number
      nome: string
      descricao: string
      area: number
      pe_direito: number
      medidas: string
      capacidade: number
      ordem: number
    }[]
    panoramas: []
  }
  statusCode: string
}
