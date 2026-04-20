import { Router } from 'express'
import { getAccesos, getIngresos, getLlamadas, getMinutos, getPenetracion, getSms } from '../controllers/moviles.controller.js'

export const movilesRouter = Router()

// const periodParams = [
//   { in: 'query', name: 'anio', schema: { type: 'integer' }, description: 'Filtrar por año' },
//   { in: 'query', name: 'trimestre', schema: { type: 'integer', enum: [1,2,3,4] }, description: 'Filtrar por trimestre' }
// ]

/**
 * @swagger
 * /comunicaciones-moviles/accesos:
 *   get:
 *     summary: Accesos móviles (pospago/prepago/operativos)
 *     tags: [Móviles]
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
movilesRouter.get('/accesos', getAccesos)

/**
 * @swagger
 * /comunicaciones-moviles/ingresos:
 *   get:
 *     summary: Ingresos del sector móvil
 *     tags: [Móviles]
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
movilesRouter.get('/ingresos', getIngresos)

/**
 * @swagger
 * /comunicaciones-moviles/llamadas:
 *   get:
 *     summary: Volumen de llamadas móviles
 *     tags: [Móviles]
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
movilesRouter.get('/llamadas', getLlamadas)

/**
 * @swagger
 * /comunicaciones-moviles/minutos:
 *   get:
 *     summary: Minutos cursados
 *     tags: [Móviles]
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
movilesRouter.get('/minutos', getMinutos)

/**
 * @swagger
 * /comunicaciones-moviles/penetracion:
 *   get:
 *     summary: Penetración móvil por c/100 hab
 *     tags: [Móviles]
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
movilesRouter.get('/penetracion', getPenetracion)

/**
 * @swagger
 * /comunicaciones-moviles/sms:
 *   get:
 *     summary: Volumen de SMS
 *     tags: [Móviles]
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
movilesRouter.get('/sms', getSms)
