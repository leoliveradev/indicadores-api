import { supabase } from '../config/supabase.js'
import type { Database } from '../types/database.js'

type TableName = keyof Database['public']['Tables']

interface PeriodFilters {
  anio?: string
  trimestre?: string
}

interface ProvinciaFilters extends PeriodFilters {
  provincia?: string
}

interface MesFilters {
  anio?: string
  mes?: string
}

// Consulta genérica con filtros de período (anio/trimestre)
export const queryWithPeriod = async (
  table: TableName,
  filters: PeriodFilters,
  orderBy: string[] = ['anio', 'trimestre']
) => {
  let query = supabase.from(table).select('*') as any

  if (filters.anio) query = query.eq('anio', Number(filters.anio))
  if (filters.trimestre) query = query.eq('trimestre', Number(filters.trimestre))

  for (const col of orderBy) {
    query = query.order(col)
  }

  return query
}

// Consulta genérica con filtros de período + provincia
export const queryWithProvincia = async (
  table: TableName,
  filters: ProvinciaFilters,
  orderBy: string[] = ['anio', 'trimestre']
) => {
  let query = supabase.from(table).select('*') as any

  if (filters.anio) query = query.eq('anio', Number(filters.anio))
  if (filters.trimestre) query = query.eq('trimestre', Number(filters.trimestre))
  if (filters.provincia) query = query.ilike('provincia', `%${filters.provincia}%`)

  for (const col of orderBy) {
    query = query.order(col)
  }

  return query
}

// Consulta genérica con filtros de año/mes (mercado postal)
export const queryWithMes = async (
  table: TableName,
  filters: MesFilters,
  orderBy: string[] = ['anio', 'mes']
) => {
  let query = supabase.from(table).select('*') as any

  if (filters.anio) query = query.eq('anio', Number(filters.anio))
  if (filters.mes) query = query.eq('mes', Number(filters.mes))

  for (const col of orderBy) {
    query = query.order(col)
  }

  return query
}
