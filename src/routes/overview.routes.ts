import { Router } from 'express'
import { getOverview, getOverviewLatest } from '../controllers/overview.controller.js'

export const overviewRouter = Router()

/**
 * @swagger
 * /overview:
 *   get:
 *     summary: Indicadores generales del sector telecom
 *     tags: [Overview]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: mes
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
overviewRouter.get('/', getOverview)

/**
 * @swagger
 * /overview/latest:
 *   get:
 *     summary: Último período disponible
 *     tags: [Overview]
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
overviewRouter.get('/latest', getOverviewLatest)