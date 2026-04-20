import { Router } from 'express'
import { getAccesos, getAccesosProvincias, getIngresos, getPenetracion, getPenetracionProvincias } from '../controllers/tv.controller.js'

export const televisionRouter = Router()

/**
 * @swagger
 * /television/accesos:
 *   get:
 *     summary: Accesos de TV por suscripción y satelital
 *     tags: [TV]
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
televisionRouter.get('/accesos', getAccesos)

/**
 * @swagger
 * /television/accesos/provincias:
 *   get:
 *     summary: Accesos de TV por suscripción por provincia
 *     tags: [TV]
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
televisionRouter.get('/accesos/provincias', getAccesosProvincias)

/**
 * @swagger
 * /television/ingresos:
 *   get:
 *     summary: Ingresos del sector de TV
 *     tags: [TV]
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
televisionRouter.get('/ingresos', getIngresos)

/**
 * @swagger
 * /television/penetracion:
 *   get:
 *     summary: Penetración de TV (c/100 hab y c/100 hogares)
 *     tags: [TV]
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
televisionRouter.get('/penetracion', getPenetracion)

/**
 * @swagger
 * /television/penetracion/provincias:
 *   get:
 *     summary: Penetración de TV (c/100 hab y c/100 hogares)
 *     tags: [TV]
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
televisionRouter.get('/penetracion/provincias', getPenetracionProvincias)
