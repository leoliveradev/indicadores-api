import { createController, createLatestController } from './factories/controller.factory.js'
import { withQuarter, withProvince } from './adapters/query.adapters.js'
import { latestByQuarter } from '../helpers/query.js'

export const getAccesos = createController('telefonia_fija_accesos', withQuarter)
export const getAccesosProvincias =
  createController(
    'telefonia_fija_accesos_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 60
    }
  )
export const getAccesosProvinciasLatest =
  createLatestController(
    'telefonia_fija_accesos_provincias',
    latestByQuarter,
    { cache: true, ttl: 60 }
  )

export const getIngresos = createController('telefonia_fija_ingresos', withQuarter)
export const getPenetracion = createController('telefonia_fija_penetracion', withQuarter)
export const getPenetracionProvincias =
  createController(
    'telefonia_fija_penetracion_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 60
    }
  )
export const getPenetracionProvinciasLatest =
  createLatestController(
    'telefonia_fija_penetracion_provincias',
    latestByQuarter,
    { cache: true, ttl: 60 }
  )