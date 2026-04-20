import type { Request, Response, NextFunction } from 'express'
import { queryWithMes, queryWithProvincia } from '../helpers/query.js'
import type { ProvinciaQueryParams } from '../types/index.js'

type MesQuery = { anio?: string; mes?: string }

const porMes = (table: Parameters<typeof queryWithMes>[0]) =>
  async (req: Request<{}, {}, {}, MesQuery>, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { data, error } = await queryWithMes(table, req.query)
      if (error) throw error
      res.json({ data, total: data.length })
    } catch (err) { next(err) }
  }

export const getFacturacion = porMes('mercado_postal_facturacion')
export const getProduccion  = porMes('mercado_postal_produccion')

export const getPersonalOcupado = async (
  req: Request<{}, {}, {}, { anio?: string; trimestre?: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { anio, trimestre } = req.query
    const { supabase } = await import('../config/supabase.js')
    let query = supabase.from('mercado_postal_personal_ocupado').select('*') as any
    if (anio) query = query.eq('anio', Number(anio))
    if (trimestre) query = query.eq('trimestre', Number(trimestre))
    const { data, error } = await query.order('anio').order('trimestre')
    if (error) throw error
    res.json({ data, total: data.length })
  } catch (err) { next(err) }
}

export const getFacturacionProduccionProvincias = async (
  req: Request<{}, {}, {}, ProvinciaQueryParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { data, error } = await queryWithProvincia('mercado_postal_facturacion_produccion_provincias', req.query)
    if (error) throw error
    res.json({ data, total: data.length })
  } catch (err) { next(err) }
}
