import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './config/swagger.js'

import { geoRouter } from './routes/geo.routes.js'
import { overviewRouter } from './routes/overview.routes.js'
import { internetRouter } from './routes/internet.routes.js'
import { movilesRouter } from './routes/moviles.routes.js'
import { portabilidadRouter } from './routes/portabilidad.routes.js'
import { telefoniaFijaRouter } from './routes/fija.routes.js'
import { televisionRouter } from './routes/tv.routes.js'
import { mercadoPostalRouter } from './routes/postal.routes.js'
import { errorHandler, notFound } from './middlewares/errorHandler.js'


const app = express()
const PORT: number = parseInt(process.env.PORT || '10000', 10)
const HOST: string = process.env.HOST || '0.0.0.0'

app.use(cors())
app.use(express.json())

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Health check
app.get('/', (_req, res) => {
  res.json({
    name: 'ENACOM INDICADORES API',
    version: '1.0.0',
    docs: '/api-docs',
    endpoints: {
      geo: '/api/v1/geo',
      overview: '/api/v1/overview',
      internet: '/api/v1/internet',
      comunicaciones_moviles: '/api/v1/comunicaciones-moviles',
      telefonia_fija: '/api/v1/telefonia-fija',
      television: '/api/v1/television',
      portabilidad: '/api/v1/portabilidad',
      mercado_postal: '/api/v1/mercado-postal',
    }
  })
})

// Rutas
app.use('/api/v1/geo', geoRouter)
app.use('/api/v1/overview', overviewRouter)
app.use('/api/v1/internet', internetRouter)
app.use('/api/v1/comunicaciones-moviles', movilesRouter)
app.use('/api/v1/portabilidad', portabilidadRouter)
app.use('/api/v1/telefonia-fija', telefoniaFijaRouter)
app.use('/api/v1/television', televisionRouter)
app.use('/api/v1/mercado-postal', mercadoPostalRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, HOST, () => {
  console.log(`🚀 ENACOM INDICADORES API running on http://${HOST}:${PORT}`)
  console.log(`📄 Documentation on http://${HOST}:${PORT}/api-docs`)
})

