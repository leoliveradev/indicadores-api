import { createController } from './factories/controller.factory.js'
import { withQuarter } from './adapters/query.adapters.js'

export const getAccesos     = createController('comunicaciones_moviles_accesos', withQuarter)
export const getIngresos    = createController('comunicaciones_moviles_ingresos', withQuarter)
export const getLlamadas    = createController('comunicaciones_moviles_llamadas', withQuarter)
export const getMinutos     = createController('comunicaciones_moviles_minutos', withQuarter)
export const getPenetracion = createController('comunicaciones_moviles_penetracion', withQuarter)
export const getSms         = createController('comunicaciones_moviles_sms', withQuarter)