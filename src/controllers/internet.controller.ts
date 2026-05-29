import type { Request, Response, NextFunction } from 'express'

import { createController } from './factories/controller.factory.js'
import { withQuarter, withProvince } from './adapters/query.adapters.js'


// BAF (banda ancha fija)
export const getAccesosBaf = createController('internet_accesos_baf', withQuarter)
export const getAccesosBafProvincias =
  createController(
    'internet_accesos_baf_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 60
    }
  )

// Penetración
export const getPenetracion = createController('internet_accesos_penetracion', withQuarter)
export const getPenetracionProvincias =
  createController(
    'internet_accesos_penetracion_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 60
    }
  )

// Tecnologías
export const getTecnologias = createController('internet_accesos_tecnologias', withQuarter)
export const getTecnologiasProvincias =
  createController(
    'internet_accesos_tecnologias_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 60
    }
  )


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
export const getRangosVelocidad = createController('internet_accesos_rangos_velocidad', withQuarter)
export const getRangosVelocidadProvincias =
  createController(
    'internet_accesos_rangos_velocidad_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 60
    }
  )

// Velocidad media de descarga
export const getVelocidadMedia = createController('internet_velocidad_media_descarga', withQuarter)
export const getVelocidadMediaProvincias =
  createController(
    'internet_velocidad_media_descarga_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 60
    }
  )

// Velocidad por provincia y localidad
export const getVelocidadProvincias =
  createController(
    'internet_accesos_velocidad_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 60
    }
  )


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
export const getIngresos = createController('internet_ingresos', withQuarter)
