import { Router } from 'express'
import {
  getAccesosBaf, getAccesosBafProvincias,
  getPenetracion, getPenetracionProvincias,
  getTecnologias, getTecnologiasProvincias, getTecnologiasLocalidades,
  getRangosVelocidad, getRangosVelocidadProvincias,
  getVelocidadMedia, getVelocidadMediaProvincias,
  getVelocidadProvincias, getVelocidadLocalidades,
  getIngresos
} from '../controllers/internet.controller.js'

export const internetRouter = Router()

/**
 * @swagger
 * /internet/accesos/baf:
 *   get:
 *     summary: Accesos de banda ancha fija y dial-up (nacional)
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: trimestre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/accesos/baf', getAccesosBaf)

/**
 * @swagger
 * /internet/accesos/baf/provincias:
 *   get:
 *     summary: Accesos de banda ancha fija por provincia
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: trimestre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: provincia
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Número de página (opcional)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 100
 *         description: Cantidad de registros por página (opcional)
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/accesos/baf/provincias', getAccesosBafProvincias)

/**
 * @swagger
 * /internet/penetracion:
 *   get:
 *     summary: Penetración de internet fijo (c/100 hab y c/100 hogares)
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: trimestre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/penetracion', getPenetracion)

/**
 * @swagger
 * /internet/penetracion/provincias:
 *   get:
 *     summary: Penetración de internet fijo (por provincias)
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: trimestre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: provincia
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Número de página (opcional)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 100
 *         description: Cantidad de registros por página (opcional)
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/penetracion/provincias', getPenetracionProvincias)

/**
 * @swagger
 * /internet/accesos/tecnologias:
 *   get:
 *     summary: Accesos por tecnología (ADSL, cablemodem, fibra óptica, wireless)
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: trimestre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/accesos/tecnologias', getTecnologias)

/**
 * @swagger
 * /internet/accesos/tecnologias/provincias:
 *   get:
 *     summary: Accesos por tecnología a nivel provincial
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: trimestre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: provincia
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Número de página (opcional)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 100
 *         description: Cantidad de registros por página (opcional)
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/accesos/tecnologias/provincias', getTecnologiasProvincias)

/**
 * @swagger
 * /internet/accesos/tecnologias/localidades:
 *   get:
 *     summary: Accesos por tecnología a nivel localidad
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: provincia
 *         schema:
 *           type: string
 *       - in: query
 *         name: localidad
 *         schema:
 *           type: string
 *       - in: query
 *         name: tecnologia
 *         schema:
 *           type: string
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/accesos/tecnologias/localidades', getTecnologiasLocalidades)

/**
 * @swagger
 * /internet/accesos/rangos-velocidad:
 *   get:
 *     summary: Accesos por rango de velocidad (nacional)
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: trimestre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/accesos/rangos-velocidad', getRangosVelocidad)

/**
 * @swagger
 * /internet/accesos/rangos-velocidad/provincias:
 *   get:
 *     summary: Accesos por rango de velocidad (por provincia)
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: trimestre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: provincia
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Número de página (opcional)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 100
 *         description: Cantidad de registros por página (opcional)
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/accesos/rangos-velocidad/provincias', getRangosVelocidadProvincias)

/**
 * @swagger
 * /internet/accesos/velocidad-media:
 *   get:
 *     summary: Velocidad media de descarga (Mbps, nacional)
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: trimestre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/accesos/velocidad-media', getVelocidadMedia)

/**
 * @swagger
 * /internet/accesos/velocidad-media/provincias:
 *   get:
 *     summary: Velocidad media de descarga (Mbps, por provincia)
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: trimestre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: provincia
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 100
 *         description: Cantidad de registros por página (opcional)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Número de página (opcional)
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/accesos/velocidad-media/provincias', getVelocidadMediaProvincias)

/**
 * @swagger
 * /internet/accesos/velocidad/provincias:
 *   get:
 *     summary: Velocidades en Mbps a nivel provincial
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: trimestre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: provincia
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Número de página (opcional)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 100
 *         description: Cantidad de registros por página (opcional)
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/accesos/velocidad/provincias', getVelocidadProvincias)

/**
 * @swagger
 * /internet/accesos/velocidad/localidades:
 *   get:
 *     summary: Velocidades en Mbps a nivel localidad
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: trimestre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: localidad
 *         schema:
 *           type: string
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/accesos/velocidad/localidades', getVelocidadLocalidades)

/**
 * @swagger
 * /internet/ingresos:
 *   get:
 *     summary: Ingresos del sector de internet fijo
 *     tags: [Internet]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: trimestre
 *         schema:
 *           type: integer
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [csv, excel]
 *         description: Formato de exportación de datos
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/ingresos', getIngresos)
