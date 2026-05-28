import type { Request, Response, NextFunction } from 'express'
import type { Database } from '../../types/database.js'

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
    req: Request<{}, {}, {}, TQuery & { page?: string; limit?: string }>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      let paginationParams: { from?: number; to?: number } = {}

      if (options.pagination) {
        const page = Number(req.query.page || 1)
        const limit = Number(req.query.limit || 100)

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

      if (options.pagination) {
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
      }

    } catch (err) {
      next(err)
    }
  }
}