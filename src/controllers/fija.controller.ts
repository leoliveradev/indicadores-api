import { createController } from './factories/controller.factory.js'
import { withQuarter, withProvince } from './adapters/query.adapters.js'

export const getAccesos               = createController('telefonia_fija_accesos', withQuarter)
export const getAccesosProvincias     = createController('telefonia_fija_accesos_provincias', withProvince)
export const getIngresos              = createController('telefonia_fija_ingresos', withQuarter)
export const getPenetracion           = createController('telefonia_fija_penetracion', withQuarter)
export const getPenetracionProvincias = createController('telefonia_fija_penetracion_provincias', withProvince)
