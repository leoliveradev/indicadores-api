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
 * /internet/accesos:
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
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/accesos', getAccesosBaf)

/**
 * @swagger
 * /internet/accesos/provincias:
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
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/accesos/provincias', getAccesosBafProvincias)

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
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/penetracion/provincias', getPenetracionProvincias)

/**
 * @swagger
 * /internet/tecnologias:
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
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/tecnologias', getTecnologias)

/**
 * @swagger
 * /internet/tecnologias/provincias:
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
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/tecnologias/provincias', getTecnologiasProvincias)

/**
 * @swagger
 * /internet/tecnologias/localidades:
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
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/tecnologias/localidades', getTecnologiasLocalidades)

/**
 * @swagger
 * /internet/velocidad/rangos:
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
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/velocidad/rangos', getRangosVelocidad)

/**
 * @swagger
 * /internet/velocidad/rangos/provincias:
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
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/velocidad/rangos/provincias', getRangosVelocidadProvincias)

/**
 * @swagger
 * /internet/velocidad/media:
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
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/velocidad/media', getVelocidadMedia)

/**
 * @swagger
 * /internet/velocidad/media/provincias:
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
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/velocidad/media/provincias', getVelocidadMediaProvincias)

/**
 * @swagger
 * /internet/velocidad/provincias:
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
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/velocidad/provincias', getVelocidadProvincias)

/**
 * @swagger
 * /internet/velocidad/localidades:
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
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/velocidad/localidades', getVelocidadLocalidades)

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
 *     responses:
 *       200:
 *         description: OK
 */
internetRouter.get('/ingresos', getIngresos)
