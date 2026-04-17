import { Router } from 'express'
import { getAccesos, getAccesosProvincias, getIngresos, getPenetracion, getPenetracionProvincias } from '../controllers/telefonia.controller.js'

export const telefoniaRouter = Router()

/**
 * @swagger
 * /telefonia-fija/accesos:
 *   get:
 *     summary: Accesos de telefonía fija (hogares, comercial, gobierno)
 *     tags: [Telefonía Fija]
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
telefoniaRouter.get('/accesos', getAccesos)

/**
 * @swagger
 * /telefonia-fija/accesos/provincias:
 *   get:
 *     summary: Accesos de telefonía fija por provincia
 *     tags: [Telefonía Fija]
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
telefoniaRouter.get('/accesos/provincias', getAccesosProvincias)

/**
 * @swagger
 * /telefonia-fija/ingresos:
 *   get:
 *     summary: Ingresos del sector de telefonía fija
 *     tags: [Telefonía Fija]
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
telefoniaRouter.get('/ingresos', getIngresos)

/**
 * @swagger
 * /telefonia-fija/penetracion:
 *   get:
 *     summary: Penetración de telefonía fija (c/100 hab y c/100 hogares)
 *     tags: [Telefonía Fija]
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
telefoniaRouter.get('/penetracion', getPenetracion)
telefoniaRouter.get('/penetracion/provincias', getPenetracionProvincias)
