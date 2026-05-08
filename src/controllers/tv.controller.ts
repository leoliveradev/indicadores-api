import { createController } from './factories/controller.factory.js'
import { withQuarter, withProvince } from './adapters/query.adapters.js'

export const getAccesos               = createController('tv_accesos', withQuarter)
export const getAccesosProvincias     = createController('tv_accesos_provincias', withProvince)
export const getIngresos              = createController('tv_ingresos', withQuarter)
export const getPenetracion           = createController('tv_penetracion', withQuarter)
export const getPenetracionProvincias = createController('tv_penetracion_provincias', withProvince)
