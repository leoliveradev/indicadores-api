import type { Request, Response, NextFunction } from 'express'
import { queryWithFilters } from '../helpers/query.js'

type MesQuery = { anio?: string; mes?: string }

const filterByMonth  = (table: Parameters<typeof queryWithFilters>[0]) =>
  async (
    req: Request<{}, {}, {}, MesQuery>, 
    res: Response, 
    next: NextFunction
  ): Promise<void> => {
    try {
      const { data, error } = await queryWithFilters(table, req.query, ['anio', 'mes'])
      if (error) throw error
      res.json({ data, total: data.length })
    } catch (err) { next(err) }
  }

export const getPortabilidadMovil = filterByMonth('portabilidad_movil')