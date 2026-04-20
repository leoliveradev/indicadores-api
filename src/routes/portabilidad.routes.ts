import { Router } from 'express'
import { getPortabilidadMovil } from '../controllers/portabilidad.controller.js'

export const portabilidadRouter = Router()


/**
 * @swagger
 * /portabilidad/moviles:
 *   get:
 *     summary: Portabilidad numérica móvil (mensual)
 *     tags: [Portabilidad]
 *     parameters:
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *       - in: query
 *         name: mes
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 */
portabilidadRouter.get('/moviles', getPortabilidadMovil)
