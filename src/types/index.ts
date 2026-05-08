export type * from './database.js' 

export type BasePeriodParams = {
  anio?: string
}

export type PeriodQueryParams = BasePeriodParams & {
  trimestre?: string
}

export type PeriodMonthsQueryParams = BasePeriodParams & {
  mes?: string
}

export type ProvinciaQueryParams = PeriodQueryParams & {
  provincia?: string
}

// Puedes agregar tipos de utilidad para tus joins de Supabase
// Ej: Un partido que siempre incluya su provincia
import type { Tables } from './database.js'
export type PartidoConProvincia = Tables<'partidos'> & {
  provincias: Tables<'provincias'> | null
}