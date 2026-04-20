import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './config/swagger.js'

import { geoRouter } from './routes/geo.routes.js'
import { internetRouter } from './routes/internet.routes.js'
import { movilesRouter } from './routes/moviles.routes.js'
import { portabilidadRouter } from './routes/portabilidad.routes.js'
import { telefoniaFijaRouter } from './routes/fija.routes.js'
import { televisionRouter } from './routes/tv.routes.js'
import { mercadoPostalRouter } from './routes/postal.routes.js'
import { errorHandler, notFound } from './middlewares/errorHandler.js'


const app = express()
const PORT = process.env.PORT ?? 3000

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
      internet: '/api/v1/internet',
      comunicaciones_moviles: '/api/v1/comunicaciones-moviles',
      telefonia_fija: '/api/v1/telefonia-fija',
      television: '/api/v1/television',
      portabilidad: '/api/v1/portabilidad',
      mercado_postal: '/api/v1/mercado-postal',
    }
  })
})

app.use((req, _res, next) => {
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Method: ${req.method}`);
  next();
});

// Rutas
app.use('/api/v1/geo',      geoRouter)
app.use('/api/v1/internet',      internetRouter)
app.use('/api/v1/comunicaciones-moviles',      movilesRouter)
app.use('/api/v1/portabilidad',      portabilidadRouter)
app.use('/api/v1/telefonia-fija',      telefoniaFijaRouter)
app.use('/api/v1/television',      televisionRouter)
app.use('/api/v1/mercado-postal',      mercadoPostalRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`🚀 ENACOM INDICADORES API running on http://localhost:${PORT}`)
  console.log(`📄 Documentation on http://localhost:${PORT}/api-docs`)
})

