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

export const getAccesos               = nacional('tv_accesos')
export const getAccesosProvincias     = porProvincia('tv_accesos_provincias')
export const getIngresos              = nacional('tv_ingresos')
export const getPenetracion           = nacional('tv_penetracion')
export const getPenetracionProvincias = porProvincia('tv_penetracion_provincias')
