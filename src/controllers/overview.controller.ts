import type { Request, Response, NextFunction } from 'express'
import { queryLatest } from '../helpers/query.js'
import { createController } from './factories/controller.factory.js'
import { withMonth } from './adapters/query.adapters.js'
import { transformOverview } from '../transformers/overview.transformers.js'

export const getOverview = createController('resumen_ejecutivo', withMonth)


export const getOverviewLatest = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { data, error } = await queryLatest('resumen_ejecutivo')

    if (error) throw error

    const row = data?.[0]

    res.json(transformOverview(row))

  } catch (err) {
    next(err)
  }
}
// export const getOverviewLatest = async (
//   _req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     const { data, error } = await queryLatest('resumen_ejecutivo')

//     if (error) throw error

//     res.json(data?.[0] || null)

//   } catch (err) {
//     next(err)
//   }
// }