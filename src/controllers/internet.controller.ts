import { createController, createLatestController } from './factories/controller.factory.js'
import { withQuarter, withProvince, withVelocidadLocalidad, withTecnologiaLocalidad } from './adapters/query.adapters.js'
import { latestByQuarter } from '../helpers/query.js'


// BAF (banda ancha fija)
export const getAccesosBaf = createController('internet_accesos_baf', withQuarter)
export const getAccesosBafProvincias =
  createController(
    'internet_accesos_baf_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 86400
    }
  )
export const getAccesosBafProvinciasLatest =
  createLatestController(
    'internet_accesos_baf_provincias',
    latestByQuarter,
    {
      cache: true,
      ttl: 86400
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
      ttl: 86400
    }
  )
export const getPenetracionProvinciasLatest =
  createLatestController(
    'internet_accesos_penetracion_provincias',
    latestByQuarter,
    {
      cache: true,
      ttl: 86400
    }
  )

// Tecnologías
export const getTecnologias =
  createController(
    'internet_accesos_tecnologias',
    withQuarter
  )

export const getTecnologiasProvincias =
  createController(
    'internet_accesos_tecnologias_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 86400
    }
  )
export const getTecnologiasProvinciasLatest =
  createLatestController(
    'internet_accesos_tecnologias_provincias',
    latestByQuarter,
    {
      cache: true,
      ttl: 86400
    }
  )

// Tecnologías por localidad — filtro por provincia/localidad
export const getTecnologiasLocalidades =
  createController(
    'internet_accesos_tecnologias_localidades',
    withTecnologiaLocalidad,
    {
      pagination: true,
      cache: true,
      ttl: 300
    }
  )

// Rangos de velocidad
export const getRangosVelocidad = createController('internet_accesos_rangos_velocidad', withQuarter)
export const getRangosVelocidadProvincias =
  createController(
    'internet_accesos_rangos_velocidad_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 86400
    }
  )
export const getRangosVelocidadProvinciasLatest =
  createLatestController(
    'internet_accesos_rangos_velocidad_provincias',
    latestByQuarter,
    {
      cache: true,
      ttl: 86400
    }
  )

// Velocidad media de descarga
export const getVelocidadMedia =
  createController(
    'internet_velocidad_media_descarga',
    withQuarter
  )
export const getVelocidadMediaProvincias =
  createController(
    'internet_velocidad_media_descarga_provincias',
    withProvince,
    {
      pagination: true,
      cache: true,
      ttl: 86400
    }
  )
export const getVelocidadMediaProvinciasLatest =
  createLatestController(
    'internet_velocidad_media_descarga_provincias',
    latestByQuarter,
    {
      cache: true,
      ttl: 86400
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
      ttl: 86400
    }
  )
export const getVelocidadProvinciasLatest =
  createLatestController(
    'internet_accesos_velocidad_provincias',
    latestByQuarter,
    {
      cache: true,
      ttl: 86400
    }
  )

export const getVelocidadLocalidades =
  createController(
    'internet_accesos_velocidad_localidades',
    withVelocidadLocalidad,
    {
      pagination: true,
      cache: true,
      ttl: 86400
    }
  )

export const getIngresos = createController('internet_ingresos', withQuarter)
