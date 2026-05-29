import type { Request, Response, NextFunction } from 'express'
import type { Database } from '../../types/database.js'
import { exportToCSV, exportToExcel } from '../../utils/export.js'

interface ControllerOptions {
  pagination?: boolean
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
      const hasPaginationParams =
        req.query.page !== undefined || req.query.limit !== undefined

      let paginationParams: { from?: number; to?: number } = {}

      let page: number | undefined
      let limit: number | undefined

      if (options.pagination && hasPaginationParams) {
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
        options.pagination ? { count: true } : undefined
      )

      if (error) throw error

      const format = req.query.format

      if (format) {
        paginationParams = {}
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

      if (options.pagination && hasPaginationParams) {
        res.json({
          data,
          total: count,
          page: Number(req.query.page || 1),
          limit: Number(req.query.limit || 100)
        })
      } else {
        res.json({
          data,
          total: data.length
        })
        return
      }

    } catch (err) {
      next(err)
    }
  }
}