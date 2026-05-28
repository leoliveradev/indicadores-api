import { queryWithFilters } from '../../helpers/query.js'
import type { PeriodMonthsQueryParams, PeriodQueryParams } from '../../types/index.js'
import type { Database } from '../../types/database.js'

type TableName = keyof Database['public']['Tables']

export const withMonth = (
  table: TableName, 
  filters: PeriodMonthsQueryParams
) =>
  queryWithFilters(table, filters, ['anio', 'mes'])

export const withQuarter = (
  table: TableName,
  filters: PeriodQueryParams
) =>
  queryWithFilters(table, filters, ['anio', 'trimestre'])

export const withProvince = (
  table: TableName,
  filters: any,
  options?: { count?: boolean }
) =>
  queryWithFilters(table, filters, ['anio', 'trimestre'], options)