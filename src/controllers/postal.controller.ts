import { createController } from './factories/controller.factory.js'
import { withMonth, withQuarter, withProvince } from './adapters/query.adapters.js'

export const getAccesos =
  createController('telefonia_fija_accesos', withQuarter)

export const getFacturacion = createController('mercado_postal_facturacion', withMonth)
export const getProduccion = createController('mercado_postal_produccion', withMonth)

export const getPersonalOcupado = createController('mercado_postal_personal_ocupado', withQuarter)

export const getFacturacionProduccionProvincias =
  createController(
    'mercado_postal_facturacion_produccion_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 60
    }
  )