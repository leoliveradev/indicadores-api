import type { Request, Response, NextFunction } from 'express'
import { queryWithPeriod } from '../helpers/query.js'
import type { PeriodQueryParams } from '../types/index.js'

const handler = (table: Parameters<typeof queryWithPeriod>[0]) =>
  async (req: Request<{}, {}, {}, PeriodQueryParams>, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { data, error } = await queryWithPeriod(table, req.query)
      if (error) throw error
      res.json({ data, total: data.length })
    } catch (err) { next(err) }
  }

export const getAccesos     = handler('comunicaciones_moviles_accesos')
export const getIngresos    = handler('comunicaciones_moviles_ingresos')
export const getLlamadas    = handler('comunicaciones_moviles_llamadas')
export const getMinutos     = handler('comunicaciones_moviles_minutos')
export const getPenetracion = handler('comunicaciones_moviles_penetracion')
export const getSms         = handler('comunicaciones_moviles_sms')