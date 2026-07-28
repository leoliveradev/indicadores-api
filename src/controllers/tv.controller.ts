import { createController, createLatestController } from './factories/controller.factory.js'
import { withQuarter, withProvince } from './adapters/query.adapters.js'
import { latestByQuarter } from '../helpers/query.js'

export const getAccesos = createController('tv_accesos', withQuarter)
export const getAccesosProvincias =
  createController(
    'tv_accesos_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 60
    }
  )
export const getAccesosProvinciasLatest =
  createLatestController(
    'tv_accesos_provincias',
    latestByQuarter,
    { cache: true, ttl: 60 }
  )

export const getPenetracion = createController('tv_penetracion', withQuarter)
export const getPenetracionProvincias =
  createController(
    'tv_penetracion_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 60
    }
  )
export const getPenetracionProvinciasLatest =
  createLatestController(
    'tv_penetracion_provincias',
    latestByQuarter,
    { cache: true, ttl: 60 }
  )
  
export const getIngresos = createController('tv_ingresos', withQuarter)