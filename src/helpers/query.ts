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

export const queryWithFilters = async (
  table: TableName,
  filters: Partial<Record<string, string>>,
  orderBy: string[]
) => {
  let query = supabase.from(table).select('*') as any

  for (const key in filters) {
    if (filters[key]) {
      query = query.eq(key, Number(filters[key]))
    }
  }

  for (const col of orderBy) {
    query = query.order(col)
  }

  return query
}

export const queryLatest = async (
  table: TableName,
  orderBy: string[] = ['anio', 'mes']
) => {
  let query = supabase.from(table).select('*') as any

  for (const col of orderBy) {
    query = query.order(col, { ascending: false })
  }

  query = query.limit(1)

  return query
}