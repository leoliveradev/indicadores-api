import { Router } from 'express'
import { getAccesos, getAccesosProvincias, getAccesosProvinciasLatest, getIngresos, getPenetracion, getPenetracionProvincias, getPenetracionProvinciasLatest } from '../controllers/fija.controller.js'

export const telefoniaFijaRouter = Router()

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
telefoniaFijaRouter.get('/accesos', getAccesos)

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
telefoniaFijaRouter.get('/accesos/provincias', getAccesosProvincias)

/**
 * @swagger
 * /telefonia-fija/accesos/provincias/latest:
 *   get:
 *     summary: Accesos de telefonía fija por provincia (último período disponible)
 *     tags: [Telefonía Fija]
 *     parameters:
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
telefoniaFijaRouter.get('/accesos/provincias/latest', getAccesosProvinciasLatest)

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
telefoniaFijaRouter.get('/ingresos', getIngresos)

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
telefoniaFijaRouter.get('/penetracion', getPenetracion)

/**
 * @swagger
 * /telefonia-fija/penetracion/provincias:
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
telefoniaFijaRouter.get('/penetracion/provincias', getPenetracionProvincias)

/**
 * @swagger
 * /telefonia-fija/penetracion/provincias/latest:
 *   get:
 *     summary: Penetración de telefonía fija por provincia (último período disponible)
 *     tags: [Telefonía Fija]
 *     parameters:
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
telefoniaFijaRouter.get('/penetracion/provincias/latest', getPenetracionProvinciasLatest)
