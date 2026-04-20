import type { Request, Response, NextFunction } from 'express'
import { queryWithPeriod, queryWithProvincia } from '../helpers/query.js'
import type { PeriodQueryParams, ProvinciaQueryParams } from '../types/index.js'

const nacional = (table: Parameters<typeof queryWithPeriod>[0]) =>
  async (req: Request<{}, {}, {}, PeriodQueryParams>, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { data, error } = await queryWithPeriod(table, req.query)
      if (error) throw error
      res.json({ data, total: data.length })
    } catch (err) { next(err) }
  }

const porProvincia = (table: Parameters<typeof queryWithProvincia>[0]) =>
  async (req: Request<{}, {}, {}, ProvinciaQueryParams>, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { data, error } = await queryWithProvincia(table, req.query)
      if (error) throw error
      res.json({ data, total: data.length })
    } catch (err) { next(err) }
  }

export const getAccesos               = nacional('telefonia_fija_accesos')
export const getAccesosProvincias     = porProvincia('telefonia_fija_accesos_provincias')
export const getIngresos              = nacional('telefonia_fija_ingresos')
export const getPenetracion           = nacional('telefonia_fija_penetracion')
export const getPenetracionProvincias = porProvincia('telefonia_fija_penetracion_provincias')
