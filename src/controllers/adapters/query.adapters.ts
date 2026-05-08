import { queryWithFilters, queryWithProvincia } from '../../helpers/query.js'
import type { PeriodMonthsQueryParams, PeriodQueryParams, ProvinciaQueryParams } from '../../types/index.js'
import type { Database } from '../../types/database.js'

type TableName = keyof Database['public']['Tables']

export const withMonth = (table: TableName, filters: PeriodMonthsQueryParams) =>
  queryWithFilters(table, filters, ['anio', 'mes'])

export const withQuarter = (table: TableName, filters: PeriodQueryParams) =>
  queryWithFilters(table, filters, ['anio', 'trimestre'])

export const withProvince = (table: TableName, filters: ProvinciaQueryParams) =>
  queryWithProvincia(table, filters)
