import type { Request, Response, NextFunction } from 'express'
import { supabase } from '../config/supabase.js'

export const getProvincias = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { data, error } = await supabase.from('provincias').select('*').order('provincia')
    if (error) throw error
    res.json({ data, total: data.length })
  } catch (err) { next(err) }
}

export const getPartidos = async (
  req: Request<{}, {}, {}, { provincia_id?: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { provincia_id } = req.query
    let query = supabase.from('partidos').select('*').order('partido')

    if (provincia_id) query = query.eq('provincia_id', Number(provincia_id)) as any

    const { data, error } = await query
    if (error) throw error
    res.json({ data, total: data.length })
  } catch (err) { next(err) }
}

export const getLocalidades = async (
  req: Request<{}, {}, {}, { partido_id?: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { partido_id } = req.query
    let query = supabase.from('localidades').select('*').order('localidad')
    if (partido_id) query = query.eq('partido_id', Number(partido_id)) as any
    const { data, error } = await query
    if (error) throw error
    res.json({ data, total: data.length })
  } catch (err) { next(err) }
}
