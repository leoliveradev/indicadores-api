import type { Request, Response, NextFunction } from 'express'
import type { Database } from '../../types/database.js'
import { exportToCSV, exportToExcel } from '../../utils/export.js'
import { cache, generateCacheKey } from '../../utils/cache.js'

interface ControllerOptions {
  pagination?: boolean
  cache?: boolean
  ttl?: number
}

export const createController = <
  TQuery,
  TTable extends keyof Database['public']['Tables']
>(
  table: TTable,
  queryFn: (
    table: TTable,
    filters: TQuery & { from?: number; to?: number },
    options?: { count?: boolean }
  ) => Promise<any>,
  options: ControllerOptions = {}
) => {
  return async (
    req: Request<{}, {}, {}, TQuery & { page?: string; limit?: string; format?: string }>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const format = req.query.format

      const cacheKey = generateCacheKey(String(table), req.query)

      if (options.cache && !format) {
        const cached = cache.get(cacheKey)

        if (cached) {
          res.json(cached)
          return
        }
      }

      const hasPaginationParams =
        req.query.page !== undefined || req.query.limit !== undefined

      const usePagination =
        options.pagination && hasPaginationParams && !format

      let paginationParams: { from?: number; to?: number } = {}

      let page: number | undefined
      let limit: number | undefined

      if (usePagination) {
        page = Number(req.query.page || 1)
        limit = Number(req.query.limit || 100)

        const from = (page - 1) * limit
        const to = from + limit - 1

        paginationParams = { from, to }
      }

      const { data, error, count } = await queryFn(
        table,
        {
          ...req.query,
          ...paginationParams
        },
        usePagination ? { count: true } : undefined
      )

      if (error) throw error

      if (format) {
        paginationParams = {}
      }

      if (!usePagination && data.length > 5000) {
        res.status(400).json({
          error: 'Too many records, use pagination or export'
        })
        return
      }

      if (format === 'csv') {
        const csv = exportToCSV(data)

        res.header('Content-Type', 'text/csv')
        res.attachment(`${String(table)}.csv`)

        res.send(csv)
        return
      }

      if (format === 'excel') {
        const buffer = exportToExcel(data)

        res.header(
          'Content-Type',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        )

        res.attachment(`${String(table)}.xlsx`)

        res.send(buffer)
        return
      }

      const response = usePagination
        ? {
          data,
          total: count,
          page,
          limit
        }
        : {
          data,
          total: data.length
        }

      if (options.cache && !format) {
        cache.set(cacheKey, response, options.ttl || 60)
      }

      res.json(response)

    } catch (err) {
      next(err)
    }
  }
}