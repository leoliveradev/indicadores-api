import { Router } from 'express'
import { getFacturacion, getProduccion, getPersonalOcupado, getFacturacionProduccionProvincias, getFacturacionProduccionProvinciasLatest } from '../controllers/postal.controller.js'

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
mercadoPostalRouter.get('/facturacion-produccion/provincias', getFacturacionProduccionProvincias)


/**
 * @swagger
 * /mercado-postal/facturacion-produccion/provincias/latest:
 *   get:
 *     summary: Facturación y producción postal por provincia (último período disponible)
 *     tags: [Mercado Postal]
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
mercadoPostalRouter.get('/facturacion-produccion/provincias/latest', getFacturacionProduccionProvinciasLatest)
