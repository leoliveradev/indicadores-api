import type { Request, Response, NextFunction } from 'express'
import type { Database } from '../../types/database.js'

export const createController = <
  TQuery,
  TTable extends keyof Database['public']['Tables']
>(
  table: TTable,
  queryFn: (table: TTable, filters: TQuery) => Promise<any>
) => {
  return async (
    req: Request<{}, {}, {}, TQuery>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { data, error } = await queryFn(table, req.query)

      if (error) throw error

      res.json({
        data,
        total: data.length
      })
    } catch (err) {
      next(err)
    }
  }
}