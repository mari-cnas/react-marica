import { format, getMinutes, getMonth } from 'date-fns'
import slugify from 'slugify'

export const strToSlug = (str: string): string =>
  slugify(str, {
    remove: /[^0-9a-zA-Z\s]/gim,
    lower: true, // convert to lower case, defaults to `false`
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  })

export const formatStartDate = (inicio: string): string | number =>
  inicio ? format(new Date(inicio), 'yyyy-MM-dd HH:mm:mm:mm') : ''

export const formatEndDate = (fim: string): string | number =>
  fim ? format(new Date(fim), 'yyyy-MM-dd HH:mm:mm:mm') : ''

export const getMonthName = (date: string | number): string => {
  switch (getMonth(new Date(date))) {
    case 1:
      return 'Janeiro'
    case 2:
      return 'Fevereiro'
    case 3:
      return 'Março'
    case 4:
      return 'Abril'
    case 5:
      return 'Maio'
    case 6:
      return 'Junho'
    case 7:
      return 'Julho'
    case 8:
      return 'Agosto'
    case 9:
      return 'Setembro'
    case 10:
      return 'Outubro'
    case 11:
      return 'Novembro'
    default:
      return 'Dezembro'
  }
}
export const getMonthAbbreviation = (date: string | number): string => {
  switch (getMonth(new Date(date))) {
    case 1:
      return 'JAN'
    case 2:
      return 'FEV'
    case 3:
      return 'MAR'
    case 4:
      return 'ABR'
    case 5:
      return 'MAIO'
    case 6:
      return 'JUN'
    case 7:
      return 'JUL'
    case 8:
      return 'AGO'
    case 9:
      return 'SET'
    case 10:
      return 'OUT'
    case 11:
      return 'NOV'
    default:
      return 'DEZ'
  }
}

export const normalizeMinutes = (min: number | Date): string => {
  switch (getMinutes(min)) {
    case 0:
      return '00'
    case 1:
      return '01'
    case 2:
      return '02'
    case 3:
      return '03'
    case 4:
      return '04'
    case 5:
      return '05'
    case 6:
      return '06'
    case 7:
      return '07'
    case 8:
      return '08'
    case 9:
      return '09'
    default:
      return String(getMinutes(min))
  }
}
