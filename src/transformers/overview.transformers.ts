import type { Tables } from '../types/database.js'

type Resumen = Tables<'resumen_ejecutivo'>

export const transformOverview = (row: Resumen) => {
  if (!row) return null

  return {
    periodo: `${row.anio}-${String(row.mes).padStart(2, '0')}`,

    accesos: {
      fija: row.accesos_fija,
      internet: row.accesos_internet,
      tv: row.accesos_tv,
      moviles: row.accesos_moviles
    },

    penetracion: {
      fija: row.penetracion_fija_100_hog,
      internet: row.penetracion_internet_100_hog,
      tv: row.penetracion_tv_100_hog,
      moviles: row.penetracion_moviles_100_hab
    },

    portabilidad: {
      moviles: {
        acumuladas: row.portabilidad_moviles_acum,
        mes: row.portabilidad_moviles_mes
      },
      fija: {
        acumuladas: row.portabilidad_fija_acum,
        mes: row.portabilidad_fija_mes
      }
    },

    miscelaneas: {
      velocidad_mbps: row.miscelaneas_vmd,
      radiobases_4g: row.miscelaneas_radiobases_4g,
      fibra_pct: row.miscelaneas_fibra_optica,
      satelital_pct: row.miscelaneas_satelital_crecimiento
    },

    ingresos: {
      fija: row.ingresos_fija,
      internet: row.ingresos_internet,
      tv: row.ingresos_tv,
      moviles: row.ingresos_moviles
    },

    postal: {
      facturacion: row.postal_facturacion,
      produccion: row.postal_produccion
    }
  }
}