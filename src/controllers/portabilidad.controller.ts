import type { Request, Response, NextFunction } from 'express'
import { queryWithMes } from '../helpers/query.js'

type MesQuery = { anio?: string; mes?: string }

export const getPortabilidadMovil = async (
  req: Request<{}, {}, {}, MesQuery>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { data, error } = await queryWithMes('portabiliad_movil', req.query)
    if (error) throw error
    res.json({ data, total: data.length })
  } catch (err) { next(err) }
}
