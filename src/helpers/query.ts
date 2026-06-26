import { supabase } from '../config/supabase.js'
import { latestByPeriod } from '../controllers/adapters/latest.adapters.js'
import type { Database } from '../types/database.js'

type TableName = keyof Database['public']['Tables']

export const queryWithFilters = async (
  table: TableName,
  filters: Record<string, any>,
  orderBy: string[],
  options?: { count?: boolean }
) => {
  let query = supabase
    .from(table)
    .select('*', options?.count ? { count: 'exact' } : undefined) as any

  const ignoredKeys = new Set(['from', 'to', 'page', 'limit', 'format', 'sort', 'order'])

  for (const key in filters) {
    const value = filters[key]
    if (!value) continue

    if (ignoredKeys.has(key)) continue

    if (key === 'provincia') {
      query = query.ilike(key, `%${value}%`)
    } else {
      const parsed = isNaN(Number(value)) ? value : Number(value)
      query = query.eq(key, parsed)
    }
  }

  for (const col of orderBy) {
    query = query.order(col)
  }

  if (typeof filters.from === 'number' && typeof filters.to === 'number') {
    query = query.range(filters.from, filters.to)
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

export const latestByMonth = (table: TableName) =>
  latestByPeriod(table, ['anio', 'mes'])

export const latestByQuarter = (table: TableName) =>
  latestByPeriod(table, ['anio', 'trimestre'])
