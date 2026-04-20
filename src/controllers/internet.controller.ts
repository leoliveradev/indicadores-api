import type { Request, Response, NextFunction } from 'express'
import { queryWithPeriod, queryWithProvincia } from '../helpers/query.js'
import type { PeriodQueryParams, ProvinciaQueryParams } from '../types/index.js'

// Helper para endpoints nacionales
const nacional = (table: Parameters<typeof queryWithPeriod>[0]) =>
  async (req: Request<{}, {}, {}, PeriodQueryParams>, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { data, error } = await queryWithPeriod(table, req.query)
      if (error) throw error
      res.json({ data, total: data.length })
    } catch (err) { next(err) }
  }

// Helper para endpoints por provincia
const porProvincia = (table: Parameters<typeof queryWithProvincia>[0]) =>
  async (req: Request<{}, {}, {}, ProvinciaQueryParams>, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { data, error } = await queryWithProvincia(table, req.query)
      if (error) throw error
      res.json({ data, total: data.length })
    } catch (err) { next(err) }
  }

// BAF (banda ancha fija)
export const getAccesosBaf            = nacional('internet_accesos_baf')
export const getAccesosBafProvincias  = porProvincia('internet_accesos_baf_provincias')

// Penetración
export const getPenetracion           = nacional('internet_accesos_penetracion')
export const getPenetracionProvincias = porProvincia('internet_accesos_penetracion_provincias')

// Tecnologías
export const getTecnologias           = nacional('internet_accesos_tecnologias')
export const getTecnologiasProvincias = porProvincia('internet_accesos_tecnologias_provincias')

// Tecnologías por localidad — filtro por provincia/localidad
export const getTecnologiasLocalidades = async (
  req: Request<{}, {}, {}, { provincia?: string; localidad?: string; tecnologia?: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { provincia, localidad, tecnologia } = req.query
    let query = (await import('../config/supabase.js')).supabase
      .from('internet_accesos_tecnologias_localidades')
      .select('*') as any
    if (provincia) query = query.ilike('provincia', `%${provincia}%`)
    if (localidad) query = query.ilike('localidad', `%${localidad}%`)
    if (tecnologia) query = query.ilike('tecnologia', `%${tecnologia}%`)
    const { data, error } = await query.order('provincia').order('localidad')
    if (error) throw error
    res.json({ data, total: data.length })
  } catch (err) { next(err) }
}

// Rangos de velocidad
export const getRangosVelocidad           = nacional('internet_accesos_rangos_velocidad')
export const getRangosVelocidadProvincias = porProvincia('internet_accesos_rangos_velocidad_provincias')

// Velocidad media de descarga
export const getVelocidadMedia           = nacional('internet_velocidad_media_descarga')
export const getVelocidadMediaProvincias = porProvincia('internet_velocidad_media_descarga_provincias')

// Velocidad por provincia y localidad
export const getVelocidadProvincias = porProvincia('internet_accesos_velocidad_provincias')

export const getVelocidadLocalidades = async (
  req: Request<{}, {}, {}, { provincia?: string; localidad?: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { provincia, localidad } = req.query
    let query = (await import('../config/supabase.js')).supabase
      .from('internet_accesos_velocidad_localidades')
      .select('*') as any
    if (provincia) query = query.ilike('provincia', `%${provincia}%`)
    if (localidad) query = query.ilike('localidad', `%${localidad}%`)
    const { data, error } = await query.order('provincia').order('localidad')
    if (error) throw error
    res.json({ data, total: data.length })
  } catch (err) { next(err) }
}

// Ingresos
export const getIngresos = nacional('internet_ingresos')
