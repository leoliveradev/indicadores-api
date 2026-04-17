import { Router } from 'express'
import { getProvincias, getPartidos, getLocalidades } from '../controllers/geo.controller.js'

export const geoRouter = Router()

/**
 * @swagger
 * /geo/provincias:
 *   get:
 *     summary: Listado de provincias de Argentina
 *     tags: [Geo]
 *     responses:
 *       200:
 *         description: Lista de provincias
 */
geoRouter.get('/provincias', getProvincias)

/**
 * @swagger
 * /geo/partidos:
 *   get:
 *     summary: Listado de partidos
 *     tags: [Geo]
 *     parameters:
 *       - in: query
 *         name: provincia_id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de partidos
 */
geoRouter.get('/partidos', getPartidos)

/**
 * @swagger
 * /geo/localidades:
 *   get:
 *     summary: Listado de localidades
 *     tags: [Geo]
 *     parameters:
 *       - in: query
 *         name: partido_id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de localidades
 */
geoRouter.get('/localidades', getLocalidades)
