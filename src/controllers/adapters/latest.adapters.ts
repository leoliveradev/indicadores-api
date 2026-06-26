import { supabase } from '../../config/supabase.js'
import type { Database } from '../../types/database.js'

type TableName = keyof Database['public']['Tables']

export const latestByPeriod = async (
  table: TableName,
  periodCols: string[]
) => {
  let latestQuery = supabase.from(table).select(periodCols.join(','))

  for (const col of periodCols) {
    latestQuery = latestQuery.order(col, { ascending: false })
  }

  const { data: latestData, error: latestError } =
    await latestQuery.limit(1).single()

  if (latestError) return { data: null, error: latestError }

  if (!latestData) return { data: [], error: null }

  // ✅ FIX CLAVE
  const row = latestData as Record<string, any>

  let query = supabase.from(table).select('*')

  for (const col of periodCols) {
    query = query.eq(col, row[col])
  }

  return query
}