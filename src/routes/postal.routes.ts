import { Router } from 'express'
import { getFacturacion, getProduccion, getPersonalOcupado, getFacturacionProduccionProvincias } from '../controllers/postal.controller.js'

export const mercadoPostalRouter = Router()

/**
 * @swagger
 * /mercado-postal/facturacion:
 *   get:
 *     summary: Facturación del mercado postal (mensual)
 *     tags: [Mercado Postal]
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
mercadoPostalRouter.get('/facturacion', getFacturacion)

/**
 * @swagger
 * /mercado-postal/produccion:
 *   get:
 *     summary: Producción del mercado postal (mensual)
 *     tags: [Mercado Postal]
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
mercadoPostalRouter.get('/produccion', getProduccion)

/**
 * @swagger
 * /mercado-postal/personal-ocupado:
 *   get:
 *     summary: Personal ocupado en el mercado postal
 *     tags: [Mercado Postal]
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
mercadoPostalRouter.get('/personal-ocupado', getPersonalOcupado)

/**
 * @swagger
 * /mercado-postal/facturacion-produccion/provincias:
 *   get:
 *     summary: Facturación y producción postal por provincia
 *     tags: [Mercado Postal]
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
mercadoPostalRouter.get('/facturacion-produccion/provincias', getFacturacionProduccionProvincias)
